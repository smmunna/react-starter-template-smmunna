// Convert any file to Base64
const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64Data = event.target.result;
                resolve(base64Data);
            };
            reader.onerror = (error) => {
                reject(error.message);
            };

            reader.readAsDataURL(file);
        } else {
            reject(new Error('File is not provided'));
        }
    });
}
/*
 1. You have make function async, to access you have to use await, Paste in the frontend
 ----------------------------------------------------------------
  const handleImageUpload = async (e) => {
    e.preventDefault();
    const imageData = await base64.imageBase64(e.target.files[0]);
    console.log(imageData);
    // You can set it to state, local storage, or any other appropriate action.
  }
  ----------------------------------------------------------------
*/

export const base64 = {
    convertBase64
}