<?php
include("config.php");

$update_id = (int)$_POST["todo_id"];
$update_text = $_POST["todo_text"];
$update_status = $_POST["todo_status"];

$data = Array ("todo_id"=>$update_id,
               "todo_text"=>$update_text,
               "todo_status"=>$update_status

);

$db->where('todo_id', $_POST["todo_id"]);
if ($db->update ('todo', $data))
    echo $db->count . ' entries were updated';
else
    echo 'update failed: ' . $db->getLastError();

$db->disconnect();