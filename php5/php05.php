<?php
    $cities3 =[
    'Tokijas' =>[
        13.6,
        1868,
        'Japonija'
        ],
    'Vasingtonas' =>[
        0.6,
        1790,
        'JAV'
        ],
    'Maskva' =>[
        11.5,
        1147,
        'Rusija'
        ]
    ];
    $cities3['Londonas'] = [8.6, 43, 'Anglija'] ;
    print_r($cities3);
    $citiesLondon = $cities3['Londonas'];
    print_r($citiesLondon);
?>
<ul>
    <?php
        echo '<li>' . 'Gyventoju skaicius: ' . ($citiesLondon[0]) . ' mln.' . '</li>';
        echo '<li>' . 'Ikurtas: ' . ($citiesLondon[1]) . ' m.' . '</li>';
        echo '<li>' . 'Salis: ' . ($citiesLondon[2]) . '</li>';
    ?>
</ul>
