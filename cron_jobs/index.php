<?php
include_once('/var/www/html/library/connection.php');
$str=rand();
$str = md5($str);
 $query = "INSERT INTO `cronjobs`(`id`, `name`) VALUES (null, '$str');";
 echo $query;
    $result = mysqli_query($conn,$query);
?>
