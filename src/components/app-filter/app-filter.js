import "./app-filter.css"

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button
                className="btn btn-light"
                type="button">
                All employees
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                Employees for promotion
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                Income more than 100 000$ per year
            </button>
        </div>
    )
}

export default AppFilter;