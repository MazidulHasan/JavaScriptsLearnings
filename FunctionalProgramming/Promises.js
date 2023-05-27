import loadImage from "./loadImage"

let addImage = (src) => {
    let imgElement = document.createElement("img")
    imgElement.src = src
    document.body.appendChild(imgElement)
}

Promise.all([
    loadImage('images/img1.jpg'),
    loadImage('images/img2.jpg'),
    loadImage('images/img3.jpg')
]).then((images)=>{
    images.forEach(img => addImage(img.src))
}).catch((error) => {
    console.log(error);
})