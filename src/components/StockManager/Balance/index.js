import React, { useState } from "react";
import "./Balance.css";

const Balance = prop => {
  const [withdrawInput, setWithdrawInput] = useState("");
  const [depositInput, setDepositInput] = useState("");

  const handleWithdrawalInput = e => {
    setWithdrawInput(e.currentTarget.value);
  };

  const handleWithdrawal = e => {
    e.preventDefault();
    if (withdrawInput !== "") {
      let prevBalance = parseFloat(prop.balance);
      let sum = parseFloat(withdrawInput);
      prop.setBalance((prevBalance + sum).toFixed(2));
    }
  };

  const handleDepositInput = e => {
    setDepositInput(e.currentTarget.value);
  };

  const handleDeposit = e => {
    e.preventDefault();
    if (depositInput !== "") {
      e.preventDefault();
      let prevBalance = parseFloat(prop.balance);
      let sum = parseFloat(depositInput);
      prop.setBalance((prevBalance - sum).toFixed(2));
    }
  };
  const resetBalance = () => {
    prop.setBalance(10000);
  };
  const content = (
    <div>
      <form onSubmit={handleWithdrawal}>
        <input
          type="text"
          pattern="[0-9]*"
          name="textbox-withdraw"
          placeholder="Enter Integer"
          value={withdrawInput}
          onChange={handleWithdrawalInput}
        />
        <button>Withdraw</button>
      </form>
      <form onSubmit={handleDeposit}>
        <input
          type="text"
          pattern="[0-9]*"
          name="textbox-deposit"
          placeholder="Enter Integer"
          value={depositInput}
          onChange={handleDepositInput}
        />
        <button>Deposit</button>
      </form>
      <button onClick={() => resetBalance()}>Reset Balance</button>
      <div className="balance-summary">Current Balance: {prop.balance} USD</div>
    </div>
  );
  return content;
};

export default Balance;
