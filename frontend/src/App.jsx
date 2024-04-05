import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { HomePage, LoginPage, SignUpPage, ExplorePage, LikesPage } from './pages/';
import { Sidebar } from './components/';

export const App = () => {
    return (
        <div className="flex text-white">
            <Sidebar />
            <div className='max-w-5x1 my-5 mx-auto transition-all duration-300 flex-1'>
                <Routes>
                    <Route path='/' element={ <HomePage /> } />
                    <Route path='*' element={ <HomePage /> } />
                    <Route path='/login' element={ <LoginPage /> } />
                    <Route path='/signup' element={ <SignUpPage /> } />
                    <Route path='/explore' element={ <ExplorePage /> } />
                    <Route path='/likes' element={ <LikesPage /> } />
                </Routes>
                <Toaster />
            </div>
        </div>
    )
}