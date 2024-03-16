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
            <div className="">
                {label && (
                    <label
                        htmlFor={id}
                        className="inline-block mb-1 pl-1 text-sm md:text-lg text-gray-600"
                    >
                        {label}
                    </label>

                )}
                <input
                    type={type}
                    className={`px-3 py-2 rounded-md outline-none w-full text-sm md:text-lg ${className}`}
                    ref={ref}
                    id={id}
                    {...props} />
            </div>
        </>
    )
})

export default Input
