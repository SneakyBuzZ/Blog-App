import { forwardRef, useId } from "react"

function Select({
    className = "",
    option = [],
    ...props
}, ref) {
    const id = useId()
    return (
        <>
            <div className="w-full my-3">
                <select
                    id={id}
                    className={`px-3 py-2 rounded-md outline-none w-full text-black bg-white border dark:border-none dark:bg-[#fff] ${className}`}
                    ref={ref}
                    {...props}>
                    {
                        option?.map((eachOption) => (
                            <option key={eachOption} value={eachOption}>
                                {eachOption}
                            </option>
                        ))
                    }
                </select>
            </div>
        </>
    )
}

export default forwardRef(Select)
