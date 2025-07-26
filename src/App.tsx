import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from '@pages/Main';
import PageNotFound from '@pages/PageNotFound';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='main' element={<Main />} />
                <Route index element={<Navigate replace to='dashboard' />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
