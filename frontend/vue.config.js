const path = require('path');


module.exports = {
    outputDir: path.resolve(__dirname, '../public'),
    devServer: {
        proxy: {
            '/api': {
                target: 'http://pappsatan.herokuapp.com',
                secure:false
            },
            '/img': {
                target: 'http://localhost:8081'
            },
            '/csv': {
                target: 'http://localhost:8080'
            }


        }
    }
}