import React, { useState, useEffect } from "react";

const BuyStock = prop => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [currency, setCurrency] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [buyAmount, setBuyAmount] = useState(1);

  useEffect(() => {
    const profilePrefix = "https://finnhub.io/api/v1/stock/profile?symbol=";
    const quotePrefix = "https://finnhub.io/api/v1/quote?symbol=";
    const token = "&token=botklt7rh5rbskee6j90";

    fetch(profilePrefix + prop.code + token)
      .then(response => response.json())
      .then(response => {
        setName(response.name);
        setAddress(response.address);
        setCity(response.city);
        setCountry(response.country);
        setCurrency(response.currency);
      })
      .catch(
        setName("API limit reached - please try again in a couple of seconds")
      );

    fetch(quotePrefix + prop.code + token)
      .then(response => response.json())
      .then(response => {
        setPrice(response.c);
        localStorage.setItem(prop.code + "Price", response.c);
      });
  }, [prop.code]);

  const handleBuyInput = e => {
    setBuyAmount(e.currentTarget.value);
  };

  const handleBuy = e => {
    e.preventDefault();
    let quantity = localStorage.getItem(prop.code);
    let amount = parseInt(buyAmount);

    if (quantity > 0) {
      if (buyAmount !== null) {
        quantity = parseInt(quantity);
        localStorage.setItem(prop.code, quantity + amount);
        prop.setBalance(
          (parseFloat(prop.balance) - parseFloat(price) * amount).toFixed(2)
        );
      }
    } else {
      localStorage.setItem(prop.code, amount);
      prop.setBalance(
        (parseFloat(prop.balance) - parseFloat(price) * amount).toFixed(2)
      );
    }
  };

  return (
    <div className="stock-element">
      <h3>
        {name}{" "}
        <form onSubmit={handleBuy}>
          <input
            type="text"
            pattern="[0-9]*"
            name="textbox-sell"
            placeholder="Enter Integer"
            value={buyAmount}
            onChange={handleBuyInput}
          />
          <button>Buy</button>
        </form>
      </h3>
      <p>
        Price: {price} {currency}
      </p>
      <p>
        Address: {address}, {city}, {country}
      </p>
    </div>
  );
};

export default BuyStock;
