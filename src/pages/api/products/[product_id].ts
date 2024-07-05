import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { Apikey, Appid, organization_id, product_id } = req.query;
    const url = `https://api.timbu.cloud/products/${product_id}?organization_id=${organization_id}&Appid=${Appid}&Apikey=${Apikey}`;

    const products = await axios.get(url);
    return res.status(products.status).json(products.data);
  } catch (error) {
    return res.status(500).json({ msg: "An Error Occurred" });
  }
}
