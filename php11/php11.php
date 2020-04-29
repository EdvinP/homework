<!DOCTYPE html>
<html lang="">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>

<body>
    <?php
        if (isset($_POST['ilgis']) && isset($_POST['plotis']))
        {
            result($_POST['ilgis'],$_POST['plotis']);
        }
    ?>
    <form action="<?php $_PHP_SELF ?>" method="POST">
        Ilgis<input type ="text" name="ilgis">
        Plotis<input type ="text" name="plotis">
        <input type="submit">
    </form>
    <?php
        function result($ilgis, $plotis)
        {
            $result = $ilgis * $plotis;
            echo "Plotas : $result";
        }
    ?>
</body>
</html>
