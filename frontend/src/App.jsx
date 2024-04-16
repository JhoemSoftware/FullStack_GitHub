import { Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { HomePage, LoginPage, SignUpPage, ExplorePage } from './pages/';
import { Sidebar } from './components/';
import { useAuthContext } from './context/AuthContext';

export const App = () => {
    const { authUser, loading } = useAuthContext();

    if(loading) return null;

    return (
        <div className="flex text-white">
            <Sidebar />
            <div className='max-w-5x1 my-5 mx-auto transition-all duration-300 flex-1'>
                <Routes>
                    <Route path='/' element={ <HomePage /> } />
                    <Route path='/explore' element={ <ExplorePage /> } />
                    <Route path='/login' element={ !authUser ? <LoginPage /> : <Navigate to={'/'} /> } />
                    <Route path='/signup' element={ !authUser ? <SignUpPage /> : <Navigate to={'/'} /> } />
                    {/* <Route path='/explore' element={ authUser ? <ExplorePage /> : <Navigate to={'/login'} /> } /> */}
                </Routes>
                <Toaster />
            </div>
        </div>
    )
}