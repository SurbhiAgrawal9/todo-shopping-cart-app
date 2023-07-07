import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { TodoProvider } from './Componant/TodoContext';
import { CartProvider } from './Componant/CartContext';
import { fetchWeatherData, fetchNewsData, fetchMovieData } from './Componant/Api';
import HomePage from './Componant/HomePage';
import AboutPage from './Componant/AboutPage';
import ContactPage from './Componant/ContactPage';
import TodoList from './Componant/TodoList';
import ShoppingCart from './Componant/ShoppingCart';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [newsData, setNewsData] = useState(null);
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weather = await fetchWeatherData();
        const news = await fetchNewsData();
        const movies = await fetchMovieData();

        setWeatherData(weather);
        setNewsData(news);
        setMovieData(movies);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>

        <TodoProvider>
          <TodoList />
        </TodoProvider>

        <CartProvider>
          <ShoppingCart />
        </CartProvider>

        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div>
            <h2>Weather Data</h2>
            <pre>{JSON.stringify(weatherData, null, 2)}</pre>

            <h2>News Data</h2>
            <pre>{JSON.stringify(newsData, null, 2)}</pre>

            <h2>Movie Data</h2>
            <pre>{JSON.stringify(movieData, null, 2)}</pre>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
