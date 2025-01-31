//Cross Origin Resource Sharing
const whitelist = ['https://googlex.com'];
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback( new Effor('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions;
