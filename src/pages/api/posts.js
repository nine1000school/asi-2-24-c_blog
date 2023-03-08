import config from "@/api/config.js"
import PostModel from "@/api/db/models/PostModel.js"
import auth from "@/api/middlewares/auth.js"
import mw from "@/api/mw.js"

const handler = mw({
  POST: [
    auth,
    async (req, res) => {
      const { title, content } = req.body
      const user = req.user
      const post = await PostModel.create({
        title,
        content,
        user: {
          id: user._id,
          name: user.name,
        },
      })

      res.send({ result: post })
    },
  ],
  GET: [
    async (req, res) => {
      const { author, limit = config.pagination.limit, page = 1 } = req.query

      const posts = await PostModel.find(author ? { "user.id": author } : {})
        .limit(limit)
        .skip((page - 1) * limit)

      res.send({ result: posts })
    },
  ],
})

export default handler
