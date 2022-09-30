const Card = ({ children }) => {
    return (
        <div className="flex flex-col rounded-2xl shadow-2xl p-6 m-3 space-y-10 bg-white md:space-y-0 md:space-x-10 md:m-0 m-p-16 md:flex-row ">
             { children }
        </div>
    )
}

export default Card