<?php
// This piece of code take data from csv file and puts that a string in this file i have taken a sql query as a string as i need it for my code. And rather then using csv file to import i want to insert the rows using insert command. You can use it to make any kind of code
$file = fopen("inputdata.csv","r"); //input file
  $myfile = fopen("array.txt", "w") or die("Unable to open file!"); //output file
$data;
// While loops run untill the last line of CSV file
while(! feof($file)){
    $outputString .="INSERT INTO tablename (column1, column2, column3, column4, column5, column6, column7, column8, column9, column10 ) VALUES (";
// fgetcsv reads the data from csv file line by line and put the columns in array
  $data = fgetcsv($file);
  foreach ($data as $key => $value) {
    if($key != 9 ):
      $outputString .='"'.$value.'",' ;
    else:
      $outputString .='"'.$value.'"' ;
    endif;
  }
  $outputString .= ");";
  fwrite($myfile, $outputString."\n");
  $outputString ="";
  }
// while loops ends here
  fclose($myfile); // Close output file
  fclose($file);  // Close input file


?>
