<?php
session_start();
$_SESSION['name'] = "lavi";
$_SESSION['lastname'] = "sidana";
?>
<!DOCTYPE html>
<html>
<head>
    <title>Testing Session With ajax</title>
</head>
<body>
    <button>Click Me</button>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.0/jquery.min.js"></script>
<script type="text/javascript">
    $(document).on("click", "button", function(e){
        e.preventDefault;
        $.ajax({
            'method':"POST",
            'url':"ajax.php",
            "async":true,
            "success":function(response){
                console.log(response);
            }
        })
    })
</script>

</body>
</html>

