<?php
function getData($qry,$conn) {
  $result = mysqli_query($conn,$qry);
  while ($all = mysqli_fetch_assoc($result)) {
    $row[] = $all;
}
return $row;
}

?>
