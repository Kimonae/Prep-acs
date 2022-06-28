const player = document.getElementById('player');
 const moveSize = 24;
  var playerWalk = 0;
   document.addEventListener('keydown', function(event) { 
       if (event.code == 'ArrowUp') { 
        playerWalk = playerWalk + 1;
        // Votre code ici

       changeBackground("url(img/back.png)");
        player.style.top = (player.offsetTop - moveSize) + "px";
     } else if (event.code == 'ArrowRight') 
     { playerWalk = playerWalk + 1;
        
       changeBackground("url(img/right.png)");
         // Votre code ici 
         player.style.left = (player.offsetLeft + moveSize) + "px";
         } else if (event.code == 'ArrowDown')
          { playerWalk = playerWalk + 1;
             // Votre code ici 
             
       changeBackground("url(img/face.png)");
             player.style.top = (player.offsetTop + moveSize) + "px";
             } else if (event.code == 'ArrowLeft') { playerWalk = playerWalk + 1;
                 // Votre code ici
        
       changeBackground("url(img/left.png)")

                 player.style.left = (player.offsetLeft - moveSize) + "px";


                };
                 

               
            });

            function changeBackground(url) {
            
                player.style.backgroundImage = url; }



/*document.addEventListener('keyup', function(event) { 
    if (event.code == 'ArrowUp') { 
     playerWalk = playerWalk + 1;

    changeBackground("url(img/6.png)");

     player.style.top = (player.offsetTop - moveSize) + "px";  }};*/
