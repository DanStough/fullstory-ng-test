const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');

const app = express();

const port = process.env.SERVER_PORT;
const fsKey = process.env.FULLSTORY_API_KEY;
const ghToken = process.env.GITHUB_OAUTH_TOKEN;

app.use(express.static(path.join(__dirname, 'public')));


app.use('/fullstory', proxy('https://www.fullstory.com', {
    proxyReqOptDecorator: (proxyReqOpts, srcReq)=> {
        proxyReqOpts.headers['Authorization'] = 'Basic ' + fsKey;
        proxyReqOpts.headers['Content-Type'] = 'application/json';
        return proxyReqOpts
    }
}));

app.use('/github', proxy('https://api.github.com', {
    proxyReqOptDecorator: (proxyReqOpts, srcReq)=> {
        proxyReqOpts.headers['Authorization'] = 'token ' + ghToken;
        proxyReqOpts.headers['Accept'] = 'application/vnd.github.v3+json';
        proxyReqOpts.headers['Content-Type'] = 'application/json';
        return proxyReqOpts
    }
}));

app.listen(port, () => console.log(`FullStory Challenge app server listening on port ${port}!`))