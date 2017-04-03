import firebaseApp from './firebase'
import cuid from 'cuid'

const storageRef = firebaseApp.storage().ref()

export const MAXIMUM_FILE_SIZE = 10485760 // equal to 10MB

export const SingleUploadThread = () => {
    let uploadTask
    let progressHandler = (progress) => {}   
    
    return {
        isUploading: false,

        upFile(file) {
            return new Promise((resolve, reject) => {
                const uniqueIdForFileName = cuid()
                const fileRef = storageRef.child(`app/${uniqueIdForFileName}-${file.name}`)
                uploadTask = fileRef.put(file)
                this.isUploading = true

                uploadTask.on('state_changed', snapshot => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    progressHandler(progress)
                }, 
                error => reject(error), 
                () => {
                    this.isUploading = false
                    progressHandler(null)
                    resolve(uploadTask.snapshot.downloadURL)
                })
            })
        },
        onProgress(handler) {
            progressHandler = handler
        }
    }
}