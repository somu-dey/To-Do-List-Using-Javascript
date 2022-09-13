function addtolist(){
    var taskname=document.getElementById('input').value
    var tododiv=document.getElementById('mytodo'
    )
    var newtodoitem=document.createElement('div')
      var todoname=document.createElement('li')
      todoname.innerHTML=taskname
      var deletebtn=document.createElement('i')
    deletebtn.classList.add('far')
    deletebtn.classList.add('fa-trash-alt')

   
    newtodoitem.appendChild(todoname)
    newtodoitem.appendChild(deletebtn)

    tododiv.appendChild(newtodoitem)
}
// document.getElementByI
var tododiv=document.getElementById('mytodo')
tododiv.addEventListener('click',deleitem)

function deleitem(e){
const element=e.target
if(element.classList[0]=='far')
{
    element.parentElement.remove()
}
}