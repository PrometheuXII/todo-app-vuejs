<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, PUT");
require_once ('../vendor/autoload.php');
$db = new MysqliDb ('localhost', 'root', '', 'todo_app_db');

?>