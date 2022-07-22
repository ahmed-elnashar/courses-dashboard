import styles from "./Navbar.module.scss";
import { useDispatch, useSelector } from 'react-redux';

import { MdOutlineMenu } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiMessageCircle, FiMail } from "react-icons/fi";
import { IoLogOut } from 'react-icons/io5';

import { setSidebar } from '../../redux/store/theme';
import { logOut } from "../../redux/store/auth";

const Navbar = () => {
    const sidebar = useSelector(state => state.theme.sidebar);
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            {/* BURGER */}
            <div
                className={styles.burger_container}
                onClick={() => {
                    dispatch(setSidebar(!sidebar));
                }}
            >
                <MdOutlineMenu />
            </div>

            <div className={styles.welcome_text}>
                <h1>Welcome, Talia</h1>
            </div>

            {/* Icons */}
            <div className={styles.left_icons}>
                <div
                    className={`${styles.icon_container} ${styles.notifications}`}
                >
                    <FiMessageCircle />
                </div>
                <div className={`${styles.icon_container} ${styles.messages} `} >
                    <FiMail />
                </div>
                <div
                    className={`${styles.logout_container} ${styles.logout} `}
                    onClick={() => dispatch(logOut())}
                >
                    <IoLogOut />
                </div>
            </div>

            {/* Profile */}
            <div className={styles.profile_container}>
                <div className={styles.img_container}>
                    <img src='https://i.pravatar.cc/150?u=31254' alt='' />
                </div>
                <div className={styles.username}>
                    <span>Ahmed Tarek</span>
                    <MdKeyboardArrowDown />
                </div>
            </div>

        </div>
    );
};

export default Navbar;
