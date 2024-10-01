const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // path to your db.json in the root directory

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 4000, () => {
  console.log('JSON Server is running');
});
