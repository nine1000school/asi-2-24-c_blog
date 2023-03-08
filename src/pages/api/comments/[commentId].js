import PostModel from "@/api/db/models/PostModel.js"
import auth from "@/api/middlewares/auth.js"
import mw from "@/api/mw.js"

const handler = mw({
  PATCH: [
    auth,
    async (req, res) => {
      const {
        params: { commentId },
        query: { postId },
        body: { content },
        user,
      } = req
      const post = await PostModel.findOne({
        _id: postId,
        "user.id": user._id,
      })
      const commentIndex = post?.comments?.findIndex(
        ({ _id }) => _id?.toHexString() === commentId
      )
      const comment = post?.comments?.[commentIndex]

      if (!post || !comment) {
        res.status(404).send({ error: "Not found" })

        return
      }

      await PostModel.updateOne(
        { _id: post._id },
        { [`comments.${commentIndex}.content`]: content }
      )

      comment.content = content

      res.send({ result: comment })
    },
  ],
  DELETE: [
    auth,
    async (req, res) => {
      const {
        params: { commentId },
        query: { postId },
        user,
      } = req
      const post = await PostModel.findOne({
        _id: postId,
        "user.id": user._id,
      })
      const comment = post?.comments?.find(
        ({ _id }) => _id?.toHexString() === commentId
      )

      if (!post || !comment) {
        res.status(404).send({ error: "Not found" })

        return
      }

      await PostModel.updateOne(
        { _id: post._id },
        {
          $pull: {
            comments: { _id: comment._id },
          },
        }
      )

      res.send({ result: comment })
    },
  ],
})

export default handler
