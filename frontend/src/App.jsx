import { Route, Routes } from 'react-router-dom';

// import { HomePage, LoginPage, SignUpPage, ExplorePage, LikesPage } from './pages/';
// TODO: Empaquetar todas las Importaciones en una línea
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { LikesPage } from './pages/LikesPage';
import { ExplorePage } from './pages/ExplorePage';
import { SignUpPage } from './pages/SignUpPage';
import { Sidebar } from './components/Sidebar';

export const App = () => {
    return (
        <div className="flex text-white">
            <Sidebar />
            <div className='max-w-5x1 my-5 mx-auto transition-all duration-300 flex-1'>
                <Routes>
                    <Route path='/' element={ <HomePage /> } />
                    <Route path='/login' element={ <LoginPage /> } />
                    <Route path='/signup' element={ <SignUpPage /> } />
                    <Route path='/explore' element={ <ExplorePage /> } />
                    <Route path='/likes' element={ <LikesPage /> } />
                </Routes>
            </div>
        </div>
    )
}