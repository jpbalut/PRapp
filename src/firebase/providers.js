import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async()=>{

    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        //const credentials = GoogleAuthProvider.credentialFromResult(result))
        const {displayName, email, photoURL, uid} = result.user
        return {
            ok: true,
            //User info
            displayName, email, photoURL, uid
        }
    } catch (error) {
        console.log(error)
         const errorCode = error.code;
         const errorMessage = error.message;

        return {
            ok: false,
            errorMessage,

        }
    }
}

export const registerUserWithEmail = async({email, password, displayName}) => {

    try{
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const {uid, photoURL} = resp.user

        //TODO actualizar el displayname en fire base

        await updateProfile(FirebaseAuth.currentUser, {displayName})

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error){

        return {ok: false, errorMessage: error.message}
    }
}

export const loginWithEmailPassword = async({ password, email }) => {
    try{
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        const {displayName, photoURL, uid} = resp.user
        return {
            ok: true,
            //User info
            displayName, photoURL, uid
        }

    }catch(error){
        console.log(error)
         const errorCode = error.code;
         const errorMessage = error.message;

        return {
            ok: false,
            errorMessage,
        }
    }
    

}

export const logoutFireBase = async() => {
    return await FirebaseAuth.signOut()

}