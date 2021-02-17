import React, { memo } from "react"
import Link from "next/link"
import png from "assets/images/1.png"

function Artical() {
  return (
    <>
      <h1>Artical</h1>
      <hr />
      <Link href="/">回到首页</Link>
      <br />
      <img src={png} alt="" />
      <style jsx>{`
        h1 {
          color: #aa0505;
          font-size: 20px;
        }
      `}</style>
    </>
  )
}
export default memo(Artical)
