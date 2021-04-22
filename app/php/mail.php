<?php
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    try {
        $to_email = 'svetlanabakanova5@gmail.com';
        $subject = 'Testing mail';
        $message = 'MAil ' . $tel;
        $headers = 'From: me';
        mail($to_email,$subject,$message,$headers,$tel);
        echo "$backdrop";
   } catch (\Throwable $th) {
       throw $th;
   }
?>