var configDb = require('./config')

module.exports = {
    getDbConnectionString: function (){
        return 'mongodb://'+configDb.uname+':'+configDb.pwd+'@ds255889.mlab.com:55889/nodetodoapp';
    }

}
