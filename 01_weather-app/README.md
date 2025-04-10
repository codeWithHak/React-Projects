# 🌤️ React Weather App — Project 01

A sleek and functional weather application built with **React** that fetches and displays real-time weather data for any city using the **OpenWeatherMap API**.

This project helped me master:
- 🔄 Fetching data from APIs
- 🔗 Making **chained API requests** (one after another)
- 🎯 Rendering dynamic UI from live API responses
- 💡 Working with user input and conditional rendering

---

## 🚀 Features

- 🔍 User inputs a city name to get real-time weather
- 📡 Fetches latitude & longitude for the city using the **OpenWeather Geo API**
- 🌆 Then uses that lat/lon to fetch weather data via the **OpenWeather Current Weather API**
- ☁️ Displays clean, formatted weather info in the UI

---

## 🧠 What I Learned

- ✅ How to **fetch APIs in React** using `fetch()`
- ✅ How to **handle chained API calls** (i.e., make one call, wait for the result, then use that result in the second call)
- ✅ How to handle asynchronous code using `async/await`

---

## 🌐 API Used

- [OpenWeather Geo API](https://openweathermap.org/api/geocoding-api)
- [OpenWeather Current Weather API](https://openweathermap.org/current)

---

## 🛠️ Getting Started

1. Clone this repo:

```bash
git clone https://github.com/codeWithHak/React-Projects/01_weather-app.git
cd 01-weather-app
npm i
npm start
```
