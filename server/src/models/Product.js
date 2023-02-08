const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    productName: String ,
    productPrice: Number ,
    productSpecialPrice: Number ,
    productDescription: String ,
    productBrand: String ,
    productImage: String ,
    productRating: Object ,
    productStatus: Number,
    productCategory: String,
    produtSubCategory: String,
    productVariants: Object
}, {
    timestamps: true
});

/*
{
    "_id": {
        "$oid": "63dda83c7a80fb477a19e218"
    },
    "productName": "Crema de Ají Tari 400gr",
    "productPrice": 13.9,
    "productSpecialPrice": 13.9,
    "productDescription": "Crema de Ají Tarí con ese toquecito picante e infaltable en nuestra comida diaria.",
    "productBrand": "Alacena",
    "productCurrency": "PEN",
    "productCurrencySymbol": "S/.",
    "productImage": "https://2xbftadhnj7fo.blob.core.windows.net/images/2022-12-02/alicorp/crema-de-aji-tari-400gr-12dpk-6889_78d92fb6-f35e-4445-83fd-4f5b347adf7420221202T231351590.jpg",
    "productRating": 0,
    "productStatus": 1,
    "productCategory": "Abarrotes",
    "productSubCategory": "Salsas",
    "productVariants": [{
        "productSku": "3300018",
        "variantName": "Crema de Ají Tari 400gr",
        "productStock": 203,
        "productPrice": 13.9,
        "productSpecialPrice": 13.9,
        "productImage": "https://2xbftadhnj7fo.blob.core.windows.net/images/2022-12-02/alicorp/crema-de-aji-tari-400gr-12dpk-6889_78d92fb6-f35e-4445-83fd-4f5b347adf7420221202T231351590.jpg",
        "productCurrencySymbol": "S/.",
        "productHeight": 24.6,
        "productLength": 6.3,
        "productWidth": 12.1,
        "productWeight": 0.4
    }]
}

*/


module.exports = model('Product', productSchema);