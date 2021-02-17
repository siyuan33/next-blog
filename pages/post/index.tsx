import { NextPage } from "next"
import React, { memo, useEffect, useState } from "react"
import fly from "flyio"

type Post = {
  id: number
  title: string
  name: string
}

const Index: NextPage = (props) => {
  const [posts, setPosts] = useState<Array<Post>>([])
  const mounted = async () => {
    const { data } = await fly.get("/api/v1/posts")
    setPosts(data)
  }
  useEffect(() => {
    mounted()
  }, [])
  return (
    <>
      {posts.map(({ title, id }) => {
        return <div key={title + "-" + id}>{title}</div>
      })}
    </>
  )
}
export default memo(Index)
