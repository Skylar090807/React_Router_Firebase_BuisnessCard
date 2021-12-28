class ImageUploader {
  async upload(file) {
    //image_file_input에 upload 전달.
    //Asynchronous 한다. promise return
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', 'pdzaoz52') //cloudinary preset name
    const result = await fetch('https://api.cloudinary.com/v1_1/drqni4rhj/upload', {
      method: 'POST',
      body: data,
    })
    return await result.json()
  }
}

export default ImageUploader
