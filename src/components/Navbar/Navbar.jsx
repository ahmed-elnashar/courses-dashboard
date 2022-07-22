import styles from "./Navbar.module.scss";

import { ReactComponent as Avatar } from "../../pics/avatar.svg";

import { MdOutlineMenu } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiMessageCircle, FiMail } from "react-icons/fi";



const Navbar = () => {

    return (
        <div className={styles.container}>
            {/* BURGER */}
            <div
                className={styles.burger_container}
                onClick={() => {
                    //   setNav(!nav);
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
            </div>

            {/* Profile */}
            <div className={styles.avatar_container}>
                <div className={styles.icon_avatar_container}>
                    <Avatar />
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
