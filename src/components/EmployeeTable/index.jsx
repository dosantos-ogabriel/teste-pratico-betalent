import { useState } from "react";
import TableRow from "./TableRow";
import "./employee-table-style.css";

const columns = {
	image: "Foto",
	name: "Nome",
	job: "Cargo",
	admission_date: "Data de admissão",
	phone: "Telefone",
};

export default function EmployeeTable({ employees }) {
	const [selectedEmployee, setSelectedEmployee] = useState(null);

	const onClickRow = (id) => {
		const expanded = selectedEmployee === id ? null : id;
		setSelectedEmployee(expanded);
	};

	return (
		<table>
			<thead>
				<tr>
					{Object.values(columns).map((column) => (
						<th key={column}>{column.toUpperCase()}</th>
					))}
					<th></th>
				</tr>
			</thead>

			<tbody>
				{employees.map((employee) => (
					<TableRow
						key={employee.id}
						columns={columns}
						employee={employee}
						onClickRow={onClickRow}
						selected={selectedEmployee === employee.id}
					/>
				))}
			</tbody>
		</table>
	);
}
