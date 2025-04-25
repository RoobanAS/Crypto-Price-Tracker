# 🪙 Real-Time Crypto Price Tracker

A responsive React + Redux Toolkit app that tracks real-time crypto prices, styled similar to CoinMarketCap. The app uses live data from the CoinGecko API and includes trend charts, color-coded indicators, and state management via Redux.

---

## 🚀 Features

- 📈 Real-time crypto price updates using CoinGecko API
- 💹 Displays top cryptocurrencies (BTC, ETH, etc.)
- 📊 Table includes:
  - Rank, Name, Symbol, Price
  - % Change (1h, 24h, 7d)
  - Market Cap, 24h Volume
  - Circulating Supply
  - Sparkline chart (7-day price trend)
- 🌈 Color-coded % changes (green = gain, red = loss)
- 🧠 Global state with Redux Toolkit
- ⚡ Live updates every 10 seconds

---

## 🛠️ Tech Stack

| Tool          | Purpose                        |
|---------------|--------------------------------|
| React         | Frontend UI                    |
| Redux Toolkit | State management               |
| Axios         | API requests                   |
| Recharts      | Trend chart visualization      |
| CoinGecko API | Real-time crypto market data   |

---

## 📂 Folder Structure

crypto-price-tracker/ 
│ 
├── src/ 
│ ├── app/ # Redux store setup 
│ ├── components/ # Reusable components (TrendChart) 
│ ├── features/ 
│ │ └── crypto/ # Redux slice and crypto table 
│ ├── assets/styles/ # CSS for components 
│ ├── App.js 
│ ├── index.js 
│ └── index.css

---

## 📦 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/crypto-price-tracker.git
cd crypto-price-tracker
Install dependencies

npm install
npm start
Open http://localhost:3000 in your browser.

📸 Demo Preview
🔁 Live updates every 10 seconds
✅ Real-time data powered by CoinGecko API
📉 Coin market trends with sparkline charts


🧠 State Management Overview
Redux manages all asset data through:

cryptoSlice.js - defines state and fetch logic

store.js - combines reducers and sets up the Redux store

Components dispatch fetchCryptoData() every 10s

🌟 Future Enhancements
✅ Sort/Filter by price, % change

🔍 Search functionality

🌑 Dark mode toggle

🔌 Real WebSocket integration (Binance)

🧪 Unit tests (selectors, reducers)

🔒 TypeScript support

📜 License
MIT License — feel free to use, share, or modify!

👨‍💻 Author
Rooban A
