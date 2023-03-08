import Page from "@/web/components/Page.jsx"
import PostSummary from "@/web/components/PostSummary.jsx"
import api from "@/web/services/api.js"
import { useEffect, useState } from "react"

const IndexPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    ;(async () => {
      const {
        data: { result },
      } = await api.get("/posts")

      setPosts(result)
    })()
  }, [])

  return (
    <Page>
      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <PostSummary post={post} key={post._id} />
        ))}
      </div>
    </Page>
  )
}

export default IndexPage
