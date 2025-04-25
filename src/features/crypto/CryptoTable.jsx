import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoData } from './cryptoSlice';
import TrendChart from '../../components/TrendChart';
import './CryptoTable.css';

const CryptoTable = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector(state => state.crypto);

  useEffect(() => {
    dispatch(fetchCryptoData());
    const interval = setInterval(() => dispatch(fetchCryptoData()), 10000);
    return () => clearInterval(interval);
  }, [dispatch]);

  const formatNumber = number => new Intl.NumberFormat().format(number);

  const renderChange = value => (
    <span className={value > 0 ? 'green' : 'red'}>
      {value?.toFixed(2)}%
    </span>
  );

  return (
    <div className="table-container">
      <h2>Crypto Market Overview</h2>
      {status === 'loading' ? (
        <p>Loading data...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>1h %</th>
              <th>24h %</th>
              <th>7d %</th>
              <th>Market Cap</th>
              <th>Volume(24h)</th>
              <th>Circulating Supply</th>
              <th>Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {data.map((coin, index) => (
              <tr key={coin.id}>
                <td>{index + 1}</td>
                <td className="coin-name">
                  <img src={coin.image} alt={coin.name} width="20" />
                  <span>{coin.name}</span> <span className="symbol">{coin.symbol.toUpperCase()}</span>
                </td>
                <td>${coin.current_price.toLocaleString()}</td>
                <td>{renderChange(coin.price_change_percentage_1h_in_currency)}</td>
                <td>{renderChange(coin.price_change_percentage_24h_in_currency)}</td>
                <td>{renderChange(coin.price_change_percentage_7d_in_currency)}</td>
                <td>${formatNumber(coin.market_cap)}</td>
                <td>${formatNumber(coin.total_volume)}</td>
                <td>{formatNumber(coin.circulating_supply)} {coin.symbol.toUpperCase()}</td>
                <td><TrendChart sparkline={coin.sparkline_in_7d.price} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CryptoTable;
