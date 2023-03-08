import Page from "@/web/components/Page.jsx"

const PrivatePage = () => {
  return (
    <Page title="I am private.">
      <p>Don't look at me.</p>
    </Page>
  )
}

PrivatePage.isPrivate = true

export default PrivatePage
