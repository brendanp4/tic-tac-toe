let mark = "x";

let xPos = [];
let oPos = [];

let initial = true;

$("#p1").append("<h3 id=p1Turn>Your turn</h3>");

function changeTurn(){
    $("#p1Turn").remove();
    if(mark == "x"){
        if(initial){
            $("#p1Turn").remove();
            initial = false;
        }
        mark = "o";
        $("#p2").append("<h3 id=p1Turn>Your turn</h3>");
        $("#p2Turn").remove();
    }
    else{
        mark = "x";
        $("#p1").append("<h3 id=p2Turn>Your turn</h3>");
        $("#p1Turn").remove();
    }
}

function checkX(a, b, c){
    if(xPos.includes(a) && xPos.includes(b) && xPos.includes(c)){
        return true;
    }
}

function checkO(a, b, c){
    if(oPos.includes(a) && oPos.includes(b) && oPos.includes(c)){
        return true;
    }
}

function checkAllX(){
    if(checkX(1, 2, 3)){
        console.log("winner!");
        return true;
    }
    else if(checkX(4, 5, 6)){
        console.log("winner!");
        return true;
    }
    else if(checkX(7, 8, 9)){
        console.log("winner!");
        return true;
    }
    else if(checkX(1, 4, 7)){
        console.log("winner!");
        return true;
    }
    else if(checkX(2, 5, 8)){
        console.log("winner!");
        return true;
    }
    else if(checkX(3, 6, 9)){
        console.log("winner!");
        return true;
    }
    else if(checkX(1, 5, 9)){
        console.log("winner!");
        return true;
    }
    else if(checkX(3, 5, 7)){
        console.log("winner!");
        return true;
    }
    else{
        return false;
    }
}

function checkAllO(){
    if(checkO(1, 2, 3)){
        console.log("winner!");
        return true;
    }
    else if(checkO(4, 5, 6)){
        console.log("winner!");
        return true;
    }
    else if(checkO(7, 8, 9)){
        console.log("winner!");
        return true;
    }
    else if(checkO(1, 4, 7)){
        console.log("winner!");
        return true;
    }
    else if(checkO(2, 5, 8)){
        console.log("winner!");
        return true;
    }
    else if(checkO(3, 6, 9)){
        console.log("winner!");
        return true;
    }
    else if(checkO(1, 5, 9)){
        console.log("winner!");
        return true;
    }
    else if(checkO(3, 5, 7)){
        console.log("winner!");
        return true;
    }
    else{
        return false;
    }
}

function endGame(){
    $(".game-cell").off();
    if(checkAllX()){
        $("#p1Turn").remove();
        $("#p1").append("<h3 id=p2Turn>Winner!</h3>");
    }
    else{
        $("#p2").append("<h3 id=p2Turn>Winner!</h3>");
    }
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
    if(checkAllX() || checkAllO()){
        endGame();
    }else{
        changeTurn();
    }   
});