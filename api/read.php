<?php
include("config.php");

$todo = $db->get('todo');

echo json_encode($todo);

$db->disconnect();