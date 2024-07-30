# Generador de contraseñas
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) ![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

### Dificultad: Media :star::star::star:

Una contraseña es la primera barrera que tenemos para proteger nuestros datos e información, ya sea en la red o en nuestro equipo local.

Una contraseña es básicamente una combinación alfanumérica, de mayúsculas y minúsculas, y a veces símbolos.

Cuanto mayor sea la combinación de elementos de una contraseña, y cuantos mas carateres, mejor.

Es importante que la contraseña sea una combinación aleatoria mas que palabras y/o números claves, tales como nuestro nombre o el de la mascota y alguna fecha de nacimientos.

Para una mayor seguridad en la red, se recomienda que se cambie la contraseña cada cierto tiempo, dependiendo de la importación de lo que queremos proteger, el tiempo de cambio de contraseña es mas corto.

Para recordar nuestra contraseña hay muchas herramientas, pero NUNCA, **NUNCA**,  bajo ninguna circunstancia, guardes tus contraseñas en un cuaderno, o peor aun en un postit en tu escritorio.

Para hacer mas fácil la tarea de crear una contraseña hemos diseñado un pequeño formulario para generar una contraseña.

<p align="center" width="100%"><img src="https://github.com/user-attachments/assets/9aca9698-9fb5-4abc-843b-15f7ef4629eb" alt="Diseño generador de contraseñas" width="40%"/></p>

Para generar la contraseña simulamos una llamada al servidor, donde un pequeño script de PHP genera nuestra contraseña

```php
<?php 

const PASS_MAX = 12; //Definimos el tamaño de la contraseña
$string_pass = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!;#$%&'()*+,-./:;<=>?@[]^_`{|}~";

$password = "";

for ($i=0; $i < PASS_MAX; $i++) { 
	$pos = rand(0,strlen($string_pass)-1);
	$char = substr($string_pass, $pos, 1);
	$password .= $char;
	$string_pass = str_replace($char, "", $string_pass); //Esta paso se comenta si queremos que se repita los carateres
}

echo $password;
```

En el diseño y el codigo anterior no tomamos en cuenta el echo de evitar caracteres que se pueden parecer **oO0|Il1**.

Otra cosa a tener en cuenta es que la variable _string_pass_ no aparece ", ya que la doble comilla sirve para definir las cadenas de texto en PHP.

Ahora bien con un poco de HTML, algo de CSS, un poco de Javascript (para llamar la sevidor), un mucho PHP tenemos un elegante generador de conraseñas.

# [PROBAR AQUI](https://codingwithovi.onsistems.com/40-dias-40-pesadillas/password-generator/)





