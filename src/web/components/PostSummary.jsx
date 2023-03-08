import { formatDateTime } from "@/web/utils/formatters.js"
import { Fragment } from "react"

const PostSummary = (props) => {
  const {
    post: { title, content, createdAt, user },
  } = props

  return (
    <article className="flex flex-col gap-4">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-medium">{title}</h1>
        <p className="text-sm italic text-slate-600">
          Posted on {formatDateTime(new Date(createdAt))} by {user.name}
        </p>
      </header>
      <div className="flex flex-col gap-4">
        {content.split("\n\n").flatMap((paragraph) => (
          <p key={paragraph}>
            {paragraph.split("\n").map((line) => (
              <Fragment key={line}>
                {line}
                <br />
              </Fragment>
            ))}
          </p>
        ))}
      </div>
    </article>
  )
}

export default PostSummary
