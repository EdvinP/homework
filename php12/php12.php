<!DOCTYPE html>
<html lang="">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>

<body>
    <?php
        if (isset($_POST['vardas']) && isset($_POST['pavarde']))
        {
            writeToDocument($_POST['vardas'], $_POST['pavarde']);
        }

    ?>
    <form action="<?php $_PHP_SELF ?>" method="POST">
        Vardas<input type ="text" name="vardas">
        Pavarde<input type ="text" name="pavarde">
        <input type="submit">
    </form>
    <?php
        function writeToDocument($vardas, $pavarde)
        {
            if(empty($vardas) || empty($pavarde))
            {
                echo "Neivedete visu laukeliu";
            }else
            {
                echo "$vardas, <br>  $pavarde";
            }
        }
    ?>
</body>
</html>
