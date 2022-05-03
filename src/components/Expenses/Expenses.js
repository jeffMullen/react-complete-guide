import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter/ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const saveDateFilterHandler = (selectedYear) => {
    console.log("Expenses.js");
    console.log(selectedYear);

    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={saveDateFilterHandler}
        />

        {props.expenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
