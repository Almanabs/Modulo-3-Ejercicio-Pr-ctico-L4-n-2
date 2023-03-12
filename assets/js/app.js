window.alert("para una funcion cuadratica, ingrese valor para a, b y c.");

var coefa=parseFloat(prompt("coeficiente a: "));
var coefb=parseFloat(prompt("coeficiente b: "));
var coefc=parseFloat(prompt("coeficiente c: "));

let resultado = disc(coefa,coefb, coefc);

function disc(a, b, c){
    discriminante=Math.pow(b,2) -4*a*c;
    if(discriminante<0){ 
        document.write("no hay soluciones en el conjunto de los numeros reales para la funcion cuadratica con los factores  que acabas de ingresar.");
    }else if (discriminante==0){ 
        solucion=-b/(2*a);
        document.write("la solucion es unica  y es igual a :"+ solucion);
    }else{ 
        solucion1=(-b+Math.sqrt(discriminante))/(2*a)
        solucion2=(-b+Math.sqrt(discriminante))/(2*a)
        document.write("dos soluciones: " + solucion1 + "y" +solucion2);
    }
}