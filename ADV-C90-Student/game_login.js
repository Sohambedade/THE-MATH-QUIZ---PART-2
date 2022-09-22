player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_socre = 0;
player2_socre = 0;

document.getElementsById("player1_name").innerHTML = player1_name + " : ";
document.getElementsById("player2_name").innerHTML = player2_name + " : ";

document.getElementsById("player1_name").innerHTML = player1_socre;
document.getElementsById("player2_name").innerHTML = player2_socre;

document.getElementsById("player1_Question").innerHTML = "Question turn - " + player1_name
document.getElementsById("player2_Answer").innerHTML = "Answer turn - " + player2_nam
function  send(){
    get_word = document.getElementById("word").value;
    word = get_word.tolowerCase();
    console.log("word in lowerCase = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    lenght_divied_2 = math.floor(word.lenght/2);
    charAt2 = word.charAt(lenght_divied_2);
    console.log(charAt2);

    lenght_minus_1 = word.lenght - 1;
    charAt3 = 
}