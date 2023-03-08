import config from "@/api/config.js"
import UserModel from "@/api/db/models/UserModel.js"
import hashPassword from "@/api/utils/hashPassword.js"
import jsonwebtoken from "jsonwebtoken"

import mw from "@/api/mw.js"

const handler = mw({
  POST: [
    async (req, res) => {
      const { email, password } = req.body
      const passwordHash = hashPassword(password)
      const user = await UserModel.findOne({ email })

      if (!user || user.passwordHash !== passwordHash) {
        res.status(401).send({ error: "Invalid credentials" })

        return
      }

      const sessionToken = jsonwebtoken
        .sign(
          {
            payload: {
              userId: user._id,
            },
          },
          config.security.jwt.secret,
          { expiresIn: config.security.jwt.expiresIn }
        )
        .toString("hex")

      res.send({ result: sessionToken })
    },
  ],
})

export default handler
