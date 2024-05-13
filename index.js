//document.getElementById("count").innerText=5
let count=0;
//onclick event listener and the function is written in quotes need to be triggered on clicking
function increment(){
   
    count=count+1;
    document.getElementById("count").innerText=count
    console.log(count);
}
function decrement(){
   
    if(count!=0){
        count=count-1;
        document.getElementById("count").innerText=count
        console.log(count);
    }
}
//display the count
let countEl =document.getElementById("count");//gets the html element by id .innerText  modify the content in it