import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "GET") {
  }
  if (method === "POST") {
    try {
      console.log('firsthi')
      const product = await Product.create(req.body);
      console.log("hihi")
      console.log(product)
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
