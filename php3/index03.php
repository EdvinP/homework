<?php
    $x = 10;
    $y = 7;
?>
<!DOCTYPE html>
<html lang="lt">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php3</title>
</head>

<body>
    <?php
        $result = $x + $y;
        echo "$x + $y = $result <br>";
        $result = $x - $y;
        echo "$x - $y = $result <br>";
        $result = $x * $y;
        echo "$x * $y = $result <br>";
        $result = $x / $y;
        $result2 = (round($result,2));
        echo "$x / $y = $result <br>";
        $result = $x % $y;
        echo "$x % $y = $result <br>";
    ?>

    <script> console.log(<?php echo $result2 ?>);</script>
</body>
</html>
