<?php
    $temp =[4, 3, 9, 19, 19, 9, 12, 20, 24, 20, 12, 14, 18, 21, 20, 23, 16, 16, 15, 19, 19, 17, 17, 15, 12, 13, 13, 15, 19, 21];

    foreach ($temp as $value) {
        echo "$value ,";
    }
    $average = array_sum($temp) / count($temp);
    echo '<br>' . (round($average,0)) . '<br>' . '<br>';
    rsort($temp);
    foreach ($temp as $value) {
        echo "$value <br>";
    }
    $silciausios = array_slice($temp,0,5);
    echo implode(' ',$silciausios) . '<br>';
    asort($temp);
    $salciausios = array_splice($temp,0,5);
    echo  implode(' ',$salciausios);
?>
