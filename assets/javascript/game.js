//To do: fade in images

// Array of objects called characters that holds all characters
var characters= [
    {
        name: 'The Captain',
        health: 180,
        attack: 20,
        fullImageUrl: "assets/images/captain.png",
        faceImgUrl: "assets/images/captain-headshot.png",
        opponentAttackBack: 25
    },
    {
        name: 'The Helmswoman',
        health: 120,
        attack: 8,
        fullImageUrl: "assets/images/helmswoman.png",
        faceImgUrl: "assets/images/helmswoman-headshot.png",
        opponentAttackBack: 10
    },

    {
        name: 'The Quartermaster',
        health: 140,
        attack: 14,
        userFullImageUrl: "assets/images/quartermaster-left.png",
        fullImageUrl: "assets/images/quartermaster.png",
        faceImgUrl: "assets/images/quartermaster-headshot.png",
        opponentAttackBack: 15
    },

    {
        name: 'The First Mate',
        health: 160,
        attack: 20,
        fullImageUrl: "assets/images/firstmate.png",
        faceImgUrl: "assets/images/firstmate-headshot.png",
        opponentAttackBack: 20
    },

    {
        name: 'The Cook',
        health: 100,
        attack: 8,
        fullImageUrl: "assets/images/cook.png",
        faceImgUrl: "assets/images/cook-headshot.png",
        opponentAttackBack: 5
    },
]



// global variables
var userChar, opponentChar, user, opponent, userName, opponentName, userHealth, opponentHealth, userAttack, opponentAttackBack;

// After user character and opponent character are chosen then all other unchosen characters are hidden
// function displays the users name and health as well as the opponents name and health 
// attack button is shown on page
// jQuery methods used: is with selector empty, html, height, and show
function readyToAttack (){
    if($('#userPlayer').is(':empty') == false && $('#opponentPlayer').is(':empty') == false){
        $('.characters').hide();

        $('#userName').html("Your Character:</br>" +  userName);
        $('#userHealth').html(userHealth);

        $('.user').height('91%');
        user.height('83%');

        $('#opponentName').html("Mutineer:</br>" + opponentName);
        $('#opponentHealth').html(opponentHealth);

        $('.opponent').height('91%');
        opponent.height('83%');

        $('.attack').show();
    }
    
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
    
            user = $('<img>');
            user.attr('id' , 'userImage');

            if (userName === 'The Quartermaster'){
                user.attr('src', characters[userChar]["userFullImageUrl"]);
            }
            else{
                user.attr('src', characters[userChar]["fullImageUrl"]);
            }
    
            $('#userPlayer').append(user);
            
        }
        // chooses opponent character
        else if($('#opponentPlayer').is(':empty')){
            opponentChar = $(this).attr('id');;
            opponentName = characters[opponentChar]["name"];
            opponentHealth = characters[opponentChar]["health"];
            opponentAttackBack = characters[opponentChar]["opponentAttackBack"];

            opponent = $('<img>');
            opponent.attr('id' , 'opponentImage');
            
            opponent.attr('src', characters[opponentChar]["fullImageUrl"]);
            
            $('#opponentPlayer').append(opponent);
        } 

        $(this).hide();
        $('#choose').text('Enemies Available To Attack');


    }); 


    
    




});

