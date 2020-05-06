<?php
    if(isset($_POST['submit'])) {
        include_once('db.inc.php');
        $vardas = mysqli_real_escape_string($mysqli, $_POST['vardas']);
        $email = mysqli_real_escape_string ($mysqli, $_POST['email']);
        $message = mysqli_real_escape_string ($mysqli, $_POST['message']);

        if(!empty($vardas) && !empty($email) && !empty($message)) {
            if(filter_var($email, FILTER_VALIDATE_EMAIL)){
                $from = "$email";
                $to = "kaidio12@gmail.com";
                $subject = "Nauja zinute";
                $autorius = 'Nuo :' .$vardas . ', ' . $email;
                $zinute = htmlspecialchars($message);
                mail($to, $subject, $autorius, $zinute, $from);
                header("Location: ../public/kontaktai.php?mailsend");
            }
        }
    }
