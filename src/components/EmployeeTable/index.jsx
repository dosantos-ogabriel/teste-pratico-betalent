import { Fragment, useState } from "react";
import "./employee-table-style.css";

const columns = ["Foto", "Nome", "Cargo", "Data de admissão", "Telefone"];
const columnKeys = {
	Foto: "image",
	Nome: "name",
	Cargo: "job",
	"Data de admissão": "admission_date",
	Telefone: "phone",
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
					{columns.map((column) => (
						<th key={column}>{column.toUpperCase()}</th>
					))}
					<th></th>
				</tr>
			</thead>
			<tbody>
				{employees.map((employee) => (
					<Fragment key={employee.id}>
						<tr>
							<td>
								<img src={employee.image} alt={employee.name} />
							</td>
							<td>{employee.name}</td>
							<td>{employee.job}</td>
							<td>{employee.admission_date}</td>
							<td>{employee.phone}</td>
							<td>
								<button
									onClick={() => onClickRow(employee.id)}
									className={`${
										selectedEmployee === employee.id ? "expanded" : ""
									}`}
								>
									<img src="/src/assets/chevron-down.svg" alt="Editar" />
								</button>
							</td>
						</tr>
						<tr
							className={`employee-data ${
								selectedEmployee === employee.id ? "expanded" : ""
							}`}
						>
							<td colSpan={3}>
								{columns
									.filter((col) => !["Foto", "Nome"].includes(col))
									.map((col) => (
										<div className="data-row" key={col}>
											<strong>{col}</strong>
											<span>{employee[columnKeys[col]]}</span>
										</div>
									))}
							</td>
						</tr>
					</Fragment>
				))}
			</tbody>
		</table>
	);
}
