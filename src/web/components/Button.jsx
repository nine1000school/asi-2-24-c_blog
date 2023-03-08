import clsx from "clsx"

const variants = {
  primary: "text-white bg-blue-600 active:bg-blue-700",
  secondary: "text-base bg-white active:bg-neutral-100",
}

const Button = (props) => {
  const { className, variant = "primary", ...otherProps } = props

  return (
    <button
      className={clsx(
        "rounded-xl px-4 py-2 disabled:bg-slate-300 disabled:text-slate-700",
        variants[variant],
        className
      )}
      {...otherProps}
    />
  )
}

export default Button
