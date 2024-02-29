import { useId } from "react"
import { forwardRef } from "react"

const Input = forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <>
            {label && (
                <label
                    htmlFor={id}
                    className="inline-block mb-1 pl-1"
                >
                    {label}
                </label>

            )}
            <input
                type={type}
                className={`px-3 py-2 rounded-md outline-none w-full ${className}`}
                ref={ref}
                id={id}
                {...props} />
        </>
    )
})

export default Input
