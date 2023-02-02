import { TrashIcon } from "@heroicons/react/20/solid"
import clsx from "clsx"

const Th = (props) => (
  <th
    className="border-r border-slate-400 bg-slate-200 p-2 first:border-l"
    {...props}
  />
)
const Td = (props) => {
  const { className, noPadding = false, ...otherProps } = props

  return (
    <td
      className={clsx(
        "border-r border-slate-400 last:border-r-0",
        { "p-2": !noPadding },
        className
      )}
      {...otherProps}
    />
  )
}

const UserList = (props) => {
  const { users, className, deleteUser, ...otherProps } = props
  const handleClickDelete = ({
    currentTarget: {
      dataset: { email },
    },
  }) => {
    deleteUser(email)
  }

  return (
    <table
      className={clsx("w-full border border-slate-400", className)}
      {...otherProps}
    >
      <thead>
        <tr>
          <Th>Username</Th>
          <Th>E-mail</Th>
          <Th>Password</Th>
          <Th>Type</Th>
          <Th />
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr className="even:bg-slate-100" key={user.email}>
            <Td>{user.username}</Td>
            <Td>{user.email}</Td>
            <Td>{user.password}</Td>
            <Td>{user.userType}</Td>
            <Td noPadding className="flex">
              <button
                className="m-[-1px] flex h-10 grow items-center justify-center"
                onClick={handleClickDelete}
                data-email={user.email}
              >
                <TrashIcon className="h-6 w-6 text-red-600" />
              </button>
            </Td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserList
