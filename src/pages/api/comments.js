import config from "@/api/config.js"
import PostModel from "@/api/db/models/PostModel.js"
import auth from "@/api/middlewares/auth.js"

import mw from "@/api/mw.js"

const handler = mw({
  POST: [
    auth,
    async (req, res) => {
      const {
        user,
        body: { content },
        query: { postId },
      } = req
      const post = await PostModel.findOne({ _id: postId })

      if (!post) {
        res.status(404).send({ error: "Not found" })

        return
      }

      const comment = {
        user: {
          id: user._id,
          name: user.name,
        },
        content,
      }
      const result = await PostModel.updateOne(
        {
          _id: post.id,
        },
        {
          $push: {
            comments: comment,
          },
        }
      )

      res.send({ result })
    },
  ],
  GET: [
    async (req, res) => {
      const { postId, limit = config.pagination.limit, page = 1 } = req.query
      const post = await PostModel.findOne({ _id: postId })

      if (!post) {
        res.status(404).send({ error: "Not found" })

        return
      }

      const comments =
        post.comments?.slice((page - 1) * limit, page * limit) || []

      res.send({ result: comments })
    },
  ],
})

export default handler
