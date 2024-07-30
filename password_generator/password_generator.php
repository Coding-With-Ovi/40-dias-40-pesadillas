<?php
header('Content-Type: application/json; charset=utf-8');

$string_pass = "";

if($_POST['lowerCaseCheck'])
{
	$string_pass .= "abcdefghijklmnopqrstuvwxyz";
}

if($_POST['upperCaseCheck'])
{
	$string_pass .= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

if($_POST['numbersCheck'])
{
	$string_pass .= "0123456789";
}

if($_POST['symbolCheck'])
{
	$string_pass .= "!;#$%&'()*+,-./:;<=>?@[]^_`{|}~";
}

$pass_max = $_POST['passMax'];

$password = "";

if(strlen($string_pass)==0)
{
	http_response_code(400);
	echo json_encode(["msg"=>"Los parrametros de la contraseña no son correctos"]);
	exit;
}

if(strlen($string_pass)<$pass_max && !$_POST['repeatCheck'])
{
	http_response_code(400);
	echo json_encode(["msg"=>"Los parrametros de la contraseña no son correctos"]);
	exit;
}

for ($i=0; $i < $pass_max; $i++) { 
	$pos = rand(0,strlen($string_pass)-1);
	$char = substr($string_pass, $pos, 1);
	$password .= $char;
	if(!$_POST['repeatCheck']){
		$string_pass = str_replace($char, "", $string_pass);
	}
}

echo json_encode(["password"=>$password]);