//server.js
import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import route from 'koa-route';

import graphql from './schema';
import putXlsx from './putXlsx';

let app = new koa();
let PORT = 3000;

app.use(bodyParser());
//Parse post content as text

app.use(route.all('/graphql', graphql));
app.use(route.all('/xlsx', putXlsx));

let server = app.listen(PORT, function() {
  let host = server.address().address;
  let port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port);
});