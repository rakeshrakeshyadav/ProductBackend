const mongoose = require('mongoose');


const gradesSchema = new mongoose.Schema({
    gradeId: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    h1: {
        type: String,
        default: null
    },
    title: {
        type: String,
        default: ''
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
    name: {
        type: String,
        default: '',
        index: true
    },
    description: {
        type: String,
        default: ''
    },
    faqs: {
        type: Array,
        default: []
    },
    showInMiddle: {
        type: Boolean,
        default: false,
        index: true
    },
    code: {
        type: String,
        default: null,
        index: true
    },
    productId: {
        type: String,
        default: null
    },

    shouldShowInTopHomePage: {
        type: Boolean,
        default: true,
        index: true
    },
    subproductId: {
        type: String,
        default: null
    },
    displayName: {
        type: String,
        default: null
    },
    url: {
        type: String,
        default: null,
        index: true,
        unique: true
    },
    keywords: {
        type: String,
        default: ''
    },
    equivalentId: {
        type: String,
        default: null
    },
    active: {
        type: Boolean,
        default: true
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
    images: {
        type: Array,
        default: []
    },
    createdOn: {
        type: Date,
        default: Date.now()
    },
    materialId: {
        type: String,
        index: true
    }
});

const GradeModel = mongoose.model("grade",gradesSchema);
module.exports = GradeModel;