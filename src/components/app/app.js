import { Component } from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../serch-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John Smith', salary: 80000, increase: false, star: false, id: 1 },
                { name: 'Nansy Parker', salary: 110000, increase: true, star: false, id: 2 },
                { name: 'Kelly Taylor', salary: 150000, increase: false, star: false, id: 3 }
            ]
        }
        this.maxId = 4
    }

    deleteItem = (id) => {
        console.log(id)
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            console.log(index);
            //1
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];

            //2


            return {
                data: data.filter(item => item.id !== id)
            }

        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            star: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleIncrease = (id) => {
        console.log(`increase this ${id}`)
        //1
        // this.setState(({ data }) => {

        //     const index = data.findIndex(elem => elem.id === id);
        //     const oldObj = data[index];
        //     const newItem = { ...oldObj, increase: !oldObj.increase }; //new object
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

        //     return {
        //         data: newArr
        //     }


        // })



        //2

        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, increase: !item.increase }
                }
                return item;
            })
        }))
    }

    onToggleStar = (id) => {
        console.log(`star this ${id}`)
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, star: !item.star }
                }
                return item;
            })
        }))
    }

    render() {
        const employees = this.state.data.length;
        const increasedEmployees = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo employees={employees} increasedEmployees={increasedEmployees} />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleStar={this.onToggleStar} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        )
    }
}

export default App;