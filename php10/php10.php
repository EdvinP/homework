
<!DOCTYPE html>
<html lang="">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>

<body>
    <?php
        function result($ilgis, $plotis)
        {
            $result = $ilgis * $plotis;
            echo "Plotas : $result";
        }
        result(15, 20);
    ?>
</body>
</html>
