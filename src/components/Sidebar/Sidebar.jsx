import React from 'react';

import styles from './Sidebar.module.scss';
import { MdOutlineLogout } from 'react-icons/md';
import { IoMegaphone } from 'react-icons/io5';
import { FaChalkboardTeacher, FaTimes, FaHome, FaBook, FaGraduationCap, FaChartLine } from 'react-icons/fa';
import { GoCalendar } from 'react-icons/go';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';


function Sidebar() {
    const [nav, setNav] = useState(false);

    const NavUrl = ({ url, icon, description }) => {

        const checkWindowSize = () => {
            if (window.innerWidth < 1024) setNav(!nav);
        };

        return (
            <li className={styles.li_nav_link}>
                <NavLink
                    to={`${url}`}
                    onClick={() => checkWindowSize()}
                    className={({ isActive }) => (isActive ? styles.active : '')}
                >
                    {icon}
                    <span className={styles.description}>{description}</span>
                </NavLink>
            </li>
        );
    };

    return (
        <div className={`${styles.navbar_container} ${nav ? styles.navbar_mobile_active : ''}`}>
            <nav className={nav ? '' : styles.nav_small}>
                {/* Logo */}
                <div className={styles.logo}>
                    <span className={styles.logo_text}>Coligo</span>
                    <FaChalkboardTeacher className={styles.logo_icon} />
                    <FaTimes className={styles.mobile_cancel_logo} onClick={() => setNav(!nav)} />
                </div>
                {/* Submenu */}
                <ul className={styles.menu_container}>

                    <NavUrl url="/" icon={<FaHome />} description="Dashboard" />
                    <NavUrl url="/schedule" icon={<GoCalendar />} description="Schedule" />
                    <NavUrl url="/courses" icon={<FaBook />} description="Courses" />
                    <NavUrl url="/gradebook" icon={<FaGraduationCap />} description="Gradebook" />
                    <NavUrl url="/performance" icon={<FaChartLine />} description="Performance" />
                    <NavUrl url="/announcements" icon={<IoMegaphone />} description="Announcements" />

                </ul>
                <div
                    className={styles.btn_logout}
                    onClick={() => setNav(!nav)}
                >
                    <MdOutlineLogout />
                </div>

                <div
                    className={nav ? styles.mobile_nav_background_active : ''}
                    onClick={() => {
                        setNav(!nav);
                    }}
                ></div>
            </nav >
        </div >
    );
}

export default Sidebar;