

var birthDate = document.querySelector("#birth-date");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#button-check");
var resultDiv = document.querySelector("#div-result");
var resultp = document.querySelector("#id-result-p");

checkButton.addEventListener("click", function onCheckClicked(){

    var date = birthDate.value;
    var number = luckyNumber.value;
    clearErrorMessage();
    if(number<0){
        var msg = "please Enter valid lucky number";
        setErrorMessage(msg);
    }else{
        checkLuckyNumber(date,number);
    }


})


function checkLuckyNumber(date,number){

    var sumOfdate = getSumOfDigitsOfDate(date);
    var intNumber = parseInt(number);

    if((intNumber-sumOfdate)==0){
        setErrorMessage("Your birthday is lucky number");
    }else{
        setErrorMessage("Oops!!Your birthday is not a lucky number!");
    }

}


function getSumOfDigitsOfDate(date){

    date = date.replaceAll("-","");
    console.log(date);
    var dateArr = date.split("");
    console.log(dateArr);

    var i=0;
    var sum = 0;
    while(i<dateArr.length){
        sum = sum + parseInt(dateArr[i]);
        i++;
    }
    console.log(sum)
    
    return(sum);
}

function clearErrorMessage(){
    resultp.style = "block";
    resultp.innerText = "";
}

function setErrorMessage(errorMessage){
    resultp.style = "block";
    resultp.innerText = errorMessage;
}