import {createServer} from 'node:http';
import {env} from 'node:process';

const PORT = env.PORT;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.write(JSON.stringify(req.headers, null, 2));

    res.end();
});

server.listen(PORT);
