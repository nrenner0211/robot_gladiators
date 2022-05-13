var enemy1 = "Roborto";
var enemy2 = "Amy Android";
var enemy3 = "Robo Trumble";

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
//change playerMoney
var playerMoney = 20;
// change enemyHealth back reminder
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 15;
var enemyAttack = 12;

//---------------variables-----------------//

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy robot
//*LOSE* - Player robot's health is zero or less

window.alert("Welcome to Robot Gladiators!");
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

var fight = function(enemyName) {

    while(playerHealth > 0 && enemyHealth > 0) {

        if (promptFight === "fight" || promptFight === "FIGHT") {
            //Remove enemy health
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining."
            )
      
        if (enemyHealth <= 0) {
                window.alert(enemyNames[i] + " has died!");
                break;
            }   
        else {
                window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
            }
        
        //Remove player health when attacked
        if (enemyHealth > 0) {
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            )
      
            //Check player's health
            if (playerHealth <= 0) {
            window.alert(playerName + " has died!")
            }   
            else {
            window.alert(playerName + " still has " + playerHealth + " health left.")
            }
     
        } 
    }
        else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes, leave fight
        if (confirmSkip) {
            window.alert(playerName + "has decided to skip this fight. Goodbye!");

            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
        }
    
        //if no (false), ask question again by running fight() again.
        else fight();
        }   
        else {
        window.alert("You need to choose a valid option. Try again!");
        }
    }
}

//change enemy health reminder
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 15;
    fight(pickedEnemyName);   
}
    
