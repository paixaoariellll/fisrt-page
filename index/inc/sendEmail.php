﻿<?php

$siteOwnersEmail = 'paixaoariellll@gmail.com';

if($_POST) {

   $name = trim(stripslashes($_POST['contactName']));
   $email = trim(stripslashes($_POST['contactEmail'])); 

   $contact_message = trim(stripslashes($_POST['contactMessage']));
   $data_envio = date('d/m/Y');
   $hora_envio = date('H:i:s');

   // Check Name
	if (strlen($name) < 2) {
		$error['name'] = "Por favor, digite seu nome. ";
	}
	// Check Email
	if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {
		$error['email'] = "Exemplo: nome@mail.com";
	}
	// Check Message
	if (strlen($contact_message) < 15) {
		$error['message'] = "Por favor, digite sua mensagem. Ela deve conter pelo menos 15 caracteres.";
	}


	$arquivo = "
    	<html>
    	  <p><b>Nome: </b>$nome</p>
      	  <p><b>E-mail: </b>$email</p>
     	  <p><b>Mensagem: </b>$mensagem</p>
     	  <p>Este e-mail foi enviado em <b>$data_envio</b> às <b>$hora_envio</b></p>
  		</html>
  	";
   // Set Message
    $message .= "Email from: " . $name . "<br />";
	$message .= "Email address: " . $email . "<br />";
    $message .= "Message: <br />";
    $message .= $contact_message;
    $message .= "<br /> ----- <br /> Esse e-mail foi enviado para você de: <br />";

   // Set From: header
   $from =  $name . " <" . $email . ">";

   // Email Headers
	$headers = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $email . "\r\n";
 	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


   if (!$error) {

      ini_set("sendmail_from", $siteOwnersEmail); // for windows server
      $mail = mail($siteOwnersEmail, $message, $headers);

		if ($mail) { echo "OK"; }
      else { echo "Aconteceu algo de errado. Por favor, tente novamente, ou entre em contato diretamente pelos icones abaixo."; }
		
	} # end if - no validation error

	else {

		$response = (isset($error['name'])) ? $error['name'] . "<br /> \n" : null;
		$response .= (isset($error['email'])) ? $error['email'] . "<br /> \n" : null;
		$response .= (isset($error['message'])) ? $error['message'] . "<br />" : null;
		
		echo $response;

	} # end if - there was a validation error

}
?>