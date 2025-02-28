import "./app.css";

import AppHeader from "./components/AppHeader";
import EmployeeTable from "./components/EmployeeTable";

import { useEffect, useRef, useState } from "react";
import { formatDate, formatPhone } from "./helpers";

async function fetchEmployees() {
	const response = await fetch("http://localhost:3000/employees");
	const data = await response.json();
	return data;
}

function App() {
	const [employees, setEmployees] = useState([]);
	const [search, setSearch] = useState("");
	const timer = useRef(null);

	useEffect(() => {
		fetchEmployees().then((response) => {
			const employees = response.map((employee) => ({
				...employee,
				phone: formatPhone(employee.phone),
				admission_date: formatDate(employee.admission_date),
			}));
			setEmployees(employees);
		});
	});

	const onSearch = (e) => {
		if (timer.current) {
			clearTimeout(timer.current);
		}
		timer.current = setTimeout(() => {
			setSearch(e.target.value);
		}, 300);
	};

	const filteredEmployees = employees.filter(
		(employee) =>
			employee.name.toLowerCase().includes(search.toLowerCase()) ||
			employee.job.toLowerCase().includes(search.toLowerCase()) ||
			employee.phone.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<>
			<AppHeader />
			<main className="container">
				<div className="search-bar">
					<h1>Funcionários</h1>
					<input type="text" placeholder="Pesquisar" onInput={onSearch} />
				</div>

				<EmployeeTable employees={filteredEmployees} />
			</main>
		</>
	);
}

export default App;
