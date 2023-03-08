import { createSlice } from '@reduxjs/toolkit';

export const workoutSlice = createSlice({
    name: 'workout',
    initialState: {
        isSaving: false,
        messageSaved: '',
        exercise: [],
        active: null
    },
    reducers: {
        savingNewPr: (state ) => {
            state.isSaving = true;
        },
        addNewEmptyPr: (state, action) => {
            state.exercise.push(action.payload);
            state.isSaving = false;
        },
        setActivePr: (state, action) => {
            state.active = action.payload
            state.messageSaved = ''
            
        },
        setPr: (state, action) => {
            state.exercise = action.payload

        },
        setSaving: (state) => {
            state.isSaving = true
            state.messageSaved = ''
        },
        updatePr: (state, action) => {
            state.isSaving = false
            state.exercise = state.exercise.map(pr => {
                if (pr.id === action.payload.id){
                    return action.payload
                }
                return pr
            })
            state.messageSaved = `${action.payload.Rm} actualizado correctamente`
        },
        setPhotosToActivePr: (state, action ) =>{
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload]
            state.isSaving = false;
        },
        setNotDeteletedPhotosToActivePr: (state, action ) =>{
            state.active.imageUrls = [...action.payload]
            state.isSaving = false;
        },
        clearPrLogout: (state) => { 
            state.isSaving = false;
            state.messageSaved = ''
            state.exercise = []
            state.active = null

        },
        deletePrById: (state, action) => {
            state.active = null;
            state.exercise = state.exercise.filter(pr => pr.id !== action.payload)
            
        },
        deleteImage: (state, action) => {

        },
        deSelectPr: (state) => {
            state.active = null;
        },
    }
});
export const { deSelectPr, savingNewPr, setNotDeteletedPhotosToActivePr, addNewEmptyPr, setActivePr, setPr, setSaving, updatePr, deletePrById, setPhotosToActivePr, clearPrLogout, deleteImage } = workoutSlice.actions;