import MainPage from '@/pages/main';
import { useAuth0 } from '@auth0/auth0-react';
import { useUser } from '@auth0/nextjs-auth0/client';
import styles from '../../styles/Home.module.css';

export function AuthButton({isAuthenticated}) {
    const { loginWithRedirect, logout, user } = useAuth0();
    const { loginuser } = useUser();
    if (user?.name === 'undefined') {
        console.log("not, Login");
        console.log(user?.name);
    } else {
        console.log("Login");
        console.log(user?.name);
    }
    return (
        <div>
            {isAuthenticated && (
                <div>
                    {<p className={styles.username}>{user?.name}</p>}
                    <button className={styles.button} onClick={() => logout()}>ログアウト</button>
                </div>
            )}
            {!isAuthenticated && (
                <div>
                    <button className={styles.loginbutton} onClick={() => loginWithRedirect()}>新規登録/ログイン</button>
                </div>
            )}
        </div>
    )
}