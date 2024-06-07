import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes,} from 'react-router-dom';

import Main from './component/main';
import CardDetail from './component/card/card-detail/card-detail';
import NFT from './component/card/create-nft/nft';
import LatestNft from './component/all-nft/latest-nft';
import TopNft from './component/all-nft/top-nft';
import MintedNft from './component/all-nft/minted';

function App() {
  return (
   <>
   <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/nftdetail" element={<CardDetail/>} />
        <Route path="/create_nft" element={<NFT/>} />
        <Route path="/latest_nft" element={<LatestNft/>} />
        <Route path="/top_nft" element={<TopNft/>} />
        <Route path="/minted_nft" element={<MintedNft/>} />
  </Routes>
   </>
  );
}

export default App;
