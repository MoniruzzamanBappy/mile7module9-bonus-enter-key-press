const images = [
    'media/1.jpg',
    'media/2.jpg',
    'media/3.jpg',
    'media/4.jpg',
    'media/5.jpg',
    'media/6.jpg',
    'media/7.jpg',
    'media/8.jpg',
    'media/9.jpg',
    'media/10.jpg',
    'media/12.jpg',
    'media/11.jpg',
    'media/13.jpg'
];
let imgIndex= 0;
const img = document.getElementById('slider-img');
setInterval(()=>{
    if(imgIndex>=images.length){
        imgIndex=0;
    }
    const imgUrl = images[imgIndex];
    img.setAttribute('src', imgUrl)
    document.getElementById('slider-img');
imgIndex++;
},1000)