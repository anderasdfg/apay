/* Import Libraries and Dependencies */
const http = require("http");
const app = require('./app');
require('./database/conn');

/* Config Server */
const PORT = app.get('port');
const server = http.createServer(app);
server.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);