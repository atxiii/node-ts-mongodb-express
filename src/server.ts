import app from './app';
import { connectDB } from './db/connection';
import debug from 'debug';

const startDebugging = debug('app:server');
startDebugging('started');

/*
 * Start Database
 */
connectDB();

/*
 * Set Variable and Middleware
 */
const PORT = normalizePort(app.get('port'));

/*
 * Start Express Server
 */
const startServer = async () => {
  app.listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}`);
  });
};

startServer();

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
