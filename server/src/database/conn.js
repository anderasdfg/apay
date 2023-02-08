const mongoose = require('mongoose');
const URI = process.env.DATABASE_URI

mongoose.connect(URI, {
    useNewUrlParser: true,      
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.on("error", console.error.bind(console, "connection error: "));

connection.on('open', () => {
    console.log("DB Connected");
});