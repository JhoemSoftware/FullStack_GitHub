import { MdExitToApp } from 'react-icons/md';
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

export const Logout = () => {
    const { authUser, setAuthUser } = useAuthContext();
    
    const handleLogout = async () => {
        try {
            const res = await fetch('/api/auth/logout', { credentials: 'include' });
            const data = await res.json();
            setAuthUser(null);
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        authUser &&
        <>
            <div className="flex flex-col gap-3 items-center">
                <img src={authUser?.avatarUrl} alt="GitHub Profile Image" className="w-10 h-10 rounded-full border border-gray-700" />
                <div className="transition-colors duration-300 py-2 border p-2 rounded-md bg-colored hover:text-emerald-100 hover:bg-slate-600" onClick={ handleLogout }>
                    <MdExitToApp size={24} />
                </div>
            </div>
        </>
    )
}
