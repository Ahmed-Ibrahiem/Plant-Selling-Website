let left = document.getElementById('left');
let right = document.getElementById('right');
let img = document.getElementById('img');
let count = document.getElementById('count');


let images = ['image/image2.png' , 'image/image6.png' , 'image/image5.png' , 'image/image7.png' , 'image/image3.png' ,'image/image1.png' ]



let mode = 'right';
let step = 0; 
count.innerText = `${step+1}/${images.length}`



function check (id){
    if (id === 'right'){
        changeright()
    }else {
        changeleft()
    }
}

function changeright (){
            
    if(step < images.length){
        step +=1 ;
        img.src = `${images[step]}`
        count.innerText = `${step+1}/${images.length}`
        if(step == images.length - 1){
            step = images.length
        }
        
    }else{
        img.src = `${images[images.length-1]}`
    }

}
function changeleft(){
    step = step -1;
    if(step >= 1) {
        img.src = `${images[step-1]}`
        count.innerText = `${step}/${images.length}`
        if(step == 1){
            step = 0
        }
    }else{
        step = 0
        img.src = `${images[step]}`
    }

}


let search = document.getElementById('search');
let form = document.getElementById('test');
let close = document.getElementById('close');


search.onclick= function (){
    if(form.style.display === 'none'){
        form.style.display = 'flex'
        form.focus();
    }else{
        form.style.display = 'none'
    }
}

close.onclick = function (){
    form.style.display = 'none'
}


