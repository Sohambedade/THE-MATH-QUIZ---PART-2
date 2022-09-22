functionddUser() {
    player1_name = document.getElementById("player_1_name_input").Value;
    player2_name = document.getElementById("player_2_name_input").Value;


localStorage.setItem("player1_name", player1_name);
localStorage.setItem("player2_name", player2_name);

Window.location = "game_pagehtml";
}
