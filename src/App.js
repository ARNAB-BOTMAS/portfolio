// import DesktopPage from "./Pages/DesktopPage";
// import PhonePage from "./Pages/PhonePage";
// import TabPage from "./Pages/TabPage";
// import Design from './Design/Design';
import { useEffect, useState } from 'react';
import FrameChange from './Pages/FrameChange';
import Preloader from './Pages/Preloader';
import './sass/frame.scss';


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(()=>setLoading(false),3000)
  }, []);
  return (
    <div className="App">
      {
        loading ? 
        (<Preloader/>) : (<FrameChange/>)
      }

      {/* <FrameChange/> */}
    </div>
  );
}

export default App;
