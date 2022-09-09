import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import PageHeader from './PageHeader';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <PageHeader/>
      <MainContent/>
      <Footer/>

    </div>
  );
}

export default App;
