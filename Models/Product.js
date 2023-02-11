const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    url: {
        type: String,
        index: true,
        required: true,
        unique: true
    },
    showInMiddle: {
        type: Boolean,
        default: false,
        index: true
    },
    name: {
        type: String,
        default: '',
        index: true
    },
    code: {
        type: String,
        default: null,
        index: true,
        unique: true
    },
    title: {
        type: String,
        default: ''
    },
    h1: {
        type: String,
        default: null
    },
    meta: {
        type: String,
        default: null
    },
    h2: {
        type: String,
        default: null
    },
    html: {
        type: String,
        default: null
    },
    logo: {
        type: String,
        default: null
    },
    images: {
        type: Array,
        default: []
    },
    description: {
        type: String,
        default: ''
    },
    prod_desc: {
        type: String,
        default: ''
    },
    keywords: {
        type: String,
        default: ''
    },
    image_path: {
        type: String,
        default: null
    },
    status: {
        type: Number,
        default: 0
    },
    click_count: {
        type: Number,
        default: 0
    },
    view_count: {
        type: Number,
        default: 0
    },
    view_date: {
        type: Date,
        default: Date()
    },
    sequence: {
        type: Number,
        default: null
    },
    createdOn: {
        type: Date,
        default: Date.now()
    },
    addedOn: {
        type: Date,
        default: Date.now()
    },
    updatedOn: {
        type: Date,
        default: Date.now()
    },
    idOfProductCreator: {
        type: String,
        index: true
    },
   nameOfProductCreator: {
        type: String,
        default:"admin"
    },
    materials: {
        type: Array,
        default: []
    }
});

const ProductModel = mongoose.model("product",productSchema);
module.exports = ProductModel;