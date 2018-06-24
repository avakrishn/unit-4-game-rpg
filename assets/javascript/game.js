var characters= [
    {
        name: 'captain',
        health: 180,
        attack: 20,
        fullImageUrl: "assets/images/captain.png",
        faceImgUrl: "assets/images/captain-headshot.png",
        enemyAttackBack: 25
    },
    {
        name: 'helmswoman',
        health: 120,
        attack: 8,
        fullImageUrl: "assets/images/helmswoman.png",
        aceImgUrl: "assets/images/helmswoman-headshot.png",
        enemyAttackBack: 10
    },

    {
        name: 'quartermaster',
        health: 140,
        attack: 14,
        fullImageUrl: "assets/images/quartermaster-right.png",
        aceImgUrl: "assets/images/quartermaster-headshot.png",
        enemyAttackBack: 15
    },

    {
        name: 'firstmate',
        health: 160,
        attack: 20,
        fullImageUrl: "assets/images/firstmate.png",
        faceImgUrl: "assets/images/firstmate-headshot.png",
        enemyAttackBack: 20
    },

    {
        name: 'cook',
        health: 100,
        attack: 8,
        fullImageUrl: "assets/images/cook.png",
        faceImgUrl: "assets/images/cook-headshot.png",
        enemyAttackBack: 5
    },
]


var character, user;

$(document).ready(function(){
   
    // on click of the .imageButton button element the button with its character is hidden on page
    // text changes in h2 from 'Choose Your Character' to 'Enemies Available to Attack'
    $('.imageButton').on('click', function(){
        character = $(this).attr('id');
        $(this).hide();
        $('#choose').text('Enemies Available To Attack');

        if( $('#userPlayer').is(':empty') ) {
            user = $('<img>');
            user.attr('id' , 'playerImage');
            user.attr('src', "assets/images/"+character+".png");
            $('#userPlayer').append(user);

        }

    }); 

    
    




});

