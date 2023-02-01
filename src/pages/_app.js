import Link from "@/components/Link.jsx"
import "@/styles/globals.css"

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <header className="sticky top-0 flex justify-between border-b p-4">
        <h1 className="text-2xl font-medium">Welcome to my blog</h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products/123">Product 123</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
    </div>
  )
}

export default App
