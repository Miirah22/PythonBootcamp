const product = require('../controllers/product');

const routes=[
    {
        method: 'GET',
        url: '/product/allproducts',
        handler: product.getAllProducts
    },
    {
        method: 'GET',
        url: '/product/:id',
        handler: product.getProduct
    },
    {
        method: 'POST',
        url: '/product/add',
        handler: product.addProduct
    },
    {
        method: 'POST',
        url: '/product/update/:id',
        handler: product.updateProduct
    },
    {
        method: 'POST',
        url: '/product/delete',
        handler: product.deleteProduct
    },
    {
        method: 'POST',
        url: '/product/addition',
        handler: product.addition
    }

]

module.exports=routes;