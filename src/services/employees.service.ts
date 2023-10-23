import axios from "axios";
import { IEmployee } from "../models/employee";

export class EmployeesService {
    private apiUrl = 'https://jsonplaceholder.typicode.com/users'
    private employeeList: IEmployee[] = [];

    constructor() {
        this.init();
    }

    private init() {
        axios.get(this.apiUrl).then(({ data }) => {
            this.employeeList = data.map(({ id, name, username, email }: any) => {
                const emp: IEmployee = { id, name, username, email, isSelected: false };
                return emp;
            });

            console.log(this.employeeList);
        });
    }

    static getAllEmployee() {
        // return this.employeeList;
    }
}