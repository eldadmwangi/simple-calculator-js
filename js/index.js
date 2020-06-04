function calc(){

    let inputOne=parseInt($("#value1").val());
    let inputTwo=parseInt($("#value2").val());
    let operatorr= $("#operator").val()
    let calculate;

    if (operatorr=="add"){
        calculate= inputOne + inputTwo;
    } else if (operatorr=="subtract"){
        calculate= inputOne-inputTwo;
    } else if( operatorr=="multiply"){
        calculate=inputOne*inputTwo;
    } else if (operatorr=="divide"){
        calculate=inputOne/inputTwo;
    }
    document.getElementById("result").innerHTML=calculate
} 

$(document).ready(function() {
    $("h1").click(function() {
      alert("This is a header.");
    });
})

$(document).ready(function(){
$("#para").click(function(){
    alert("this is a calculator");
})
})


// also use document.querySelector with a #
        



// let input1=parseInt($("#value1").val());
// let input2=parseInt($("value2").val());
// let add=$("#add").val();
// let subtract=$("#subtract").val();
// let multiply=$("#multiply").val();
// let divide=$("#divide").val();



// let addition=function(input1,input2){
//     return input1+input2;
// };

// let subtraction=function(input1,input2){
//     return input1-input2;
// };
 
// let multipliction= function(input1,input2){
//     return input1 * input2;
// }

// let division=function(input1,input2){
//     return input1 / input2;
// }



// $(document).ready(function(){
// $("form#my-form").submit(function (event){
//     event.preventDefault();
//     let input1=parseInt($("#value1").val());
//     let input2=parseInt($("value2").val());
//      alert(add(input1,input2));
// });
// })








