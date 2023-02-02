const { default: Page } = require("@/components/Page.jsx")

const NotFoundPage = () => (
  <Page>
    <h1 className="mb-4 text-4xl font-medium">Not found</h1>
    <p>Sorry, we can't find what you are looking for.</p>
  </Page>
)

export default NotFoundPage
