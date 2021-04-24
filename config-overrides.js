const path = require('path');

module.exports = {
    paths: function (paths, env) {        
        paths.appHtml = path.resolve(__dirname, 'src/index.html');
        return paths;
    },
}
