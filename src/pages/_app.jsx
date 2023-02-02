import "@/styles/globals.css"
import { useEffect, useState } from "react"

const App = ({ Component, pageProps }) => {
  const [users, setUsers] = useState([])
  const save = (users) => {
    const data = JSON.stringify(users)

    localStorage.setItem("users", data)
  }
  const createUser = (user) => {
    if (users.find(({ email }) => email === user.email)) {
      return [{ email: "E-mail already used." }, null]
    }

    const newUserList = [...users, user]

    setUsers(newUserList)
    save(newUserList)

    return [null, user]
  }
  const deleteUser = (email) => {
    const newUserList = [...users.filter((user) => user.email !== email)]

    setUsers(newUserList)
    save(newUserList)
  }

  useEffect(() => {
    const data = localStorage.getItem("users")

    if (!data) {
      return
    }

    const users = JSON.parse(data)

    setUsers(users)
  }, [])

  return (
    <Component
      {...pageProps}
      users={users}
      createUser={createUser}
      deleteUser={deleteUser}
    />
  )
}

export default App
