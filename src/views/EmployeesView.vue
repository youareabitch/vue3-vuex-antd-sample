<template>
    <a-row>
        <a-col>
            <h1>Employees</h1>
        </a-col>
    </a-row>
</template>

<script setup lang="ts">
import { IEmployee } from "../models/employee";
import { EmployeesService } from "../services/employees.service";

let employees: IEmployee[] = [];
const employeeService = new EmployeesService();

</script>

<style scoped></style>