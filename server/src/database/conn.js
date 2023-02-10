const mongoose = require('mongoose');

const URI = 'mongodb+srv://acandela:KxPCxSLgznlxqiti@cluster0.ecdf4cn.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URI, {
    useNewUrlParser: true,      
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.on("error", console.error.bind(console, "connection error: "));

connection.on('open', () => {
    console.log("DB Connected");
});