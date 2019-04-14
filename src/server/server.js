const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');

const app = express();

const port = process.env.SERVER_PORT;
const fsKey = process.env.FULLSTORY_API_KEY;


app.use(express.static(path.join(__dirname, 'public')));


app.use('/fullstory', proxy('https://www.fullstory.com', {
    proxyReqOptDecorator: (proxyReqOpts, srcReq)=> {
        proxyReqOpts.headers['Authorization'] = 'Basic ' + fsKey;
        proxyReqOpts.headers['Content-Type'] = 'application/json';
        return proxyReqOpts
    }
}));

app.listen(port, () => console.log(`FullStory Challenge app server listening on port ${port}!`))