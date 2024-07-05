import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { write } from "fs";
import fetch from "node-fetch";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // PS: USE NODE_FETCH
    const { Apikey, Appid, organization_id, path } = req.query;
    const imagePath = Array.isArray(path) ? path.join("/") : "";
    const url = `https://api.timbu.cloud/images/${imagePath}?organization_id=${organization_id}&&Appid=${Appid}&Apikey=${Apikey}`;

    const image = await fetch(url);
    // const ext = imagePath.split(".")[imagePath.split(".").length - 1];
    const type = image.headers.get("content-type") ?? `image/jpg`;
    res.setHeader("Content-Type", type as string);

    const imageBuffer = await image.buffer();
    res.status(image.status).send(imageBuffer);
  } catch (error) {
    return res.status(500).json({ msg: "An Error Occurred" });
  }
}
