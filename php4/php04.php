<?php
    $cities = ['Berlynas', 'Roma', 'Londonas', 'cities2'];
    $cities[] = 'Tokijas';
    $cities2 = [
      'tokijas' => 13.6,
      'vasingtonas' => 0.6,
      'maskva' => 11.5
    ];
    $cities2[]=['londonas' => 8.6];
    print_r($cities) . '<br>';
    print_r($cities2);

?>

<ul>
    <?php
        echo "<li>$cities[1]</li>";
        echo '<li>' . 'Gyventoju skaicius ' . ($cities2['tokijas']) . '</li>';
    ?>
</ul>
