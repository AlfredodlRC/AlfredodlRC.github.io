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

window.addEventListener('load', function() {});

function hacer_mapa_mandel(iteracciones) {
  let x,y;
  let inc_x,inc_y;  
  let i;
  let xx,yy,xxx,yyy;
  let c_x,c_y;
  let contador_x,contador_y;
  let continuar;

  let fila = [];
  let mapa = [];

  inc_x = (xmax - xmin) / puntos_x;
  inc_y = (ymax - ymin) / puntos_y;


  y = ymin;
  for(contador_y = 0 ; contador_y < puntos_y ; contador_y++) {
    x = xmin;
    fila = [];
    for(contador_x = 0 ; contador_x < puntos_x ; contador_x++) {
      c_x = x;
      c_y = y;
      xxx = 0;
      yyy = 0;
      i = 0;
      continuar = true;
      while (continuar == true) {
        xx = xxx * xxx - yyy * yyy;
        yy = 2 * xxx * yyy;
        xxx = xx + c_x;
        yyy = yy + c_y;
        i +=1;
        if (i >= iteracciones) { continuar = false; }
        if ((xxx * xxx + yyy * yyy) > 4) { continuar = false; }
      }
      fila.push(i);
      x += inc_x;
    }
    y += inc_y;
    mapa.push(fila);
  }

  return mapa;
}









