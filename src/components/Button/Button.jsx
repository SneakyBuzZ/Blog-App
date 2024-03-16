
function Button({
    children,
    type = "button",
    backgroundColor = "bg-blue-400",
    color = "text-white",
    className = "",
    ...props
}) {
    return (
        <>
            <button
                className={`font-semibold md:mt-4 w-20 md:h-[2.5rem] md:w-32 rounded-md md:rounded-lg mx-1 sm:mx-2 text-xs md:text-[15px] h-[2rem] ${backgroundColor} ${color} ${className}`}
                type={type}
                {...props}>
                {children}
            </button >
        </>
    )
}

export default Button
