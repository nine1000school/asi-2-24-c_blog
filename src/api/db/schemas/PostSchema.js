import CommentSchema from "@/api/db/schemas/CommentSchema.js"
import UserDataSchema from "@/api/db/schemas/UserDataSchema.js"
import { Schema } from "mongoose"

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    publishedAt: Date,
    user: {
      type: UserDataSchema,
      required: true,
    },
    comments: [CommentSchema],
  },
  { timestamps: true }
)

export default PostSchema
