
const buton=document.querySelector('.buton')
let enteredTask=document.querySelector('#task_holder')
let newtask;
const main=document.querySelector('.tasks')
buton.addEventListener('click',(e)=>{
    e.preventDefault();
    let newTask=document.createElement('div')
    newTask.setAttribute('class','newdiv')
    let dummy=enteredTask.value;
    error=document.querySelector('.error')
   if(dummy===''){
   
    error.innerHTML=`Plz enter valid tasks`
    setTimeout(() => {
      error.innerHTML='';
    }, 3000);
   }
   else {
    error.innerHTML=``
    newTask.innerHTML=` <input
    type="checkbox"
    class="rounded-checkbox"
    id="checkbox"
  />  `+`<span>${dummy}</span>`+`<span id='cross'>${'\u00d7'}</span>`;
    
    main.appendChild(newTask);
  }
     newtask=document.querySelectorAll('.newdiv')
    


    //  newtask.forEach((item)=>{
      newTask.addEventListener('click',(e)=>{
     if(e.target.tagName==='SPAN' && e.target.id==='cross'){
           
            e.target.parentElement.remove();
     }
     
     else if(e.target.tagName=='INPUT' ){
      console.log("clicked");
        let text=e.target.nextElementSibling;
        if(text.id==='after'){
            text.innerHTML=`${text.innerHTML}`
             text.setAttribute('id','');
      }
      else{
          text.innerHTML=`${text.innerHTML}`
          text.setAttribute('id','after');
      }
        
     }
    })
    // console.log(item);
    enteredTask.value="";
    
    // })
    

})





