import {createServer} from 'node:http';

const PORT = 80;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.write(JSON.stringify(req.headers, null, 2));

    res.end();
});

server.listen(PORT);
