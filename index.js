

const Add=()=>{
    
    let input=document.getElementById("text1");
    let todolsit=document.getElementById('Todo-container');

    todolsit.innerHTML=todolsit.innerHTML+`<div>
    <span>${input.value}</span><button class="del">delete</button>
    </div>`
    let alltask=document.querySelectorAll('.del')
    for(i=0;i<alltask.length;i++){
        alltask[i].onclick=function(){
            this.parentNode.remove()
        }
    }
    input.value="";
    

}


