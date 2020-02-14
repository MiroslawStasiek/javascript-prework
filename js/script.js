function playGame(playerInput){
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);
  let computerMove = getMoveName(randomNumber);
  /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/
  console.log('Gracz wpisał: ' + playerInput);
  let playerMove = getMoveName(playerInput);
  function clearMessages();
  function getMoveName(argMoveId){
    if(argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2){
    return 'papier';
  } else if(argMoveId == 3){
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id' + argMoveId + '.');
    return 'nieznany ruch';
    }
  }
    function displayResult(argComputerMove, argPlayerMove) {
      printMessage('Zagrałem ' + argComputerMove + ', a Ty '  + argPlayerMove);
      if (argPlayerMove == 'nieznany ruch') {
        return 'Niewłaściwy wybór! Wpisz 1, 2 albo 3!';
      } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        return 'Ty wygrywasz!';
      } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        return 'Przegrywasz!';
      } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        return 'Ty wygrywasz!';
      } else if (argComputerMove == 'papier' && argPlayerMove == "kamień") {
        return 'Przegrywasz!';
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        return 'Ty wygrywasz!';
      } else if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
        return 'Przegrywasz!';
      }
      if (argComputerMove == argPlayerMove) {
        return "Remis!";
      }
      console.log('moves:', argComputerMove, argPlayerMove);
  }

  let result = displayResult(computerMove, playerMove);
  printMessage(result);
}
document.getElementById('play-rock').addEventListener('click', function(){
  printMessage('Gracz wybrał Kamień');
});
document.getElementById('play-paper').addEventListener('click', function(){
  printMessage('Gracz wybrał papier');
});
document.getElementById('play-scissors').addEventListener('click', function(){
  printMessage('Gracz wybrał nożyce');
});