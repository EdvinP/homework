<?php
$page = isset($_GET['page']) ? $_GET['page'] : 1;
$itemsPerPage = 3;
$fromNumCalc = ($itemsPerPage * $page) - $itemsPerPage;