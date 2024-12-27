import {createServer} from 'node:http';
import {env} from 'node:process';

const PORT = env.PORT;

const server = createServer((req, res) => {
    res.statusCode = 200;
    const headers = Object.fromEntries(Object.entries(req.headers).filter(([key]) => key.startsWith('cf-')));
    res.write(JSON.stringify(headers, null, 2));

    res.end();
});

server.listen(PORT);
