import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes,} from 'react-router-dom';

import Main from './component/main';
import CardDetail from './component/card/card-detail/card-detail';

function App() {
  return (
   <>
   <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/nftdetail" element={<CardDetail/>} />

      </Routes>
   {/* <Main/> */}
   </>
  );
}

export default App;
