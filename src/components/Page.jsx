const { default: Link } = require("@/components/Link.jsx")

const Page = (props) => {
  const { children } = props

  return (
    <div>
      <header className="sticky top-0 border-b p-4">
        <div className="mx-auto flex justify-between md:max-w-3xl ">
          <h1 className="text-2xl font-medium">Welcome to my blog</h1>
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link href="/">List</Link>
              </li>
              <li>
                <Link href="/users/create">Add a user</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="mx-auto p-4 lg:max-w-3xl lg:px-0">{children}</main>
    </div>
  )
}

export default Page
