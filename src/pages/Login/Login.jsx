import React from 'react';
import { useDispatch } from 'react-redux';

import { logIn } from '../../redux/store/auth';

import styles from './Login.module.scss';

function Login() {
    const dispatch = useDispatch();
    return (
        <div className={styles.login_container}>
            <div className={styles.login_container_ctx}>
                <h3 className={styles.login_container_ctx_text}>
                    Hello, Login to Coligo Dashboard
                </h3>
                <button
                    className={styles.login_container_ctx_btn}
                    onClick={() => dispatch(logIn())}
                >Login</button>
            </div>
        </div>
    );
}

export default Login;