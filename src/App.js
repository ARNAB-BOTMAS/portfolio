// import logo from './logo.svg';
// import './App.css';
// import FrameChange from "./Pages/FrameChange";
import DesktopPage from "./Pages/DesktopPage";
import PhonePage from "./Pages/PhonePage";
import TabPage from "./Pages/TabPage";
import Design from './Design/Design';
import './sass/frame.scss';

function App() {
  return (
    <div className="App">
        <Design/>
        <DesktopPage/>
        <TabPage />
        <PhonePage />
    </div>
  );
}

export default App;
