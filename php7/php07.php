<?php
    $cities4 = ['Tokijas', 'Vasingtonas', 'Maskva', 'Londonas'];

?>

<ul>
    <?php
        for($i = 0; $i < count($cities4); $i++){
            echo "<li>$cities4[$i]</li>";
        }
    ?>

</ul>

<ul>
    <?php
        foreach ($cities4 as $miestas) {
            echo "<li> $miestas </li>";
        }

    ?>

</ul>
