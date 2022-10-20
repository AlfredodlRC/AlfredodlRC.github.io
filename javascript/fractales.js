/*
   -------------------------------
  |  variables para los calculos  |
   -------------------------------
*/
let xmin;
let xmax;
let ymin;
let ymax;
let puntos_x;
let puntos_y;
let mapa_calculado = [];

let colores = [
"#000040","#000050","#000060","#000070","#000080","#000090","#0000A0","#0000B0","#0000C0","#0000D0",
"#004000","#005000","#006000","#007000","#008000","#009000","#00A000","#00B000","#00C000","#00D000",
"#400000","#500000","#600000","#700000","#800000","#900000","#A00000","#B00000","#C00000","#D00000",
"#00F040","#00F050","#00F060","#00F070","#00F080","#00F090","#00F0A0","#00F0B0","#00F0C0","#00F0D0",
"#0040F0","#0050F0","#0060F0","#0070F0","#0080F0","#0090F0","#00A0F0","#00B0F0","#00C0F0","#00D0F0",
"#40F000","#50F000","#60F000","#70F000","#80F000","#90F000","#A0F000","#B0F000","#C0F000","#D0F000",
];

let valores_iniciales = [];

window.addEventListener('load', (event) => {
  dibujar_mandel();
});

function dibujar_mandel() {
  var canvas = document.getElementById("lienzo");
  var ctx = canvas.getContext("2d");
  xmin = -2;
  xmax = 1;
  ymin = -1;
  ymax = 1;
  puntos_x = parseFloat(getComputedStyle(canvas).width)/3;
  puntos_y = parseFloat(getComputedStyle(canvas).height)/3;

  var image;
  var data;

        for(var x=0;x<puntos_x;x++)
        {
                for(var y=0;y<puntos_y;y++)
                {
                        var i=0;
                        var cx=xmin+x/(puntos_x/(xmax-xmin));
                        var cy=ymin+y/(puntos_y/(ymax-ymin));
                        var zx=0;
                        var zy=0;                        
 
                        do
                        {
                                var xt=zx*zy;
                                zx=zx*zx-zy*zy+cx;
                                zy=2*xt+cy;
                                i++;
                        }
                        while(i<255&&(zx*zx+zy*zy)<4);

                        image = ctx.createImageData(1, 1); // pixel image
                        data = image.data;

 
                        //ctx.beginPath();
                        //ctx.rect(x, y, 1, 1);
                        if (i == 255) {
                          //ctx.fillStyle ="#000";
                        data[0] = 0;
                        data[1] = 0;
                        data[2] = 0;
                        data[3] = 255;
                        } else {
                          //ctx.fillStyle =colores[ i % colores.length];
                        data[0] = 255;
                        data[1] = 255;
                        data[2] = 255;
                        data[3] = 255;
                        }
                        ctx.putImageData(image, x, y);

                        //ctx.fill();
                }
        }
  //ctx.beginPath();
  //ctx.rect(0, 0, 256, 127);
  //ctx.stroke();

}












