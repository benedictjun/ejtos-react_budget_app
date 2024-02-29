import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [showTotalExpenses, setShowTotalExpenses] = useState(false);

    const handleBudgetChange = (event) => {
        const inputValue = event.target.value;

        // Calculate total expenses
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        // Check if input value is lower than total expenses
        if (inputValue < totalExpenses) {
            window.alert('You cannot reduce the budget value lower than the spending.');
            return;
        }

        // Check if input value exceeds 20000
        if (inputValue > 20000) {
            window.alert('Budget cannot exceed £20000.');
            return;
        }

        setNewBudget(inputValue);
    };

    return (
        <div>
            <div className='alert alert-secondary'>
                <span>Budget: £{budget}</span>
                <input
                    type="number"
                    step="10"
                    value={newBudget}
                    onChange={handleBudgetChange}
                    max={20000} // Set the max attribute of the input field
                />
            </div>
            <button onClick={() => setShowTotalExpenses(!showTotalExpenses)}>
                {showTotalExpenses ? 'Hide Total Expenses' : 'Show Total Expenses'}
            </button>
            {showTotalExpenses && (
                <div className='alert alert-primary'>
                    <span>Spent so far: £{expenses.reduce((total, item) => total + item.cost, 0)}</span>
                </div>
            )}
        </div>
    );
};

export default Budget;
