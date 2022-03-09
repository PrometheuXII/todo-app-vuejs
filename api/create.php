<?php
include("config.php");

$todo_id = (int)$_POST["todo_id"];
$todo_text = $_POST["todo_text"];
$todo_status = $_POST["todo_status"];

$data = Array (
               "todo_text" => $todo_text,
               "todo_status" => $todo_status,
);

$insert = $db->insert ('todo', $data);
if($insert){
    echo 'entry was added';
}

$db->disconnect();