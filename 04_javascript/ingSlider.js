let img_array = ['img1.png','img2.png'];
const array_length = img_array.length;
let i = 0;


const next =()=>{
    i++
    i%=array_length
    document.querySelector('img').src = `img/${img_array[i]}`
}

const prev =()=>{
    i--
    if(i<0){
        i=array_length-1

    }
    document.querySelector('img').src = `img/${img_array[i]}`
}


const slideImg = ()=>{
    i++
    i%=array_length
    document.querySelector('img').src = `img/${img_array[i]}`

}

let set = setInterval(slideImg, 1000)
const stop=()=>{
    clearInterval(set)
}
const start =()=>{
    set=setInterval(slideImg,1000)
}