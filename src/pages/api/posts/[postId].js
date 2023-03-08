import PostModel from "@/api/db/models/PostModel.js"
import auth from "@/api/middlewares/auth.js"
import mw from "@/api/mw.js"

const handler = mw({
  GET: [
    async (req, res) => {
      const { postId } = req.query

      try {
        const post = await PostModel.findOne({ _id: postId })

        if (!post) {
          res.status(404).send({ error: "Not found" })

          return
        }

        res.send({ result: post })
      } catch (err) {
        if (err.name === "CastError") {
          res.status(422).send({ error: "Invalid argument" })

          return
        }

        // eslint-disable-next-line no-console
        console.error(err)

        res.status(500).send({ error: "Oops. Something went wrong." })
      }
    },
  ],
  PATCH: [
    auth,
    async (req, res) => {
      const {
        user,
        query: { postId },
        body: { title, content },
      } = req

      try {
        const post = await PostModel.findOne({
          _id: postId,
          "user.id": user._id,
        })

        if (!post) {
          res.status(404).send({ error: "Not found" })

          return
        }

        post.title = title ?? post.title
        post.content = content ?? post.content
        const updatedPost = await post.save()

        res.send({ result: updatedPost })
      } catch (err) {
        if (err.name === "CastError") {
          res.status(422).send({ error: "Invalid argument" })

          return
        }

        // eslint-disable-next-line no-console
        console.error(err)

        res.status(500).send({ error: "Oops. Something went wrong." })
      }
    },
  ],
  DELETE: [
    auth,
    async (req, res) => {
      const {
        query: { postId },
        user,
      } = req

      try {
        const post = await PostModel.findOne({
          _id: postId,
          "user.id": user._id,
        })

        if (!post) {
          res.status(404).send({ error: "Not found" })

          return
        }

        await post.deleteOne()

        res.send({ result: post })
      } catch (err) {
        if (err.name === "CastError") {
          res.status(422).send({ error: "Invalid argument" })

          return
        }

        // eslint-disable-next-line no-console
        console.error(err)

        res.status(500).send({ error: "Oops. Something went wrong." })
      }
    },
  ],
})

export default handler
