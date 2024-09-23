# TIC TAC TOE
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

### Dificultad: Media :star::star::star::star::star:

TIC TAC TOE, o como se le conoce en España, **Tres en raya**, es uno de esos juego que todo el mundo lo ha jugado alguna vez en su vida. Cuando digo todo el mundo me refiero al planeta entero y no solo a la región peninsular.

Crear un juego de Tres en raya no ha sido una tarea fácil, bueno hacer un 1vs1 normal, es decir que jueguen dos personas reales, eso no tenia mucho misterio. El verdadero desafío era crear un algoritmo contra el cual una persona podría "competir". Es decir un 1vs1, pero contra la maquina.

El diseño de juego es bien sencillo una cuadricula de 3x3 donde los símbolos de X o O, se van alternado hasta que un jugar gane, o se llene toda la cuadricula. Antes de empezar había que elegir la modalidad de juego, si un 1 jugador (jugar contra la maquina), o dos jugadores.

![Frame 1](https://github.com/user-attachments/assets/f45dba08-c792-453a-a70a-0cc64bc5b530)
![Frame 2](https://github.com/user-attachments/assets/ee60bcdd-be56-40d7-9a0a-181bb5336f6b)

Quizás unas de cosas mas tediosas de este tipo de juego, es decir los que implican una cuadricula, es que tengas que verificar cada cuadricula y compararla con las demás para ver el resultado del juego, encima en este caso eso lo tienes que hacer siempre que se cambie el juego, es decir que cualquiera que marque una casilla con su símbolo. 

Adames para este juego había que mirar bien fila, columnas, diagonal principal, y diagonal segundaria. Asi que para facilitar las cosas creamos un array para cada tipo de situación, y al verificar las celdas en cada situación, en cuando se daba la coincidencia de tres simboles iguales, el juego presenta al ganador.

```javascript
let matrix = [[0,0,0],[0,0,0],[0,0,0]]; //Fila
let reversMatrix = [[0,0,0],[0,0,0],[0,0,0]]; //Columnas
let diagonal = [0,0,0]; //Diagonal principal
let reversDiagonal = [0,0,0]; //Diagonal segundaria

// Para verificar todas las celdas de una matriz usamos la función "every" de javascript
if(matrix[x].every((e)=>e==matrix[x][0]&&e!=0))
{
    winner.innerHTML = mark;
    curtain.classList.remove('hidden');
    return true;
}
```

Para saber mas detalles del codigo y su desarrollo

https://www.youtube.com/watch?v=oEfMwCs0-Sg



# [PROBAR AQUI](https://codingwithovi.onsistems.com/40-dias-40-pesadillas/tic-tac-toe/)







