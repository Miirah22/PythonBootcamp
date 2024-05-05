const Product= require('../models/product');

exports.addProduct= async (req,res) => {
    if (req.body){
        new_product={
            title: req.product.title,
            date: req.expiration.date,
            content: req.usage.content,
            img: req.product.img
        }
        newProduct= new Product(new_product);
        await newProduct.save();
        return ({message: 'Product added successfully'});

    }else{
        return ({message: 'Invalid request'});  
    }
}

exports.getAllProducts= async (req,res) => {
    const product= await product.find();
    return ({product: product});
};

exports.getProduct= async (req,res) => {
    id=req.params.id;
    const product= await product.find({_id: id});
    return ({product: product});
};

exports.deleteProduct= async (req,res) => {
    id=req.body.id;
    await Product.findByIdAndDelete({_id: id});
    return ({message: 'Product deleted successfully'});
}


exports.updateProduct= async (req,res) => {
    id=req.params.id;
    await Product.findByIdAndUpdate({_id: id}, req.body);
    return ({message: 'Product updated successfully'});
    
}

exports.addition= async (req,res) => {
    num1=req.body.num1;
    num2=req.body.num2;
    result= num1+num2;
    return ({result: result});
}