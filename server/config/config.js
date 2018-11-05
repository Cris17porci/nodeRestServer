// ==============
//  Puerto
// ==============
process.env.PORT = process.env.PORT || 8080;
// ==============
//  Entorno
// ==============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'
    // ==============
    //  Entorno
    // ==============
    /* let urlDB;
    if (process.env.NODE_ENV === 'dev') {
        urlDB = 'mongodb://localhost:27017/botilleria'
    } else {
        urlDB = 'mongodb://cperezgo:depto1206!@cluster0-shard-00-00-kupno.mongodb.net:27017,cluster0-shard-00-01-kupno.mongodb.net:27017,cluster0-shard-00-02-kupno.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
    }
    process.env.URLDB = urlDB */
process.env.URLDB = 'mongodb://cperezgo:depto1206!@cluster0-shard-00-00-kupno.mongodb.net:27017,cluster0-shard-00-01-kupno.mongodb.net:27017,cluster0-shard-00-02-kupno.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'