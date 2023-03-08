import UserDataSchema from "@/api/db/schemas/UserDataSchema.js"
import { Schema } from "mongoose"

const CommentSchema = new Schema(
  {
    user: {
      type: UserDataSchema,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export default CommentSchema
