<?php
require_once "Mail.php";

$from_addr = "Change My Mind <changemymind@thisisunfinished.com>";
$to = "Joshua Melville <joshmelville@gmail.com>";
$subject =  "Hello!";
$body = "Dear Team, here is my message text.";

$headers = array ("From" => $from_addr,
                  "To" => $to,
                  "Subject" => $subject);
$smtp = Mail::factory("smtp", array ('host' => "smtp.webfaction.com",
                                     'auth' => true,
                                     'username' => "thisisunfinished_cmm",
                                     'password' => "xRC-7Jt-uP9-SUM"));

$mail = $smtp->send($to, $headers, $body);
?>
