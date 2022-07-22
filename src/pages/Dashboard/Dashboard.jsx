import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { MdOutlineWavingHand } from 'react-icons/md';
import { ReactComponent as Avatar } from "../../pics/avatar.svg";

// https://mockend.com/org/repo/posts?limit=5
// https://mockend.com/org/repo/users?limit=5


import styles from './Dashboard.module.scss';

function Dashboard() {
    return (
        <main className={styles.container}>
            <div className={styles.welcome}>
                <h1>
                    Exams Time!
                    <MdOutlineWavingHand />
                </h1>
                <p>
                    Here we are, Are your ready to fight? Don't worry, we prepared some tips to be ready for your exams.
                </p>
            </div>
            <div className={styles.content_container}>
                <div className={styles.announcements}>
                    <div className={styles.header}>
                        <div className={styles.text}>
                            <h2>Announcements</h2>
                            <p>We educate worriers. Keep updated :] </p>
                        </div>
                        <div className={styles.link}>
                            <NavLink to='/announcements'>All</NavLink>
                        </div>
                    </div>
                    <div className={styles.data}>
                        <div className={styles.instructor_container}>
                            <div className={styles.img_container}>
                                <img src='https://via.placeholder.com/600/92c952' alt=''/>
                            </div>
                            <div className={styles.username}>
                                <span>Ahmed Tarek</span>
                            </div>
                            <div className={styles.text}>
                                hello ahmed leajrlfd flkasdfjldsj fadskl jflskdflkds fljkasdhflkj aslfkjlashd flkjdslfj asflkas flk lskjfljs;af  jksadf
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.quiz}>
                    <div className={styles.header}>
                        <div className={styles.text}>
                            <h2>Quiz</h2>
                            <p>See what's due </p>
                        </div>
                        <div className={styles.link}>
                            <NavLink to='/quiz'>All</NavLink>
                        </div>
                    </div>
                    <div className={styles.data}>
                        <div className={styles.quiz_container}>
                            <div className={styles.quiz_title}>
                                <p>Unit 2 Quiz</p>
                            </div>
                            <div className={styles.quiz_details}>
                                <li>
                                    <span className={styles.quiz_details_head}>Course:</span> <span>Physics 2</span>
                                </li>
                                <li>
                                    <span className={styles.quiz_details_head}>Topics:</span> <span>Motion and Force</span>
                                </li>
                                <li>
                                    <span className={styles.quiz_details_head}>Due to:</span> <span>20 Dec 2022 - 09:00 PM</span>
                                </li>
                                <div className={styles.quiz_cta}>
                                    <Link className={styles.quiz_cta_btn} to={'/'}>Start Quiz</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default Dashboard;