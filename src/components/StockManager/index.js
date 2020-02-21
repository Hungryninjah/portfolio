import React, { useState, useEffect } from 'react';
import BuyStock from './BuyStock';
import Balance from './Balance';
import OwnedStock from './OwnedStock';
import companyCodes from './company_codes.json';
import './StockManager.css';

// finhub token botklt7rh5rbskee6j90
const StockManager = () => {
  const [balance, setBalance] = useState(parseFloat(localStorage.getItem('balance')) || 10000);

  useEffect(() => {
    localStorage.setItem('balance', balance);
  }, [balance]);

  const stockPurchaseList = companyCodes.map(item => (
    <BuyStock code={item.code} key={item.key} balance={balance} setBalance={setBalance} />
  ));

  const ownedStockList = companyCodes.map(item => (
    <OwnedStock code={item.code} key={item.key} balance={balance} setBalance={setBalance} />
  ));

  const content = (
    <main className="home-page">
      <div className="content-wrap">
        <Balance balance={balance} setBalance={setBalance} />
        <div className="column1">
          <h1>Available Stock to Purchase</h1>
          {stockPurchaseList}
        </div>
        <div className="column2">
          <h1>Owned Stock</h1>
          {ownedStockList}
        </div>
      </div>
    </main>
  );
  return content;
};

export default StockManager;
