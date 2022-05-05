var canvas = document.getElementById("gamezone");
var context = canvas.getContext("2d");

character = {x:280, y:570}
enemy1 = {x:0, y:60}
enemy2 = {x:600, y:140}
enemy3 = {x:0, y:220}
enemy4 = {x:600, y:300}
enemy5 = {x:0, y:380}
enemy6 = {x:600, y:460}
home = {x:0, y:0}

setInterval(action_character,50);
setInterval(action_enemy1,50);
setInterval(action_enemy2,50);
setInterval(action_enemy3,50);
setInterval(action_enemy4,50);
setInterval(action_enemy5,50);
setInterval(action_enemy6,50);
setInterval(position_home,50);

function action_character ()
{ 
    context.clearRect(0,0,600,600);
    context.fillStyle='green';
    context.fillRect(character.x,character.y,25,25);
}
function action_enemy1 ()
{ 
    context.fillStyle='red';
    context.fillRect(enemy1.x,enemy1.y,150,25);
    enemy1.x += 70 ;
    if ( enemy1.x  > 600)
       enemy1.x = -100;
    if (character.x <= enemy1.x + 150 && character.y <= enemy1.y + 25 && character.x + 25 >= enemy1.x && character.y + 25 >= enemy1.y )
       character = {x:280, y:570};    
} 
function action_enemy2 ()
{ 
    context.fillStyle='red';
    context.fillRect(enemy2.x,enemy2.y,150,25);
    enemy2.x -= 60 ;
    if ( enemy2.x + 100 < 0)
       enemy2.x = 600;
    if (character.x <= enemy2.x + 150 && character.y <= enemy2.y + 25 && character.x + 25 >= enemy2.x && character.y + 25 >= enemy2.y )
       character = {x:280, y:570}; 
} 
function action_enemy3 ()
{ 
    context.fillStyle='red';
    context.fillRect(enemy3.x,enemy3.y,150,25);
    enemy3.x += 50 ;
    if ( enemy3.x  > 600)
       enemy3.x = -100;
    if (character.x <= enemy3.x + 150 && character.y <= enemy3.y + 25 && character.x + 25 >= enemy3.x && character.y + 25 >= enemy3.y ) { 
      alert("YOU LOSE");
      character = {x:280, y:570}; 
    }
}  
function action_enemy4 ()
{ 
    context.fillStyle='red';
    context.fillRect(enemy4.x,enemy4.y,150,25);
    enemy4.x -= 40 ;
    if ( enemy4.x + 100 < 0)
       enemy4.x = 600;
    if (character.x <= enemy4.x + 150 && character.y <= enemy4.y + 25 && character.x + 25 >= enemy4.x && character.y + 25 >= enemy4.y ) { 
      alert("YOU LOSE");
      character = {x:280, y:570}; 
    }
} 
function action_enemy5 ()
{ 
    context.fillStyle='red';
    context.fillRect(enemy5.x,enemy5.y,150,25);
    enemy5.x += 30 ;
    if ( enemy5.x  > 600)
       enemy5.x = -100;
    if (character.x <= enemy5.x + 150 && character.y <= enemy5.y + 25 && character.x + 25 >= enemy5.x && character.y + 25 >= enemy5.y ) { 
      alert("YOU LOSE");
      character = {x:280, y:570};
    }
} 
function action_enemy6 ()
{ 
    context.fillStyle='red';
    context.fillRect(enemy6.x,enemy6.y,150,25);
    enemy6.x -= 20 ;
    if ( enemy6.x + 100 < 0)
       enemy6.x = 600;
    if (character.x <= enemy6.x + 150 && character.y <= enemy6.y + 25 && character.x + 25 >= enemy6.x && character.y + 25 >= enemy6.y ) { 
      alert("YOU LOSE");
      character = {x:280, y:570};
    }
} 
function position_home ()
{ 
    context.fillStyle = 'yellow';
    context.fillRect(home.x, home.y,1000,10)
}
 document.addEventListener("keydown", key => { 
    switch(key.keyCode)
    { 
        case 37:
            if (character.x > 0)
               character.x -= 20;
            break;
        case 38:
            if (character.y > 10)
               character.y -= 20;
            else 
               alert("YOU WON");
            break;
        case 39:
            if (character.x + 25 < 600)
               character.x += 20;
            break;
        case 40:
            if (character.y + 25 < 580)
               character.y += 20;
            break;
    }
});