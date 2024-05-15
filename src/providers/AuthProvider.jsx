import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (email, password, name, photoUrl) => {

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const { user } = userCredential;

            // Update the user profile with name and photoUrl
            await updateProfile(user, {
                displayName: name,
                photoURL: photoUrl
            });



            // setUser will be automatically updated via onAuthStateChanged
            return userCredential;
        }
        catch (error) {
            return error;
        }
        finally {
            setLoading(true);
        }

    }


    const profileUpdate = (name, image) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logInWithGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            setUser(currentUser);
            console.log('current user', currentUser);
            const loggedUser = {email: userEmail};
            setLoading(false);

            if(currentUser){
                axios.post('https://study-sphere-server-nine.vercel.app/jwt', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log('token response', res.data);
                })
            }
            else{
                axios.post('https://study-sphere-server-nine.vercel.app/logout', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log(res.data)
                })
            }
        });
        return () => {
            unSubscribe();
        }
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        profileUpdate,
        logIn,
        logInWithGoogle,
        logInWithGitHub,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;