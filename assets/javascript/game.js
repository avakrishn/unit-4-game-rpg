//To do: fade in images (faces and full images), smooth transition of image appearance, flashing/ color change of HP when low, health bar, single vs multi (keys), image slider, words typed on page
//when win winnerimage slides to center and back and loser disappears

// Array of objects called characters that holds all characters
var characters= [
    {
        name: 'The Captain',
        health: 160,
        attack: 14,
        fullImageUrl: "assets/images/captain.png",
        faceImgUrl: "assets/images/captain-headshot.png",
        opponentAttackBack: 10
    },
    {
        name: 'The Helmswoman',
        health: 120,
        attack: 6,
        fullImageUrl: "assets/images/helmswoman.png",
        faceImgUrl: "assets/images/helmswoman-headshot.png",
        opponentAttackBack: 30
    },

    {
        name: 'The Quartermaster',
        health: 140,
        attack: 10,
        userFullImageUrl: "assets/images/quartermaster-left.png",
        fullImageUrl: "assets/images/quartermaster.png",
        faceImgUrl: "assets/images/quartermaster-headshot.png",
        opponentAttackBack: 20
    },

    {
        name: 'The First Mate',
        health: 150,
        attack: 8,
        fullImageUrl: "assets/images/firstmate.png",
        faceImgUrl: "assets/images/firstmate-headshot.png",
        opponentAttackBack: 25
    },

    {
        name: 'The Cook',
        health: 130,
        attack: 8,
        fullImageUrl: "assets/images/cook.png",
        faceImgUrl: "assets/images/cook-headshot.png",
        opponentAttackBack: 20
    },
]



// global variables
var userChar, opponentChar, user, opponent, userName, opponentName, userHealth, opponentHealth, userAttack, opponentAttackBack, originalAttack;

// After user character and opponent character are chosen then all other unchosen characters are hidden
// function displays the users name and health as well as the opponents name and health 
// attack button is shown on page
// jQuery methods used: is with selector empty, html, height, and show
function readyToAttack (){
    if($('#userPlayer').is(':empty') == false && $('#opponentPlayer').is(':empty') == false){
        $('.characters').hide();

        $('#userName').html("Your Character:</br>" +  userName).show();
        $('#userHealth').html(userHealth).show();

        $('.user').height('91%');
        user.height('80%');

        $('#opponentName').html("Mutineer:</br>" + opponentName).show();
        $('#opponentHealth').html(opponentHealth).show();

        $('.opponent').height('91%');
        opponent.height('80%');

        $('.attack').show();
    }
    
}

// when executed the oponnent attacks the user back
//jQuery methods used: prepend, html, show
function opponentAttack(){
    userHealth = userHealth - opponentAttackBack;
    var attackBack = "<p>" + opponentName + " attacked " + userName +  " dealing back " + opponentAttackBack + " damage </p> </br>" 
    $('#result').prepend(attackBack);
    $('#userHealth').html(userHealth);

    // Animate changes the position of the element (adding more space to the right of the element and thereby moving the position of the element to the left)
    //one way
    // opponent.animate({right: opponentAttackBack +"%"}, 'slow', 'linear');
    // opponent.animate({right: opponentAttackBack/2 + "%"}, 'slow', 'linear');

    //another way
    opponent.animate({right: "+="+opponentAttackBack +"%"}, 'slow', 'linear');
    opponent.animate({right: opponentAttackBack/2 + "%"}, 'slow', 'linear');

    //another way
    // opponent.animate({right: "+="+opponentAttackBack}, "slow", "linear");

    // yet another way
    // opponent.animate({right: "25%"}, "slow", "linear");
    // opponent.animate({right: "0%"}, "slow", "linear");

   $('.attack').show(); 
}


function reset(){
    $('#userName').empty();
    $('#userPlayer').empty();
    $('#userHP').empty();
    $('#opponentName').empty();
    $('#opponentPlayer').empty();
    $('#opponentHP').empty();
}

$(document).ready(function(){

   
    // On click of the .imageButton button element the button with its character is hidden on page
    // Text changes in h2 (#choose) from 'Choose Your Character' to 'Enemies Available to Attack'
    // Using on method with click event handler used in jQuery; an array of objects was used to get specific values using the specific keys
    // other jQuery methods used: .attr(), .append(), .hide()
    $('.imageButton').on('click', function(){
        // chooses user character 
        if($('#userPlayer').is(':empty') ) {
            userChar = $(this).attr('id');
            userName = characters[userChar]["name"];
            userHealth = characters[userChar]["health"];
            userAttack = characters[userChar]["attack"];
            originalAttack = userAttack;
    
            user = $('<img style="display: none;">');
            user.attr('id' , 'userImage');

            if (userName === 'The Quartermaster'){
                user.attr('src', characters[userChar]["userFullImageUrl"]);
            }
            else{
                user.attr('src', characters[userChar]["fullImageUrl"]);
            }
            
            // $('#userPlayer').append(user);

            // slideDown method will display the element with a sliding motion
            user.appendTo('#userPlayer').slideDown('slow', 'linear');
            
            
        }
        // chooses opponent character
        else if($('#opponentPlayer').is(':empty')){
            opponentChar = $(this).attr('id');;
            opponentName = characters[opponentChar]["name"];
            opponentHealth = characters[opponentChar]["health"];
            opponentAttackBack = characters[opponentChar]["opponentAttackBack"];

            opponent = $('<img style="display: none;">');
            opponent.attr('id' , 'opponentImage');
            
            opponent.attr('src', characters[opponentChar]["fullImageUrl"]);
            
            // $('#opponentPlayer').append(opponent);

            // slideDown method will display the element with a sliding motion
            opponent.appendTo('#opponentPlayer').slideDown('slow', 'linear');
        } 

        $(this).hide();
        $('#choose').text('Enemies Available To Attack');

        // The setTimeout() method calls the readyToAttack function after 2000 milliseconds or 2 seconds
        setTimeout(readyToAttack, 1000);
    }); 

    // user clicks on attack button to attack the opponent
    // after user attacks the opponent the userAttack points increases by the userAttack value
    //jQuery methods used hide, html, setTimeout
    $('.attack').on('click', function(){
        $('.attack').hide();
        $('#result').html("");

        // Animate changes the position of the element (adding more space to the left of the element and thereby moving the position of element to the right)
        //one way
        user.animate({left: userAttack +"%"}, 'slow', 'linear');
        user.animate({left: userAttack/2 + "%"}, 'slow', 'linear');

        //similar way
        // user.animate({left: userAttack +"%"}, 'slow', 'linear');
        // user.animate({left:  "0%"}, 'slow', 'linear');

        //another way
        // user.animate({left: "+="+userAttack}, "slow", "linear");

        // yet another way
        // user.animate({left: "25%"}, "slow", "linear");
        // user.animate({left: "0%"}, "slow", "linear");



        opponentHealth = opponentHealth - userAttack;
        $('#result').html("<p>" + userName + " attacked " + opponentName +  " dealing " + userAttack + " damage </p>").show();
        $('#opponentHealth').html(opponentHealth);
        userAttack = userAttack + originalAttack;
        setTimeout(opponentAttack, 1000);
    });
});

