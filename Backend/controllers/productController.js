import cloudinary from '../config/cloudinary.js';
import productModel from '../models/productModel.js';


//Funtion for ADDING a product
const addProduct = async (req, res) => {
    try {
        
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((image) => image !== undefined);

        let imagesUrl = await Promise.all(
            images.map(async (item)=>{
                let result = await cloudinary.uploader.upload(item.path, {resource_type: "image"});
                return result.secure_url;
            })
        );

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller === "true" ? true : false,
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now(),

        };

        console.log(productData);

        const product = new productModel(productData);
        await product.save();
        

        res.json({success: true, message: "Product added successfully"});
        

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//Funtion for LISTING a product
const listProduct = async (req, res) => {

}

//Funtion for REMOVING a product
const removeProduct = async (req, res) => {

}

//Funtion for SINGLE PRODUCT INFO
const singleProduct = async (req, res) => {

}

export { addProduct, listProduct, removeProduct, singleProduct };