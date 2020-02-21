import React, { useState, useEffect } from "react";

const OwnedStock = prop => {
  const [name, setName] = useState();
  const [price, setPrice] = useState(
    localStorage.getItem(prop.code + "Price") || "Error"
  );
  const [currency, setCurrency] = useState();
  const [quantity, setQuantity] = useState(
    localStorage.getItem(prop.code) || 0
  );
  const [sellAmount, setSellAmount] = useState(1);

  useEffect(() => {
    const profilePrefix = "https://finnhub.io/api/v1/stock/profile?symbol=";
    const token = "&token=botklt7rh5rbskee6j90";

    fetch(profilePrefix + prop.code + token)
      .then(response => response.json())
      .then(response => {
        setName(response.name);
        setCurrency(response.currency);
      })
      .catch(setName("API limit reach - please try again in a couple of secs"));
  }, [prop.code]);

  useEffect(() => {
    localStorage.setItem(prop.code, quantity);
  }, [prop.code, quantity]);

  useEffect(() => {
    let quantity = localStorage.getItem(prop.code);
    setQuantity(parseInt(quantity));
    setPrice(localStorage.getItem(prop.code + "Price"));
  }, [prop.code, prop.balance]);

  const handleSellInput = e => {
    setSellAmount(e.currentTarget.value);
  };

  const handleSell = e => {
    e.preventDefault();
    if (sellAmount !== null && sellAmount <= quantity) {
      let amount = parseInt(sellAmount);
      prop.setBalance(
        (parseFloat(prop.balance) + parseFloat(price) * amount).toFixed(2)
      );
      setQuantity(quantity - amount);
    }
  };

  if (quantity > 0) {
    return (
      <div className="stock-element">
        <h3>
          {name} - Owned: {quantity}
          <form onSubmit={handleSell}>
            <input
              type="text"
              pattern="[0-9]*"
              name="textbox-sell"
              placeholder="Enter Integer"
              value={sellAmount}
              onChange={handleSellInput}
            />
            <button>Sell</button>
          </form>
        </h3>
        <p>
          Price: {price} {currency}
        </p>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default OwnedStock;
