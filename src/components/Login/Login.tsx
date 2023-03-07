import React from 'react';
import styles from './Login.module.css'
import {useAuthState, useSignInWithGoogle} from "react-firebase-hooks/auth";
import {auth} from "../../firebase/firebaseconfig";
import GoogleIcon from '@mui/icons-material/Google';
import {signOut} from 'firebase/auth'

const Login = React.memo(() => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    const [loggedUser] = useAuthState(auth)

    const signIn = async () => {
        try{
            await signInWithGoogle([], {prompt: 'select_account'})
        }catch(e){
            console.log('Error singing in')
        }
    }

    const logOut = async () => {
        await signOut(auth)
    }

    return (
        <div className={styles.login}>
            {loggedUser ?
                <div className={styles.signOut} onClick={logOut}>Sign out</div>
                :
                <div onClick={signIn} className={styles.google}>
                    <GoogleIcon/>
                    <span>Continue with Google</span>
                </div>
            }
            {loggedUser && user && <div className={styles.userInfo}>
                <img className={styles.userAvatar} src={user.user.photoURL!} alt="User avatar"/>
                <div>{user.user.displayName}</div>
            </div>}
        </div>
    );
});

export default Login;