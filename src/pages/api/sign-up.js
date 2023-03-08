import UserModel from "@/api/db/models/UserModel.js"
import mw from "@/api/mw.js"
import hashPassword from "@/api/utils/hashPassword.js"

const handler = mw({
  POST: [
    async (req, res) => {
      const { email, password, name } = req.body
      const passwordHash = hashPassword(password)

      await UserModel.create({ email, passwordHash, name })

      res.send({ result: true })
    },
  ],
})

export default handler
