import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import SearchPage from './components/SearchPage.js'
import PlayPage from './components/PlayPage.js'
import Queue from './components/Queue.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="Logo1">Lyrical Miracle</h1>
        <Tabs defaultActiveKey="Search" id="PageTabs">
        
          <Tab eventKey="Search" title="Search">
            <SearchPage/>
          </Tab>
          <Tab eventKey="Play" title="Play">
            <PlayPage/>
          </Tab>

        </Tabs>
        {/* <Queue/> */}
      </header>
    </div>
  );
}

export default App;
