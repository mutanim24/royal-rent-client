import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useAdmin = () => {
    const { user, loading } = useAuth()
    const [isAdmin, setIsAdmin] = useState(null)
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    const [isAdminError, setIsAdminError] = useState(null);
    
    useEffect(() => {
        const checkAdminStatus = async () => {
            if (!loading && user?.email) {
                try {

                    const response = await fetch(`http://localhost:5000/users/${user.email}`);

                    if (response.ok) {
                        const data = await response.json();
                        console.log('is admin response', data);
                        setIsAdmin(data.isAdmin);
                    } else {
                        console.error('Failed to fetch admin status');
                        setIsAdminError('Failed to fetch admin status');
                    }
                } catch (error) {
                    console.error('Error fetching admin status:', error);
                    setIsAdminError('Error fetching admin status');
                } finally {
                    setIsAdminLoading(false);
                }
            }
        };

        checkAdminStatus();
    }, [loading, user]);
    return [isAdmin, isAdminLoading, isAdminError];
};

export default useAdmin;

