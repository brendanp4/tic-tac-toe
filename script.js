let mark = "x";

let xPos = [];
let oPos = [];


function changeTurn(){
    if(mark == "x"){
        mark = "o";
        $("#p1").append("<h3 id=p1Turn>Your turn</h3>");
        $("#p2Turn").remove();
    }
    else{
        mark = "x";
        $("#p2").append("<h3 id=p2Turn>Your turn</h3>");
        $("#p1Turn").remove();
    }
}

function checkOne(a, b, c){
    if(xPos.includes(a) && xPos.includes(b) && xPos.includes(c)){
        return true;
    }
}

function checkAll(){
    if(checkOne(1, 2, 3)){
        console.log("winner!");
        return true;
    }
    else if(checkOne(4, 5, 6)){
        console.log("winner!");
        return true;
    }
    else if(checkOne(7, 8, 9)){
        console.log("winner!");
        return true;
    }
    else if(checkOne(1, 4, 7)){
        console.log("winner!");
        return true;
    }
    else if(checkOne(2, 5, 8)){
        console.log("winner!");
        return true;
    }
    else if(checkOne(3, 6, 9)){
        console.log("winner!");
        return true;
    }
    else if(checkOne(1, 5, 9)){
        console.log("winner!");
        return true;
    }
    else if(checkOne(3, 5, 7)){
        console.log("winner!");
        return true;
    }
    else{
        return false;
    }
}

function endGame(){
    $(".game-cell").off();
}

$(".game-cell").click(function(){
    if(!$(this).find("#img").length){
        $(this).append("<img id=img src=img/" + mark + ".png>")
    }
    if(mark == "x"){
        xPos.push(parseInt($(this).attr('id')));
    }
    else{
        oPos.push(parseInt($(this).attr('id')));
    }
    console.log($(this).attr('id'));
    if(checkAll()){
        endGame();
    }else{
        changeTurn();
    }   
});