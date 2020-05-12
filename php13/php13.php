<?php
    class People
    {
        public $name;
        public $lastName;
        public function hello()
        {
            echo "Hello, $this->name $this->lastName <br>";
        }
    }
    $jonas = new People();
    $jonas ->name = 'Jonas';
    $jonas ->lastName = 'Jonaitis';

    $petras = new People();
    $petras->name = 'Petras';
    $petras->lastName = 'Petraitis';
    $jonas->hello();
    $petras->hello();
?>
