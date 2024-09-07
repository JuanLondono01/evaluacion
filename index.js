const check = document.getElementById('check');
const arrow = document.getElementById('arrow')

check.addEventListener('change', ()=>{
    if (check.checked) {
        arrow.src = './imgs/backward.png'
    }else{
        arrow.src ='./imgs/forward.png'
    }
})