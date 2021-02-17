import React, { useEffect, useState } from "react"
import fly from "flyio"

type Post = {
  id: number
  title: string
  name: string
}

export const usePosts = (...args: Array<any>) => {
  const [posts, setPosts] = useState<Array<Post>>([])
  const mounted = async () => {
    const { data } = await fly.get("/api/v1/posts")
    setPosts(data)
  }
  useEffect(() => {
    mounted()
  }, [])
  return { posts, setPosts }
}
