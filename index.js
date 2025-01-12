
function add1(){
    let board=document.getElementById("score1").textContent;
    let val=parseInt(board)
    val+=1
    document.getElementById("score1").textContent=val
    currentwinner()
}
function add2(){
    let board=document.getElementById("score1").textContent;
    let val=parseInt(board)
    val+=2
    document.getElementById("score1").textContent=val  
    currentwinner()
}
function add3(){
    let board=document.getElementById("score1").textContent;
    let val=parseInt(board)
    val+=3
    document.getElementById("score1").textContent=val
    currentwinner()
}
function addone(){
    let board=document.getElementById("score2").textContent;
    let val=parseInt(board)
    val+=1
    document.getElementById("score2").textContent=val
    currentwinner()
}
function addtwo(){
    let board=document.getElementById("score2").textContent;
    let val=parseInt(board)
    val+=2
    document.getElementById("score2").textContent=val
    currentwinner()
}
function addthree(){
    let board=document.getElementById("score2").textContent;
    let val=parseInt(board)
    val+=3
    document.getElementById("score2").textContent=val
    currentwinner()
}
function reset(){
    document.getElementById("score1").textContent=0
    document.getElementById("score2").textContent=0
    document.getElementById("score1").style.color="#F94F6D"
    document.getElementById("score2").style.color="#F94F6D"
    document.getElementById("win").textContent=""
}
function currentwinner(){
    let t1_score=document.getElementById("score1").textContent
    console.log(t1_score)
    let t2_score=document.getElementById("score2").textContent
    console.log(t2_score)
    if(parseInt(t1_score)>parseInt(t2_score)){
        document.getElementById("score1").style.color="#F7AB3A"
        document.getElementById("score2").style.color="#F94F6D"
    }
    else if(parseInt(t1_score)<parseInt(t2_score)){
        document.getElementById("score2").style.color="#F7AB3A"
        document.getElementById("score1").style.color="#F94F6D"
    }
    else{
        document.getElementById("score1").style.color="#F94F6D"
        document.getElementById("score2").style.color="#F94F6D"
    }
}
function result(){
    let t1_score=document.getElementById("score1").textContent
    let t2_score=document.getElementById("score2").textContent
    if(parseInt(t1_score)>parseInt(t2_score)){
        document.getElementById("win").textContent="Team1 won"
    }
    else if(parseInt(t1_score)<parseInt(t2_score)){
        document.getElementById("win").textContent="Team2 won"
    }
    else{
        document.getElementById("win").textContent="Match drawn"
    }

}