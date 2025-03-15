# rock-paper-scissors
My first TOP JavaScript project

9/25/22:
  I returned to this project a few weeks ago. The objective was to create a responsive UI. Instead of playing
  the game in prompt and alert boxes, it would all be on the page layed out in front of the user.

  My first task was to create the HTML structure: title, start button, score board, the RPS buttons, and a few 
  other divs that would display what the result of the round and what the computer had selected.

  The next thing I did was add the basic layout and styling in CSS. Nothing too extravagant, most the work would be 
  done in JavaScript.

  Once I started with the JavaScript file I started deleting anything that had to do with prompts or alerts. I ended up 
  deleting the entire playRound() function. I instead make click events for the RPS buttons and in those events I wrote
  functions for each of the buttons with all possible outcomes with if, else statements. Ie: if the player clicked
  rock and the computer chose scissors, the player won. If the comp chose paper, the computer won, else it was a tie.

  I changed the display for the RPS buttons to none so they would not appear until the player clicked start.  

 After that was done I wrote the checkWinner() function that checked to see if either the player or computer was at 5
 points, then stops the game and declares a winner. Then added it to the click events in each if else statement.

 When I refactored the game() function I deleted everything and started over. I wanted the start button to go away after
 it had been clicked so I used DOM manipulation to change the style to none and then changed the RPS buttons to a style of block. Then used DOM manipulation to clear the results from the previous game if the player decided to play more then one round.

 My endGame() function sets the display for the RPS buttons, and the comp-choice div to none and the start button to appear
 when it is called in the checkWinner() function. 

 As of now this is a complete and working, interactive game of rock paper scissors you can play in your browser. I may come back to it again later and see if I can make it even better.


8/17/22:
  The conditions to finishing this project are to write a program in JavaScript that will play a game of rock paper scissors with the computer. The computer needs to randomly pick one of the three options, have the player choose then compare the choices together and decide a winner. The program needs to keep score and declare a winner after either the player or computer reaches five points.

  To have the computer randomly choose I created an array with the three choices, then made a function that would return a selection using [Math.floor(Math.random() * choices.length)]. Then I created two variables, one called playerScore and another was computerScore.
I then created another function called playRound() that prompted the player to pick a choice and call the computer's choice. Then I went through the possible outcomes (if its a tie, if player chooses rock and computer chooses paper, ect.). Depending on who won that round either playerScore or computerScore would increment. This function made it so the player's input would be case insensitive (using playerSelection.toLowerCase()), and also accounted for the possibility if the player misspelled the choice.

  Next, I created a function called game(). It starts off using a while loop with the condition being if the playerScore or computerScore is less then five it will continue to call the function playRound(). Under it there is an if-else statement stating that if the player or computer score is equal to five then it will return an alert saying you win or you lose.
  
  My hope is to return to this project later and stylize it more with HTML/CSS and make it more interactive.
