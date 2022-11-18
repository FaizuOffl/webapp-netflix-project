import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Content from './components/content/Content';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '90e5eff25410cc96420da3941043cd6b',
};

const App = () => {
  return (
    <div>
      {/* Nav Component */}
      <Nav />
      {/* Header background image with buttons and title */}
      <Header />
      {/* Content with movies */}
      <Content />
    </div>
  );
};

export default App;
