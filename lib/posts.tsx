import fs, { promises } from "fs"
import path from "path"
import matter from "gray-matter"

export const getArticals = async () => {
  const articalDir = path.join(process.cwd(), "blogs")
  const fileNames = await promises.readdir(articalDir)
  return fileNames.map((fileName) => {
    const filePath = path.join(articalDir, fileName)
    const {
      data: { title, id },
    } = matter(fs.readFileSync(filePath, "utf-8"))
    return {
      title,
      id,
      name: fileName.replace(/\.md$/gi, ""),
    }
  })
}
