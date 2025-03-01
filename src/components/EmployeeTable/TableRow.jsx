import { Fragment } from "react";

export default function TableRow({ employee, selected, onClickRow, columns }) {
	return (
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
						className={`${selected && "expanded"}`}
					>
						<img src="/src/assets/chevron-down.svg" alt="Editar" />
					</button>
				</td>
			</tr>

			<tr className={`employee-data ${selected && "expanded"}`}>
				<td colSpan={3}>
					{Object.entries(columns)
						.slice(2)
						.map(([key, value]) => (
							<div className="employee-data__row" key={key}>
								<strong>{value}</strong>
								<span>{employee[key]}</span>
							</div>
						))}
				</td>
			</tr>
		</Fragment>
	);
}
