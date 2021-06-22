import DemoServer from './index';

const port = Number(process.env.PORT) || 3000;

// Start the server or run tests
if (process.argv[2] !== 'test') {
    let server = new DemoServer();
    server.start(port);
} else {}