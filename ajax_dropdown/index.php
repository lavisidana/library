<?php
// include_once('../connection.php');

?>
<!DOCTYPE html>
<html>
<head>
    <title>Dropdown Menu Using Ajax PHP and Bootstrap</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
</head>
<body>
    <section id="selectArea1">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-12 col-lg-12">
                    <div class="heading-title">
                        <h3>Sample Dropdown menu values based on Selection</h3>
                    </div>
                </div>
            </div>
            <div class="row mtop-2">
                <div class="col-12 col-md-12 col-lg-12">
                    <form class="row">
                        <select class="form-control col-12 col-md-2 col-lg-2 m-1" name="brand" ></select>
                        <select class="form-control col-12 col-md-2 col-lg-2 m-1" name="model" ></select>
                        <select class="form-control col-12 col-md-2 col-lg-2 m-1" name="year" ></select>
                        <select class="form-control col-12 col-md-2 col-lg-2 m-1" name="color" ></select>
                        <button id = "goButton" class="btn btn-primary m-1">GO</button>
                        <button id = "resetButton" class="btn btn-secondary m-1">RESET ALL</button>
                    </form>
                </div>
            </div><!---/. row mtop-2-->
        </div>
    </section>
    <script type="text/javascript">
        function intialBrandsDropDown(){
                $('select[name=brand]').html('<option value="">Select Brand </option><?php foreach($brands as $i=>$brand): ?><option value="<?php echo '&vid=' . $brand['vendorid'] ; ?>"><?php echo $brand['name']; ?> </option><?php endforeach; ?>');
            }
            function intialCollectionDropDown(){
                $('select[name=collection]').html('<option value="">Select Collection </option><option value="" disabled>Please Select Brand First</option>');
            }
            function intialCategoryDropDown(){
                $('select[name=style]').html('<option value="">Select Category </option><?php foreach($categoriesData as $i=>$color): ?><option value="<?php echo '&catid=' . $color['catid'] ; ?>"><?php echo $color['category']; ?> </option><?php endforeach; ?>');
            }
            function intialColorDropDown(){
                $('select[name=color]').html('<option value="">Select Color</option><?php foreach($colorData as $i=>$color): ?> <option value="<?php echo '&color=' . strtolower($color['color']) ; ?>"><?php echo $color['color']; ?> </option><?php endforeach; ?>');
            }
            function intialSizeDropDown(){
                $('select[name=size]').html("<option value=''>Select Size</option><?php foreach($sizeData as $i=>$size): $sizeCode = strtolower(urlencode($size["grpsize"])); if($size["grpsize"]=="2' x 8'") $afterText = " Runners"; elseif($size["grpsize"]=="2' x 10'") $afterText = " and Larger"; elseif($size["grpsize"]=="10' x 13'") $afterText = " and Larger"; else $afterText = " "; ?> <option value=\"<?php echo '&size='. $sizeCode ; ?>\">Around <?php echo $size['grpsize'].$afterText; ?> </option> <?php endforeach; ?>");
            }
            function intialShapeDropDown(){
                $('select[name=shape]').html('<option value="">Select Shape</option><?php foreach($shapeData as $i=>$shape): ?><option value="&shape=<?php echo strtolower($shape['value']);   ?>"><?php echo $shape['value'];   ?></option><?php endforeach; ?>');
            }
            function initialDropDown(){
                previousbrand = previouscollection = previouscategory = previouscolor = previoussize = previousshape = "";
                intialBrandsDropDown();
                intialCollectionDropDown();
                intialCategoryDropDown();
                intialColorDropDown();
                intialSizeDropDown();
                intialShapeDropDown();
            }
            initialDropDown();
    </script>
    <script src="https://code.jquery.com/jquery-3.5.0.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"></script>
</body>
</html>
