const path = require('path');


module.exports = {
    outputDir: path.resolve(__dirname, '../public'),
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                secure:false
            },
            '/img': {
                target: 'http://localhost:8080'
            },
            '/csv': {
                target: 'http://localhost:8080'
            }


        }
    }
}