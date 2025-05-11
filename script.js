let boxes= document.querySelectorAll(".box");
const restart= document.getElementById("restart")
let turn=true
userwinnerpattern=[
    [0,1,2]
    [0,3,6]
    [0,4,8]
    [1,4,7]
    [2,5,8]
    [2,4,6]
    [3,4,5]
    [6,7,8]
];
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    if(turn){
        box.innerText="X"
        box.style.backgroundcolor='#7fffd4'
        turn=false
    }else{
        box.innerText="o"
        box.style.backgroundcolor='#ff83f1'
        turn =true
    }
    box.disabled=true
    checkwinner();
    });
});
const checkwinner= () =>{
    for(let pattern of winner){
        let prem1= boxes[pattern[0]].innerText;
        let prem2= boxes[pattern[1]].innerText;
        let prem3=boxes[pattern[2]].innerText;


     if(prem1 !="" && prem2 !="" && prem3 !="") {
            if(prem1 === prem2 && prem2 === prem3){
                document.getElementById("msg").innerHTML='congratulation! <span style="color:red;">${prem1}</span>player wins'

                boxes.forEach((box)=>{
                    box.disabled=true
                    if(box.innerHTML ===""){
                        box.style.backgroundcolor="#51057d"

                    }
                })
                return
            }
        }
    }
}

restart.addEventListener("click",()=>{
    boxes.forEach(box=>{
        box.innerText=""
        box.disabled = false
        box.style.backgroundcolor="#9a05f0"

    })
    turn=true
    document.getElementById("msg").innerHTML="Let's play The game"
})