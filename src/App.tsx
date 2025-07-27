import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import PageNotFound from '@pages/PageNotFound';
import AppLayout from '@ui/layout/AppLayout';
import GlobalStyles from '@styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const future = {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
};

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000,
            //staleTime: 0,
        },
    },
});

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <BrowserRouter future={future}>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route path='main' element={<Home />} />
                        <Route index element={<Navigate replace to='main' />} />
                    </Route>
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default App;
