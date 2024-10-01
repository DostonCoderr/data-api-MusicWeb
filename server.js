const jsonServer = require('json-server');

// Create a server
const server = jsonServer.create();

// Create a router and specify the path to your db.json
const router = jsonServer.router('db.json');

// Use default middlewares (e.g., logger, static files, CORS)
const middlewares = jsonServer.defaults();

// Use the middlewares
server.use(middlewares);

// Use the router
server.use(router);

// Listen on the specified port, binding to 0.0.0.0 for external access
const PORT = process.env.PORT || 4000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

