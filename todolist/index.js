const Add=()=>{

    let input=document.getElementById('text1')
    let todolist=document.getElementById('Todo-container')

    todolist.innerHTML=todolist.innerHTML+`<div><span>${input.value}</span>
    <button class="dele">delete</button></div>`

    let alltask=document.querySelectorAll('.dele')
    for(i=0;i<alltask.length;i++){
        alltask[i].onclick=function(){
            this.parentNode.remove()
        }
    }
    input.value=""

}