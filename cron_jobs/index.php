<?php
print_r($argv);
include_once('/var/www/html/library/db.php');
$str=rand();
$str = md5($str);
 $qry = "INSERT INTO `cronjobs`(`id`, `name`) VALUES (null, '$str');";
$c = new Db();
$data = $c->SetData($qry);
var_dump($data);
?>
