<?php
include("config.php");

$db->where('todo_id', $_POST["todo_id"]);
if($db->delete('todo')){
    echo "entry deleted";
} 

$db->disconnect();