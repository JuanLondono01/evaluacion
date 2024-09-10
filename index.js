const check = document.getElementById('check');
const verInfo = document.getElementById('ver-info');

check.addEventListener('change', ()=>{
    if (check.checked) {
        verInfo.classList.remove('active')
    }else{
        verInfo.classList.add('active')
    }
})