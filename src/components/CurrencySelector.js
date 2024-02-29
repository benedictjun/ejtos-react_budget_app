import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { currency, setCurrency } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <div className="dropdown">
            <label htmlFor="currencySelect">Currency:</label>
            <select
                id="currencySelect"
                value={currency}
                onChange={handleCurrencyChange}
                className="custom-select"
            >
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};

export default CurrencySelector;
