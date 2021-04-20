// import {useState} from 'react';
import React, { useContext } from 'react';
import Budget from '../Budget_Balance/Balance';
import BudgetTotal from '../Budget_Total/Budget_Total';
import BudgetForm from '../Budget_Form/BudgetForm';
import { GlobalContext } from '../../contex/GlobalState';


//Function to calculate the total of either expenses or income
export const GetTotals = (type) => {
	const { transactions, totals } = useContext(GlobalContext);
	totals[type] = transactions[type].reduce((init, data) => init + data.value, 0)
	return totals[type];
};


const Header = () => {

	const { GetBudget } = useContext(GlobalContext)

	return (
		<header className="header">
			<div className="container">
				<div className="budget_title">
					<h1> Available Funds for , <span className="budget_title_month">%Month%</span></h1>
				</div>
				{/* total budget balance */}
				<Budget balance={GetBudget()} />
				{/* Total Income and expenses field container */}
				<BudgetTotal />
				<p className="err_msg"></p>
				<BudgetForm />
			</div>
		</header >
	);
};

export default Header;
