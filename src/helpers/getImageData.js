export const getimageData = (image) => {
return new Promise ((resolve, eject)=>{

    const name = image.name;
    const extention = image.name.split('.').pop();
    
    const dataReader = new FileReader();
    dataReader.readAsDataURL(image)
    dataReader.onload = ()=> resolve({
        name,
        extention,
        data: dataReader.result.split(',')[1]
    })

    dataReader.onerror = error => eject(error => console.log('image process', error))
});

}
