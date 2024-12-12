import './app-info.css';

const AppInfo = ({ employees, increasedEmployees }) => {
    return (
        <div className="app-info">
            <h1>Accounting of employees in company N</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>Benefits package will be received: {increasedEmployees}</h2>
        </div>
    )
}

export default AppInfo;