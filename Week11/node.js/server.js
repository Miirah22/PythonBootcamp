const fastify=require('fastify');
const db=require('./database.js');
//const usersRoutes=require('./routes/users.js');
const productRoutes=require('./routes/product.js');


const server=fastify({ logger: true });

/*usersRoutes.forEach((route, index) => {
    server.route(route);
});*/

productRoutes.forEach((route, index) => {
    server.route(route);
});

server.get('/', async (req,res) => {
    return ({message: 'API works'})
});

port=3000;
server.listen(port, () => {
  server.log.info(`server listening on ${port}`);
});