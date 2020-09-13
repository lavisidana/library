<?php
include_once('/var/www/html/library/connection.php');
include_once('/var/www/html/library/functions.php');
switch ($_POST['action']) {
  case "coDependentDropDown":
    coDependentDropDown($_POST,$conn);
    break;
  default:
    echo "Nothing to see here";
}
function coDependentDropDown($post,$conn){
    if($post['brand'] == "" || $post['brand'] == null){
        $qrystring = "";
        if(!empty($post['model']) && $post['model'] !=null){
            $qrystring = " AND model = '".$post['model']."' ";
        }
        if(!empty($post['year']) && $post['year'] !=null){
            $qrystring = " AND year = '".$post['year']."' ";
        }
        if(!empty($post['color']) && $post['color'] !=null){
            $qrystring = " AND color = '".$post['color']."' ";
        }

    $data["brand"] = getAssortedData(brand,$qrystring,$conn);
    }
    if($post['model'] == "" || $post['model'] == null){
        $qrystring = "";
        if(!empty($post['brand']) && $post['brand'] !=null){
            $qrystring = " AND brand = '".$post['brand']."' ";
        }
        if(!empty($post['year']) && $post['year'] !=null){
            $qrystring = " AND year = '".$post['year']."' ";
        }
        if(!empty($post['color']) && $post['color'] !=null){
            $qrystring = " AND color = '".$post['color']."' ";
        }

    $data["model"] = getAssortedData(model,$qrystring,$conn);
    }
    if($post['year'] == "" || $post['year'] == null){
        $qrystring = "";
        if(!empty($post['brand']) && $post['brand'] !=null){
            $qrystring = " AND brand = '".$post['brand']."' ";
        }
        if(!empty($post['model']) && $post['model'] !=null){
            $qrystring = " AND model = '".$post['model']."' ";
        }
        if(!empty($post['color']) && $post['color'] !=null){
            $qrystring = " AND color = '".$post['color']."' ";
        }

    $data["year"] = getAssortedData(year,$qrystring,$conn);
    }
    if($post['color'] == "" || $post['color'] == null){
        $qrystring = "";
        if(!empty($post['brand']) && $post['brand'] !=null){
            $qrystring = " AND brand = '".$post['brand']."' ";
        }
        if(!empty($post['model']) && $post['model'] !=null){
            $qrystring = " AND model = '".$post['model']."' ";
        }
        if(!empty($post['year']) && $post['year'] !=null){
            $qrystring = " AND year = '".$post['year']."' ";
        }

    $data["color"] = getAssortedData(color,$qrystring,$conn);
    }
    echo json_encode($data);
}
function getAssortedData($column,$qrystring,$conn){
    $qry = "SELECT DISTINCT $column from `dropdowndata` where 1 $qrystring;";
    $data = getData($qry, $conn);
    return $data;
}
?>
