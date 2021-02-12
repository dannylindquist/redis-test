import polka from 'polka';
import { client } from './redis.mjs';

let app = polka();

app.get('/', (req, res) => {
  client.incr('hitcount', (err, n) => {
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({ hello: 'world ' + n }));
  });
});

app.listen(4321);
