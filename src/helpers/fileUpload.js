
export const fileUpload = async(file) => {
    if (!file) throw new Error('No se encontro el archivo a subir')
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dywb9vy1i/image/upload'
    const formData = new FormData()
    formData.append('upload_preset', 'react-prapp')
    formData.append('file', file)

    try {
        const resp = await fetch(cloudUrl, {method: 'POST', body:formData});
        if(!resp.ok) throw new Error('No se pudo subir imagen')

        const cloudResp = await resp.json()
        
        return cloudResp.secure_url;

    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}
