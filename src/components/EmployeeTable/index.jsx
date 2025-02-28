import "./employee-table-style.css";

export default function EmployeeTable({ employees }) {
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>FOTO</th>
						<th>NOME</th>
						<th>CARGO</th>
						<th>DATA DE ADMISSÃO</th>
						<th>TELEFONE</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{employees.map((employee) => (
						<tr key={employee.id}>
							<td>
								<img src={employee.image} alt={employee.name} />
							</td>
							<td>{employee.name}</td>
							<td>{employee.job}</td>
							<td>{employee.admission_date}</td>
							<td>{employee.phone}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
