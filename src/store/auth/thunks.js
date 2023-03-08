

import { loginWithEmailPassword, logoutFireBase, registerUserWithEmail, signInWithGoogle } from "../../firebase/providers"
import { clearPrLogout, startBasicPr, startNewPr } from "../workout"
import { checkingCredentials, login, logout } from "./authSlice"
import {getAdditionalUserInfo} from "firebase/auth"

export const checkingAuthentication = (email, password ) => {
    return async(dispatch) => {


        dispatch(checkingCredentials())

    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials())
        const result = await signInWithGoogle()
        if (!result.ok) return dispatch( logout(result.errorMessage) )
        // const {isNewUser} = getAdditionalUserInfo(result)
        // console.log(isNewUser)
        // if (!!isNewUser) return dispatch(startBasicPr())
        

        dispatch(login(result))
        // console.log('allgood')

    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials())
        const result = await registerUserWithEmail({email, password, displayName})
        if (!result.ok) return dispatch(logout(result.errorMessage))
        dispatch(startBasicPr())
        dispatch(login(result))
        

    }


}

export const startLoginWithEmailPassword = ({email, password}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials())
        const result = await loginWithEmailPassword({email, password})
        if (!result.ok) return dispatch( logout(result.errorMessage) )
        dispatch(login(result))

    }

}

export const startLogout = () => {
    return async(dispatch) => {
        await logoutFireBase()
        dispatch(clearPrLogout())
        dispatch(logout())
    }

}