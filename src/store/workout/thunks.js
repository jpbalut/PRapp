
import { collection, deleteDoc, doc, setDoc, deleteField } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { fileUpload, loadPrs } from "../../helpers"
import {addNewEmptyPr, deletePrById, savingNewPr, setActivePr, setNotDeteletedPhotosToActivePr, setPhotosToActivePr, setPr, setSaving, updatePr} from "./"
import { workout } from "../../workouts/data/workout"

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

        const prToFireStore = {...exercise}
        delete prToFireStore.id
 
        const docRef = doc(FirebaseDB, `${uid}/workout/exercise/${exercise.id}`)
        await setDoc(docRef, prToFireStore, {merge:true})
        
        dispatch(updatePr(exercise))
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