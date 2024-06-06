import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes,} from 'react-router-dom';

import Main from './component/main';
import CardDetail from './component/card/card-detail/card-detail';
import NFT from './component/card/create-nft/nft';
import LatestNft from './component/all-nft/latest-nft';

function App() {
  return (
   <>
   <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/nftdetail" element={<CardDetail/>} />
        <Route path="/create_nft" element={<NFT/>} />
        <Route path="/latest_nft" element={<LatestNft/>} />
        
  </Routes>
   </>
  );
}

export default App;
