import FormField from "@/components/FormField.jsx"
import Page from "@/components/Page.jsx"
import { AppContext } from "@/pages/_app.jsx"
import { Form, Formik } from "formik"
import { useContext } from "react"
import * as yup from "yup"

const initialValues = {
  username: "",
  email: "",
  password: "",
  userType: "seller",
}
const validationSchema = yup.object().shape({
  username: yup.string().min(3).required().label("Username"),
  email: yup.string().email().required().label("E-mail"),
  password: yup.string().min(8).required().label("Password"),
  userType: yup.string().oneOf(["seller", "buyer"]).required().label("Type"),
})

const CreateUserPage = () => {
  const { createUser } = useContext(AppContext)
  const handleSubmit = (
    { username, email, password, userType },
    { resetForm, setErrors }
  ) => {
    const [errors] = createUser({ username, email, password, userType })

    if (errors) {
      setErrors(errors)

      return
    }

    resetForm()
  }

  return (
    <Page>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form className="flex flex-col gap-4 p-4" noValidate>
          <FormField name="username" placeholder="Username" />
          <FormField name="email" type="email" placeholder="E-mail" />
          <FormField name="password" type="password" placeholder="Password" />
          <FormField name="userType" as="select">
            <option value="buyer">I am a buyer</option>
            <option value="seller">I am a seller</option>
          </FormField>
          <button
            type="submit"
            className="bg-blue-600 p-3 font-medium text-white active:bg-blue-700"
          >
            ADD
          </button>
        </Form>
      </Formik>
    </Page>
  )
}

export default CreateUserPage
