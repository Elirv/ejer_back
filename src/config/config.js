const dotenv = require("dotenv");
const logger = require("loglevel");

dotenv.config();

const ENV = process.env.NODE_ENV || 'development'

logger.enableAll();

const CONFIG = {
  development: {
    app: {
      PORT: process.env.PORT || 4001,
    },
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug,
    },
    //conectamos nuestra URI a la Base de datos
    db: {
      uri: process.env.MONGODB_URI_CLUSTER,
    } //nuestro archivo de.json ya no  nos hace falta 
    //creamos el archivo connect.js
  },
  production: { // y otro para testear
    app: {
      PORT: process.env.PORT || 4001,
    },
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug,
    },
    db: {
      url: "http://localhost:4002/albums",
    }
  }
}

module.exports = CONFIG[ENV];
