import clsx from "clsx"
import { Formik, Form as FormikForm } from "formik"

const Form = (props) => {
  const { className, children, formProps, ...otherProps } = props

  return (
    <Formik {...otherProps}>
      <FormikForm
        noValidate
        className={clsx("flex flex-col gap-4", className)}
        {...formProps}
      >
        {children}
      </FormikForm>
    </Formik>
  )
}
export default Form
