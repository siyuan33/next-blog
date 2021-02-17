import { usePosts } from "hooks/usePosts"
import { NextPage } from "next"
import React, { memo } from "react"

const Index: NextPage = (props) => {
  const { posts } = usePosts()
  return (
    <>
      {posts.map(({ title, id }) => {
        return <div key={title + "-" + id}>{title}</div>
      })}
    </>
  )
}
export default memo(Index)
