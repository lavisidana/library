<?php
include_once('/var/www/html/library/connection.php');
include_once('/var/www/html/library/functions.php');
$brandqry = "SELECT DISTINCT brand from dropdowndata ORDER BY brand ASC;";
$branddata =getData($brandqry,$conn);
$modelqry = "SELECT DISTINCT model from dropdowndata ORDER BY model ASC;";
$modeldata =getData($modelqry,$conn);
$yearqry = "SELECT DISTINCT year from dropdowndata ORDER BY year ASC;";
$yeardata =getData($yearqry,$conn);
$colorqry = "SELECT DISTINCT color from dropdowndata ORDER BY color ASC;";
$colordata =getData($colorqry,$conn);
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
    <script src="https://code.jquery.com/jquery-3.5.0.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"></script>
    <script type="text/javascript">
        function intialBrandsDropDown(){
            $('select[name=brand]').html('<option value="">Select Brand </option><?php foreach($branddata as $brand): ?><option value="<?php echo strtolower($brand["brand"]) ; ?>"><?php echo $brand['brand']; ?> </option><?php endforeach; ?>');
        }
        function intialModelDropDown(){
            $('select[name=model]').html('<option value="">Select Model </option><?php foreach($modeldata as $i=>$model): ?><option value="<?php echo strtolower($model['model']) ; ?>"><?php echo $model['model']; ?> </option><?php endforeach; ?>');
        }
        function intialYearDropDown(){
            $('select[name=year]').html('<option value="">Select Year</option><?php foreach($yeardata as $i=>$year): ?> <option value="<?php echo $year['year'] ?>"><?php echo $year['year'] ?> </option><?php endforeach; ?>');
        }
        function intialColorDropDown(){
            $('select[name=color]').html("<option value=''>Select Color</option><?php foreach($colordata as $i=>$color): ?> <option value=\"<?php echo strtolower($color['color']); ?>\"><?php echo $color['color']; ?> </option> <?php endforeach; ?>");
        }
        function initialDropDown(){
             previousbrand = previousmodel = previousyear = previouscolor = "";
            intialBrandsDropDown();
            intialModelDropDown();
            intialYearDropDown();
            intialColorDropDown();
        }
    </script>
    <script type src="script.js" async></script>
</body>
</html>
