import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import PageNotFound from '@pages/PageNotFound';
import AppLayout from '@ui/layout/AppLayout';
import GlobalStyles from '@styles/GlobalStyles';

const App = () => {
    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route path='main' element={<Home />} />
                        <Route index element={<Navigate replace to='main' />} />
                    </Route>
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
