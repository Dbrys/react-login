import UserServer from './index';

const port = Number(process.env.PORT) || 8080;

// Start the server or run tests
  const server = new UserServer();
  server.start(port);