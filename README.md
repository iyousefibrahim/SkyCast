# SkyCast

SkyCast is a weather forecasting application built using Angular. It fetches real-time weather data from the WeatherAPI and displays key weather parameters in a clean, user-friendly interface. Users can search for any location, toggle between Celsius and Fahrenheit, and view detailed weather conditions like UV Index, Wind Status, and more.

## Features

- **Real-time Weather Information**: Shows current temperature, condition (e.g., clear, cloudy), and other important weather details.
- **Search Functionality**: Allows users to search for weather data by city or location.
- **Temperature Toggle**: Users can switch between Celsius and Fahrenheit with a simple button toggle.
- **Weather Highlights**: Displays additional weather details such as UV Index, Wind Speed, Humidity, Visibility, Sunrise & Sunset times, and Air Quality.
- **3-day Forecast**: Users can switch between today's weather and the forecast for the week.
- **Responsive Design**: The layout adjusts to fit both desktop and mobile screens seamlessly.
- **Loading Spinner**: The app uses `ngx-spinner` to indicate when weather data is being fetched.
  
## Tech Stack

- **Frontend Framework**: Angular 17
- **UI Framework**: Flowbite (Tailwind CSS)
- **Loading Spinner**: ngx-spinner
- **State Management**: Angular Signals
- **API**: [WeatherAPI](https://www.weatherapi.com/)
