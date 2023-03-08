import AppContext, { AppContextProvider } from "@/web/components/AppContext.jsx"
import Page from "@/web/components/Page.jsx"
import "@/web/styles/globals.css"
import { useContext } from "react"

const RouteChecker = (props) => {
  const { component: Component, ...otherProps } = props
  const {
    state: { session },
  } = useContext(AppContext)

  if (Component.isPrivate && !session) {
    return (
      <Page title="Forbidden">
        <p>You don't have access to this page.</p>
      </Page>
    )
  }

  return <Component {...otherProps} />
}

const App = ({ Component, pageProps }) => {
  return (
    <AppContextProvider>
      <RouteChecker component={Component} {...pageProps} />
    </AppContextProvider>
  )
}

export default App
