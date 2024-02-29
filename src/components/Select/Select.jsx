import { forwardRef, useId } from "react"

function Select({
    className = "",
    option = [],
    ...props
}, ref) {
    const id = useId()
    return (
        <>
            <div className="w-full">
                <select
                    id={id}
                    className={`px-3 py-2 rounded-md outline-none w-full ${className}`}
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
