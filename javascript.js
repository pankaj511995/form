const sub=document.querySelector('.submit')
const name1=document.querySelector('.name')
const email1=document.querySelector('.email')
const list1=document.querySelector('.list')
const err=document.querySelector('.error')
sub.style.background='yellow'
// sub.addEventListener('click',(e)=>{
//     e.preventDefault()
//    document.querySelector('.my-form').style.background='white'
 
// })
 sub.addEventListener('click',onsubmit);
 function onsubmit(){
    if(name1.value=='' || email1.value==''){
       err.innerHTML='enter all field'
       err.style.background='red'
       setTimeout(()=>err.remove(),3000);
    }
    else{
        const li=document.createElement('li')
        li.appendChild(document.createTextNode(`${name1.value} ::${email1.value}`))
        list1.appendChild(li);
        name1.value=''
    email1.value=''
    }
    
 }