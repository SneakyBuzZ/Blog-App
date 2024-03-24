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
            <div className="my-3">
                {label && (
                    <label
                        htmlFor={id}
                        className="inline-block mb-1 pl-1  dark:md:text-md dark:text-white text-stone-400"
                    >
                        {label}
                    </label>

                )}
                <input
                    type={type}
                    className={`px-3 py-2 text-stone-500 dark:text-black rounded-md outline-none w-full text-[10px] md:text-lg ${className} bg-white border dark:border-none dark:bg-[#ffff]`}
                    ref={ref}
                    id={id}
                    {...props} />
            </div>
        </>
    )
})

export default Input
