const BudgetExpenses = ({ totalExpenses = 0, expensesPercentage = 0 }) => {
	return (
		<div className="budget_expenses clearfix viewer">
			<div className="budget_expenses-text">Total Expenses:</div>
			<div className="right">
				<div className="budget_expenses-value"> {totalExpenses}</div>
				<div className="budget_expenses-percentage">  {expensesPercentage}%</div>
			</div>
		</div>
	);
};

export default BudgetExpenses;