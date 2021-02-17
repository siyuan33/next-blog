import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import { getArticals } from "lib/posts"

const Posts: NextApiHandler = async (req, res) => {
  const fileInfo = await getArticals()
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.write(JSON.stringify(fileInfo))
  res.end()
}

export default Posts
