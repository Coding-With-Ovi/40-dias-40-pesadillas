# Generador de contraseñas

Una contraseña es la primera barrera que tenemos para proteger nuestros datos e información, ya sea en la red o en nuestro equipo local.

Una contraseña es básicamente una combinación alfanumérica, de mayúsculas y minúsculas, y a veces símbolos.

Cuanto mayor sea la combinación de elementos de una contraseña, y cuando mas grande sea mejor.

Es importante que en la contraseña sea una combinación aleatoria mas que palabras y/o números claves, tales como nuestro nombre o el de la mascota y alguna fecha de nacimientos.

Para una mayor seguridad en la red, se recomienda que se cambie la contraseña cada cierto tiempo, dependiendo de la importación de lo que queremos proteger, el tiempo de cambio de contraseña es mas corto.

Para recordar nuestra contraseña hay muchas herramientas, pero **NUNCA**, bajo ninguna circunstancia, guardes tus contraseñas en un cuaderno, o peor aun en un postit en tu escritorio.

Para hacer mas fácil la tarea de crear una contraseña hemos diseñado un pequeño formulario para generar una contraseña.

<img src="C:\Users\ovimax\Downloads\Generador de contraseñas.png" alt="Generador de contraseñas" style="zoom:70%;" />

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





