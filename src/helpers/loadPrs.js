import { dialogClasses } from '@mui/material'
import {collection, getDocs} from 'firebase/firestore/lite'
import { FirebaseDB } from '../firebase/config'

export const loadPrs = async(uid='') => {
    if(!uid) throw new Error('El UID del usuario no existe')

    const collectionRef = collection(FirebaseDB, `${uid}/workout/exercise`)
    const docs = await getDocs(collectionRef)
    const prs = []
    docs.forEach(doc =>{
        prs.push({ id: doc.id, ...doc.data() })
    })


    return prs;

}
