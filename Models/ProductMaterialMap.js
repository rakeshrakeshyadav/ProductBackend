const mongoose = require('mongoose');

const product_material_map_schema = new mongoose.Schema({
    id: {
        type: String,
        default: null
    },
    status: {
        type: String,
        default: 0
    },
    materialId: {
        type: String,
        required: true,
        index: true
    },
    productId: {
        type: String,
        required: true,
        index: true
    },
    url: {
        type: String,
        default: '',
        index: true,
        unique: true
    },
    displayName: {
        type: String,
        default: ''
    },
    h1: {
        type: String,
        default: null
    },
    h2: {
        type: String,
        default: null
    },
    title: {
        type: String,
        default: null
    },
    meta: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    material_code: {
        type: String,
        default: null
    },
    keywords: {
        type: String,
        default: null
    },
    logo: {
        type: String,
        default: null
    },
    subproductId: {
        type: String,
        default: "0"
    },
    image_path: {
        type: String,
        default: null
    },
    faqs: {
        type: Array,
        default: []
    },
});

const productmaterialmapModel = mongoose.model("productmaterialmap",product_material_map_schema);
module.exports = productmaterialmapModel;