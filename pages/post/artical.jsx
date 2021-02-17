import React, { memo } from "react"
import Link from "next/link"

function Artical(props) {
  return (
    <>
      <h1>Artical</h1>
      <hr />
      <Link href="/">回到首页</Link>
      <style jsx>{`
        h1 {
          color: #aa0505;
        }
      `}</style>
    </>
  )
}
export default memo(Artical)
