function loadImage(url) {
    return new Promise((resolve, reject)=>{
        let image = new Image()
        image.onload = function(){
            resolve(image)
        }

        image.onerror = function(){
            let messsage = 'Could not load image:'+ url
            reject(new Error(messsage))
        }
        image.src = url;
    })
}

export default loadImage