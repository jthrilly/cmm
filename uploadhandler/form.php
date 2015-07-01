<?php
 header("Access-Control-Allow-Origin: *");
    $server = "127.0.0.1";
    $username = "cmm";
    $password = "F7o-f6M-7BE-Srx";
    $database = "cmm";

    $con = mysql_connect($server, $username, $password) or die ("Could not connect: " . mysql_error());
    mysql_select_db($database, $con);

    $uuid = mysql_real_escape_string($_POST["uuid"]);
    $userName = mysql_real_escape_string($_POST["inputUserName"]);
    $userEmail = mysql_real_escape_string($_POST["inputUserEmail"]);
    $targetName = mysql_real_escape_string($_POST["inputTargetName"]);
    $targetEmail = mysql_real_escape_string($_POST["inputTargetEmail"]);
    $targetMessage = mysql_real_escape_string($_POST["inputTargetMessage"]);

    $sql = "INSERT INTO uploads (audio, userName, userEmail, targetName, targetEmail, targetMessage) ";
    $sql .= "VALUES ('$uuid','$userName','$userEmail','$targetName','$targetEmail','$targetMessage')";

    if (!mysql_query($sql, $con)) {
        http_response_code(500);
        die('Error: ' . mysql_error());
    } else {
        http_response_code(200);
        echo "Comment added.";

        require_once "Mail.php";

        $from_addr = "Change My Mind <changemymind@thisisunfinished.com>";
        $to = $targetName." <".$targetEmail.">";
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

    }
    mysql_close($con);
    echo '<pre>';
    print_r($_POST);

?>
