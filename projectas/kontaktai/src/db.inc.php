<?php

    define('DB_SERVER', 'localhost');
    define('DB_USER', 'root');
    define('DB_PASSWORD', '');
    define('DB_NAME', 'kontaktai');

    $mysqli = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB_NAME);

    if ($mysqli->connect_error) {
        echo "Sorry, klaida";
        echo "Klaida: {$mysqli->connect_error}";
    }

    mysqli_query($mysqli, "INSERT INTO manoklientai (vardas, email, message) VALUES('$_POST[vardas]', '$_POST[email]', '$_POST[message]')");

    $sql = "SELECT * FROM manoklientai";
    $result = $mysqli->query($sql);
