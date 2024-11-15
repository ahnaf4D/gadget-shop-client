import { useEffect, useState } from 'react';
import useAuth from './useAuth';
import axios from 'axios';

const useUserData = () => {
    const { user, loading } = useAuth();
    const [userData, setUserData] = useState({});
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                await axios.get(`${import.meta.env.VITE_SERVER_URL}/user?email=${user.email}`)
                    .then((res) => setUserData(res.data));
            }
            catch (error) {
                console.log(error);
            }
        }
        if (user?.email && !loading) {
            fetchUserData();
        }
    }, [user, loading])
    return userData;
};

export default useUserData;