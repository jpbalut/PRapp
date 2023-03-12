import { collection, deleteDoc, doc, setDoc, deleteField } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { fileUpload, loadPrs } from "../../helpers"
import {addNewEmptyPr, deletePrById, savingNewPr, setActivePr, setNotDeteletedPhotosToActivePr, setPhotosToActivePr, setPr, setSaving, updatePr} from "./"
import { workout } from "../../workouts/data/workout"
// import { getAuth } from "firebase/auth"

export const startNewPr = () => {
    return async(dispatch, getState) => {
        dispatch(savingNewPr())
        const {uid} = getState().auth
        const newPr = {
            Rm: 0,
            date: new Date().getTime(),
            name: '',
            type: '',
            imageUrls: [],
        }
        const newDoc = doc(collection(FirebaseDB, `${uid}/workout/exercise`))

        await setDoc(newDoc, newPr)

        newPr.id = newDoc.id;
        dispatch(addNewEmptyPr( newPr))
        dispatch( setActivePr(newPr))
    }
}
// TODO: Crear TODOS los PR en 0 cuando se crea un nuevo usuario
export const startBasicPr = () => {
    return async(dispatch, getState) => {
        dispatch(savingNewPr())
        console.log(workout)
        const {uid} = getState().auth
        for (const pr of workout) {
            const newDoc = doc(collection(FirebaseDB, `${uid}/workout/exercise`))
            await setDoc(newDoc, pr)
            pr.id = newDoc.id;
            dispatch(addNewEmptyPr( pr))
            
        }
    }
}

export const startLoadingPrs = () => {
    return async(dispatch, getState ) => {
        const {uid} = getState().auth
        // const {exercise} = getState().workout

        if(!uid) throw new Error('El UID del usuario no existe')
        
        const prs = await loadPrs(uid)
        dispatch(setPr(prs))
        
    }
}

export const startSavePr = () => {
    return async(dispatch, getState ) => {

        dispatch(setSaving())
        const {uid} = getState().auth
        const {active:exercise} = getState().workout
        const { historical_Rm, historical_dates } = exercise
        const prToFireStore = {...exercise, date: new Date().getTime(), historical_Rm: [...historical_Rm, exercise.Rm], historical_dates: [...historical_dates, new Date().getTime()]}
        const tempPr = {...exercise, date: new Date().getTime(), historical_Rm: [...historical_Rm, exercise.Rm], historical_dates: [...historical_dates, new Date().getTime()]}
        delete prToFireStore.id

        const docRef = doc(FirebaseDB, `${uid}/workout/exercise/${exercise.id}`)
        await setDoc(docRef, prToFireStore, {merge:true})


        console.log(tempPr)
        dispatch(updatePr(tempPr))
        dispatch(setActivePr(tempPr))
    }
}

export const startUploadingFiles = (files = [])=>{
    return async(dispatch) => {
        dispatch(setSaving())

        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file))
        }

        const photosUrls = await Promise.all(fileUploadPromises)
        
        dispatch(setPhotosToActivePr(photosUrls))

    }
}

export const startDeletingPr = () => {
    return async(dispatch, getState)=>{
        const {uid} = getState().auth
        const {active:exercise} = getState().workout

        const docRef = doc(FirebaseDB, `${uid}/workout/exercise/${exercise.id}`)
        await deleteDoc(docRef)

        dispatch(deletePrById(exercise.id))
    }
    
}

export const startDeletingImage = (image_id="") => {
    return async(dispatch, getState)=>{
        const {active:exercise} = getState().workout
        const images = exercise.imageUrls
        console.log(image_id)

        const index = images.indexOf(image_id)
        const x = [...images]
        console.log(x)
        x.splice(index,1)
        
        console.log(x)

        dispatch(setNotDeteletedPhotosToActivePr(x))

    }
    
}

// export const getAllUsers = () => {
//     return async(dispatch)=> {
//         const auth = getAuth();
//         const user = auth.currentUser
        
        
//      if (user !== null) {
//         const uid = user.uid;

//         console.log(uid)
//      }
//     }
// }

// historical_dates
// historical_Rm
// jorge: oE5Ubwwkw3PdVpjQdREgkjl9qm62
// dani: b6vLIztuxvgsXqYpH0LUqxGWgBT2
// alvaro: SO164yyYekbialOt0sV54HdBdln1

// Cluadio: nHceEydG1vYS9By4PH8HLemrMfw1
// export const getAllUsers = () => {
//     return async(dispatch)=> {
//         const functions = require('firebase-functions');
//         const admin = require('firebase-admin');
        
//         admin.initializeApp();
        
//         const auth = admin.auth();
        
//         const getAllUsers = (req, res) => {
//           const maxResults = 1; // optional arg.
        
//           auth.listUsers(maxResults).then((userRecords) => {
//             userRecords.users.forEach((user) => console.log(user.toJSON()));
//             res.end('Retrieved users list successfully.');
//           }).catch((error) => console.log(error));
//         };
        
//         module.exports = {
//           api: functions.https.onRequest(getAllUsers),
//         };




//     }}