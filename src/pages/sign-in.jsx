import AppContext from "@/web/components/AppContext.jsx"
import Form from "@/web/components/Form.jsx"
import FormField from "@/web/components/FormField.jsx"
import Page from "@/web/components/Page.jsx"
import SubmitButton from "@/web/components/SubmitButton.jsx"
import { useRouter } from "next/router.js"
import { useContext } from "react"
import * as yup from "yup"

const initialValues = {
  email: "",
  password: "",
}

const validationSchema = yup.object().shape({
  email: yup.string().email().required().label("E-mail"),
  password: yup.string().min(8).required().label("Password"),
})

const SignInPage = () => {
  const router = useRouter()
  const {
    actions: { signIn },
  } = useContext(AppContext)
  const handleSubmit = async ({ email, password }) => {
    const [err] = await signIn(email, password)

    if (!err) {
      router.push("/")

      return
    }
  }

  return (
    <Page size="xs" title="Sign in">
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormField
          name="email"
          type="email"
          placeholder="Enter your e-mail"
          label="E-mail"
        />
        <FormField
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
        <SubmitButton />
      </Form>
    </Page>
  )
}

export default SignInPage
