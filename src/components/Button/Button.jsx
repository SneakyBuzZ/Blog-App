
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
                className={`font-semibold w-12 h-6 md:w-20 md:h-10 rounded-sm sm:rounded-md mx-1 sm:mx-2 text-xs  ${backgroundColor} ${color} ${className}`}
                type={type}
                {...props}>
                {children}
            </button >
        </>
    )
}

export default Button
