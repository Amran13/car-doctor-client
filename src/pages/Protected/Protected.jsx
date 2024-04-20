import React, { useContext } from 'react';
import { authContext } from '../../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const Protected = ( {children} ) => {
    const {user} = useContext(authContext)
    return (
        <div>
            {
                user ? children : <Navigate to='/login'></Navigate>
            }
        </div>
    );
};

export default Protected;