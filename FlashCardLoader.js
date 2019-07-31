var flashCardArray;

var loadCard = function(){
    for (var card in flashCardArray){
        console.log("Card Question:"  + flashCardArray[card].FrontText + " Card Answer: " + flashCardArray[card].BackText);
    }
    
};

window.onload = function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "AssignmentJSON.txt", false);  // synchronous request
    xhr.send(null);
    alert(JSON.parse(xhr.response));
    
    flashCardArray = JSON.parse(xhr.response);

    document.getElementById("view_first_question").onclick = loadCard;
};
