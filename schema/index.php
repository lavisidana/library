<?php
// This code is for making JSON schema for products inputing data through a CSV file and output in a csv file with the data which is already available in csv and schema in last column
$inputfile = fopen("mock_data.csv","r"); //input file
$data;
while(! feof($file)){
  $data[] = fgetcsv($file);
  }
  fclose($inputfile);
// Lets create random rating between
function frand($min, $max, $decimals = 0) {
  $scale = pow(10, $decimals);
  return mt_rand($min * $scale, $max * $scale) / $scale;
}
$outputfile = fopen("output.csv","w"); // output file

foreach ($data as $line) {
    $rating = frand(4,5,2); // for random rating b/w 4 to 5
    $line[] = '<script type="application/ld+json">{"@context": "https://schema.org/","@type": "Product", "name": "'.$list[0].'", "image": ["arraywithimagekey"],"description": "arraywithdescriptonkey", "sku": "arraywithskukey", "mpn": "arraywithmpnkey", "brand": { "@type": "Thing", "name": "arraywiththingkey" }, "review": { "@type": "Review", "reviewRating": {"@type": "Rating","ratingValue": "'.$rating.'","bestRating": "5"},"author": {"@type": "Person","name": "Person Name"}},"aggregateRating": {"@type": "AggregateRating","ratingValue": "'.$rating.'","reviewCount": "'.rand(50,250).'"},"offers": {"@type": "Offer", "url": "arraywithproducturlkey", "priceCurrency": "USD", "price": "arraywithpricekey", "priceValidUntil": "01-01-2050", "itemCondition": "https://schema.org/NewCondition", "availability": "https://schema.org/InStock","seller": {"@type": "Organization","name": "'.$list[4].'"}}}</script>';
  fputcsv($outputfile, $line);
}

fclose($outputfile);
?>
