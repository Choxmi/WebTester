<?php
$headers = 'From: <gwcsathsara@gmail.com>' . "\r\n";
$headers .= 'Cc: gwcsathsara@gmail.com' . "\r\n";

$msg = "Subject: ".$_POST['subject']."\n"."Message: ".$_POST['comment']."\n"."Name: ".$_POST['name']."\n"."Email: ".$_POST['email']."\n"."Contact: ".$_POST['contact'];

$msg = wordwrap($msg,70);

mail("gwcsathsara@gmail.com","Feedback",$msg,$headers);

echo "Mailed ".$_POST['Message'];

?>