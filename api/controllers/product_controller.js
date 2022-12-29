const StatusCodes = require("../utils/status_codes");

const addProduct = (req, res) => {
  console.log(req.body);
  const product = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.imgeUrl,
  };
  res.status(StatusCodes.created).json(product);
};

const getAllProducts = (req, res) => {
  res.status(StatusCodes.ok).json({ status: "Success" });
};

module.exports = {
  addProduct,
  getAllProducts,
};
