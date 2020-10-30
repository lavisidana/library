<?php
/**
 * To Make a connection
 */
include_once('config.php');
class Db
{
    const HOSTNAME = HOSTNAME;
    const USERNAME = USERNAME;
    const PASSWORD = PASSWORD;
    const DATABASE = DATABASE;
/**
 * Fetches data and put it array returns the value
 */
    public function GetData($qry)
    {
        $mysqli = new mysqli(self::HOSTNAME, self::USERNAME, self::PASSWORD, self::DATABASE);
        $mysqli->set_charset("utf8");
        $qry = $this->clean($qry);
        if ($result = $mysqli->query($qry)) {
                        if (($result->num_rows) > 0) {
                while ($all = mysqli_fetch_assoc($result)) {
                    $row[] = $all;
                }
                return $row;
            }
        } else {
            throw new Exception($mysqli->error);
        }
    }
    public function GetRecord($qry)
    {
        $mysqli = new mysqli(self::HOSTNAME, self::USERNAME, self::PASSWORD, self::DATABASE);
        $mysqli->set_charset("utf8");
        $qry = $this->clean($qry);
        if ($result = $mysqli->query($qry)) {
            if (($result->num_rows) > 0) {
                while ($all = mysqli_fetch_assoc($result)) {
                    if ($result->num_rows == 1) {
                        return $all;
                    } else {
                        $row[] = $all;
                    }
                }
                return $row;
            }
        } else {
            //self::SetErrorLog($mysqli->error);
            throw new Exception($mysqli->error);
        }
    }
     public function SetData($qry)
    {
        $mysqli = new mysqli(self::HOSTNAME, self::USERNAME, self::PASSWORD, self::DATABASE);
        $mysqli->set_charset("utf8");
        $qry = $this->clean($qry);
        if ($mysqli->query($qry)) {
            if ($mysqli->insert_id) {
                return $mysqli->insert_id;
            } else {
                return $mysqli->affected_rows;
            }
        } else {
            //self::SetErrorLog($mysqli->error);
            throw new Exception($mysqli->error);
        }
    }
    public function clean($str)
    {
        $mysqli = new mysqli(self::HOSTNAME, self::USERNAME, self::PASSWORD, self::DATABASE);
        $str = @trim($str);
        $str = $mysqli->real_escape_string($str);
        $str = stripslashes($str);
        return $str;
    }

}
?>
