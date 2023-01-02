const allowedOrigins = require("./allowedOrigins");

// allows the specified list of orgins to access server "allowed origins", need to provide options to handle
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true); /// first parameter is and error so here there is none so null, second parameter is boolean if worked so here = true
    } else [callack(new Error("Not allowed by Cors"))];
  },

  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
