import clsx from "clsx"
import { Field } from "formik"

const FormField = (props) => {
  const { as: Component = "input", className, name, ...otherProps } = props

  return (
    <Field name={name}>
      {({ field, meta: { error, touched } }) => (
        <label className="flex flex-col gap-2">
          <Component
            {...field}
            {...otherProps}
            className={clsx(
              "border-2 px-4 py-2 focus:outline-0",
              {
                "focus:border-blue-600": !error || !touched,
                "border-red-600": error && touched,
              },
              className
            )}
          />
          {error && touched && (
            <span className="text-sm font-medium text-red-500">{error}</span>
          )}
        </label>
      )}
    </Field>
  )
}

export default FormField
