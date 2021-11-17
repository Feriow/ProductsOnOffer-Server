const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const routes = jsonServer.router(path.join(__dirname, "db.json"));
const middleware = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middleware);
server.use(routes);
server.listen(port);
