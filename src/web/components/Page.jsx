import AppContext from "@/web/components/AppContext.jsx"
import Link from "@/web/components/Link.jsx"
import clsx from "clsx"
import { useContext } from "react"

const sizes = {
  xs: "lg:max-w-lg lg:px-0",
  sm: "lg:max-w-xl lg:px-0",
  md: "lg:max-w-3xl lg:px-0",
}

const Page = (props) => {
  const { title, children, size = "md" } = props
  const {
    state: { session },
    actions: { signOut },
  } = useContext(AppContext)

  return (
    <div>
      <header className="sticky top-0 border-b bg-white p-4">
        <div className="mx-auto flex items-center justify-between md:max-w-3xl">
          <h1 className="text-2xl font-medium">
            <Link href="/">Welcome to my blog</Link>
          </h1>
          <nav>
            <ul className="flex items-center gap-4">
              {session ? (
                <>
                  <li>
                    <button className="hover:underline" onClick={signOut}>
                      Sign out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/sign-in">Sign in</Link>
                  </li>
                  <li>
                    <Link href="/sign-up">Sign up</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <main className={clsx("mx-auto p-4", sizes[size])}>
        {title && <h1 className="mt-2 mb-6 text-2xl font-bold">{title}</h1>}
        {children}
      </main>
    </div>
  )
}

export default Page
