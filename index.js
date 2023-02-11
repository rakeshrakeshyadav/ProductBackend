require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./Config/config");
const ProductModel = require("./Models/Product");
const productmaterialmapModel = require("./Models/ProductMaterialMap");
const GradeModel = require("./Models/GradeModel");
const mongoose = require("mongoose")

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/product", async (req, res) => {
  try {
    const data = await GradeModel.find();
    return res.send(data);
  } catch (error) {
    return res.send(error.message);
  }
});
app.get("/product", async (req, res) => {
  try {
    const data = await ProductModel.find();
    return res.send(data);
  } catch (error) {
    return res.send(error.message);
  }
});

app.get("/material/:id", async (req, res) => {
  let id = req.params.id;
  console.log(id);
  try {
    const data = await productmaterialmapModel.findOne({ url: id });
    if (data) {
      return res.status(200).send(data);
    }
    const gradedata = await GradeModel.findOne({ url: id });
    if (gradedata) {
      return res.status(200).send(gradedata);
    }
    return res.send("Product Not Found");
  } catch (error) {
    return res.send(error.message);
  }
});
app.get("/product/:id", async (req, res) => {
  let id = req.params.id;

  try {
    const gradedata = await GradeModel.findOne({ url: id });
    if (gradedata) {
      return res.status(200).send(gradedata);
    }
    const data = await productmaterialmapModel.findOne({ url: id });
    if (data) {
      return res.status(200).send(data);
    }
    return res.send("Not Found");
  } catch (error) {
    return res.send(error.message);
  }
});

// ------==================== post request ============================

app.post("/product", async (req, res) => {
  let cnt = await GradeModel.find({}, { _id: 1 });
  let url = req.body.url;
  try {
    const findUrl = await GradeModel.findOne({ url });
    const findUrlMaterial = await productmaterialmapModel.findOne({ url });

    if (findUrl || findUrlMaterial) {
      return res.send("Product Already Present");
    }
    let grade = new GradeModel({
      gradeId: cnt.length + 1,
      // name: req.body.name,
      description: req.body.description,
      // images: req.body.images,
      // h1: req.body.h1,
      title: req.body.title,
      // h2: req.body.h2,
      meta: req.body.meta,
      // html: req.body.html,
      // logo: req.body.logo,
      // createdOn: Date.now(),
      keywords: req.body.keywords,
      // materialId: req.body.materialId,
      // productId: req.body.productId,
      // subproductId: req.body.subproductId,
      // code: req.body.code,
      displayName: req.body.displayName,
      url: req.body.url,
    });

    grade.save();
    return res.send(grade);
  } catch (error) {
    return res.send(error.message);
  }
});
app.post("/material", async (req, res) => {
  let cnt = await GradeModel.find({}, { _id: 1 });
  let url = req.body.url;
  try {
    //  const data1 = await GradeModel.create(data);
    const findUrl = await GradeModel.findOne({ url });
    const findUrlMaterial = await productmaterialmapModel.findOne({ url });
    if (findUrl || findUrlMaterial) {
      return res.send("Product Already Present");
    }
    let grade = new GradeModel({
      gradeId: cnt.length + 1,
      name: req.body.name,
      description: req.body.description,
      // images: req.body.images,
      // h1: req.body.h1,
      title: req.body.title,
      // h2: req.body.h2,
      meta: req.body.meta,
      // html: req.body.html,
      // logo: req.body.logo,
      // createdOn: Date.now(),
      keywords: req.body.keywords,
      // materialId: req.body.materialId,
      // productId: req.body.productId,
      // subproductId: req.body.subproductId,
      // code: req.body.code,
      displayName: req.body.displayName,
      url: req.body.url,
    });

    grade.save();
    return res.send(grade);
  } catch (error) {
    return res.send(error.message);
  }
});

//------------------- patch request-----------------------

app.patch("/product/:id", async (req, res) => {
  let _id = req.params.id;
  let data = req.body;
  console.log(data)
  try {
    const findgrade = await GradeModel.findById({ _id });
    // console.log("inside grade",findgrade)
    if (findgrade) {
      console.log("inside grade#####################################")
      const product = await GradeModel.findByIdAndUpdate({ _id: mongoose.Types.ObjectId(_id) }, data, {
        new: true,
      });
      // console.log(product)
      return res.send(product);
    }
    const findproduct = await productmaterialmapModel.findById({ _id });
    if (findproduct) {
      const product = await productmaterialmapModel.findByIdAndUpdate(
        { _id },
        data,
        { new: true }
      );
      return res.send(product);
    }

    return res.send("Product Not found");
  } catch (error) {
    return res.send(error.message);
  }
});
app.patch("/material/:id", async (req, res) => {
  let _id = req.params.id;
  let data = req.body;

  try {
    const findproduct = await productmaterialmapModel.findById({ _id });
    if (findproduct) {
      const product = await productmaterialmapModel.findByIdAndUpdate(
        { _id },
        data,
        { new: true }
      );
      return res.send(product);
    }

    const findgrade = await GradeModel.findById({ _id });
    if (findgrade) {
      const product = await GradeModel.findByIdAndUpdate({ _id }, data, {
        new: true,
      });
      return res.send(product);
    }

    return res.send("Product Not found");
  } catch (error) {
    return res.send(error.message);
  }
});

app.listen(PORT, async () => {
  await connect();
  console.log(`localhost:${PORT}`);
});
