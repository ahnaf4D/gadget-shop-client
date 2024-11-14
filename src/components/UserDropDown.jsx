import { Link, useNavigate } from 'react-router-dom';
import defaultAvatar from '../assets/default-avatar.png'
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
const UserDropDown = () => {
    const { user, logOutUser } = useAuth();
    const navigate = useNavigate();
    const onSubmit = async () => {
        try {
            await logOutUser();
            toast.success("Logout Successful");
            navigate('/');
        }
        catch (err) {
            toast.error(err.message);
        }
    }
    return (
        <div>
            <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button">
                    <div className="avatar">
                        <div className="ring-black ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                            <img referrerPolicy='no-referrer'
                                src={user && user.photoURL ? user.photoURL : defaultAvatar} />
                        </div>
                    </div>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><Link>Dashboard</Link></li>
                    <button onClick={onSubmit} className="btn btn-primary btn-outline">Logout</button>
                </ul>
            </div>
        </div>
    );
};

export default UserDropDown;