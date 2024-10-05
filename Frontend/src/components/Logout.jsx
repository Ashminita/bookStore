

import React from 'react';
import { useAuth } from '../context/AuthProvider';

const Logout = () => {
    const [authUser, setAuthUser] = useAuth();

    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            });
            localStorage.removeItem("Users");
            alert("Logout successful");
        setTimeout(()=>{
          window.location.reload();
        },2000);
        } catch (error) {
            alert("Error: " + error.message);
            setTimeout(()=>{},2000);
        }
    };

    return (
        <div>
            <button 
                className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer" 
                onClick={handleLogout}
            >
                Logout
            </button>  
        </div>
    );
}

export default Logout;
