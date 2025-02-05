import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/main-page/MainPage';
import { CountryDetails } from './pages/country-details/CountryDetails';
import './App.scss';
import NotFound from './pages/not-found/NotFound';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/country/:countryCode" element={<CountryDetails />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
