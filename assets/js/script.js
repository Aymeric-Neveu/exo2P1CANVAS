var c = document.getElementById("monCanvas");
 var ctx = c.getContext("2d");
 // base maison
 ctx.fillStyle="lightblue";
 ctx.fillRect(50,50,200,200);
 // fenetre 1
 ctx.fillStyle="grey";
 ctx.fillRect(80,90,30,30);
 // fenetre 2
 ctx.fillStyle="grey";
 ctx.fillRect(180,90,30,30);
 // porte
 ctx.fillStyle="grey";
 ctx.fillRect(125,170,50,80);
 // toit
 ctx.moveTo(50,50);
 ctx.lineTo(250,50);
 ctx.lineTo(150,2);
 ctx.fillStyle="maroon";
 ctx.fill();
