// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users')) || [];
    
export function configureBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Authenticate user
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    let params = JSON.parse(opts.body);
                    let filteredUsers = users.filter(user => {
                        return user.username === params.username && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        let user = filteredUsers[0];
                        let responseJson = {
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            token: 'user-token'
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        reject('Username or password is incorrect');
                    }

                    return;
                }

                // get user by username
                if (url.match(/\/users\/[a-z0-9]+$/) && opts.method === 'GET') {
                    if (opts.headers && opts.headers.Authorization === 'Bearer user-token') {
                        let urlParts = url.split('/');
                        console.log(urlParts);
                        let username = urlParts[urlParts.length - 1];
                        console.log(username);
                        let matchedUsers = users.filter(user => { return user.username === username; });
                        let user = matchedUsers.length ? matchedUsers[0] : null;
                        console.log(user);
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(user))});
                    } else {
                        reject('Unauthorised');
                    }

                    return;
                }

                // register user
                if (url.endsWith('/users/register') && opts.method === 'POST') {
                    let newUser = JSON.parse(opts.body);

                    let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
                    if (duplicateUser) {
                        reject('Username "' + newUser.username + '" is already taken');
                        return;
                    }

                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));

                    resolve({ ok: true, text: () => Promise.resolve() });

                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}
