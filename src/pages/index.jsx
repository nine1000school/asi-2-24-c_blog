import Page from "@/components/Page.jsx"
import UserList from "@/components/UserList.jsx"
import { AppContext } from "@/pages/_app.jsx"
import { useContext } from "react"

const IndexPage = () => {
  const { users, deleteUser } = useContext(AppContext)

  return (
    <Page>
      <UserList users={users} deleteUser={deleteUser} />
    </Page>
  )
}

export default IndexPage
