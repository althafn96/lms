const fileInput = (form, fields) => {

    if(type == 'icon') {
        if(action == 'set') {
            // console.log(icon.value.files[0])
            // formData.icon = icon.value.files[0]
            let iconFile = new Blob(icon.value.files, {type: "image/*"})
            iconFile.name = icon.value.files[0].name

            return iconFile
        } else {
            return null
        }
        // console.log(formData.icon)
    }
    if(type == 'image') {
        if(action == 'set') {
            let imageFile = new Blob(image.value.files, {type: "image/*"})
            imageFile.name = image.value.files[0].name

            return imageFile
        } else {
            formData.image = null
        }
    }


    return fileInput

}

export default fileInput
