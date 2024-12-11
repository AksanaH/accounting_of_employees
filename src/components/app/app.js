import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../serch-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {

    const data = [
        { name: 'John Smith', salary: 80000, increase: false, id: 1 },
        { name: 'Nansy Parker', salary: 110000, increase: true, id: 2 },
        { name: 'Kelly Taylor', salary: 150000, increase: false, id: 3 }
    ];

    return (
        <div className="app">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesList data={data} />
            <EmployeesAddForm />
        </div>
    )
}

export default App;