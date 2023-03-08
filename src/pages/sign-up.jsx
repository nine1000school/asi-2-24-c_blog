import Form from "@/web/components/Form.jsx"
import FormField from "@/web/components/FormField.jsx"
import Page from "@/web/components/Page.jsx"
import SubmitButton from "@/web/components/SubmitButton.jsx"
import api from "@/web/services/api.js"
import { useRouter } from "next/router.js"
import * as yup from "yup"

const initialValues = {
  name: "",
  email: "",
  password: "",
}

const validationSchema = yup.object().shape({
  name: yup.string().min(1).required().label("Name"),
  email: yup.string().email().required().label("E-mail"),
  password: yup.string().min(8).required().label("Password"),
})

const SignUpPage = () => {
  const router = useRouter()
  const handleSubmit = async (values) => {
    try {
      await api.post("/sign-up", values)

      router.push("/sign-in")
    } catch (err) {
      // next year ;)
    }
  }

  return (
    <Page size="xs" title="Sign up">
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormField name="name" placeholder="Enter your name" label="Name" />
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

export default SignUpPage
