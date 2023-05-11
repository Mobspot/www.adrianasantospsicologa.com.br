<?php
header('Content-Type: text/html; charset=utf-8 Location: /index.html');

$nome = $_GET['nome'];
$email = $_GET['email'];
$whatsapp = $_GET['whatsapp'];
$mensagem = $_GET['mensagem'];

if ($nome == "teste") {
	$to = "sidney.miranda2013@gmail.com";
} else {
	$to = "psic_adrianasantos@outlook.com";
}

$subject = "Contato formulário site";
		
$body = "Nome: ".$nome. "\r\n".
		"Email: ".$email. "\r\n".
		"Whatsapp: ".$whatsapp. "\r\n".
		"Mensagem: ".$mensagem;

$header = "From:contato@adrianasantospsicologa.com.br"."\r\n".
		"Reply-To:".$email."\r\n".
		"X=Mailer:PHP/".phpversion();
				
mail($to, $subject, $body, $header);
?>
















