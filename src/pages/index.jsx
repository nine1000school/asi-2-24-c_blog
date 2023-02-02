import Page from "@/components/Page.jsx"
import UserList from "@/components/UserList.jsx"

const IndexPage = (props) => {
  const { users, deleteUser } = props

  return (
    <Page>
      <UserList users={users} deleteUser={deleteUser} />
    </Page>
  )
}

export default IndexPage
