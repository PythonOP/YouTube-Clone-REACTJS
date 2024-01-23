import {BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed } from './components';

const App = () => (
    // Wrap entire application
    <BrowserRouter>
        <Box sx={{ background: '#000'}}>
           <Navbar/>
           <Routes>
                <Route path='/' exact element={<Feed/>} />
                <Route path='/video/:id' element={<VideoDetail/>} />
                <Route path='/channel/:id' element={<ChannelDetail/>} />
                <Route path='/search/:searchTerm' element={<SearchFeed/>} />
            </Routes> 
        </Box>
    </BrowserRouter>
);

export default App;