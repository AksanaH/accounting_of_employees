import "./app-filter.css"

const AppFilter = (props) => {
    const buttonData = [
        { name: 'all', label: 'All employees' },
        { name: 'rise', label: 'Employees for promotion' },
        { name: 'moreThen100000', label: 'Income more than 100 000$ per year' },
    ];

    const buttons = buttonData.map(({ name, label }) => {
        const activeButton = props.filter === name;
        const clazz = activeButton ? 'btn-light' : 'btn-outline-light'

        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;