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
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/botilleria'
} else {
    urlDB = 'mongodb+srv://cperezgo:depto1206!@cluster0-kupno.mongodb.net/test?retryWrites=true'
};
process.env.URLDB = urlDB;