import UserServer from './index';

const port = Number(process.env.PORT) || 8080;

// Start the server or run tests
if (process.argv[2] !== 'test') {
    let server = new UserServer();
    server.start(port);
} else {}