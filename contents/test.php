<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Документ без названия</title>
</head>
<body>
<?php	
ob_start();
?>
<h1>Hello!</h1>
Remember me?
<?php 
$html = ob_get_contents();
ob_end_clean();
?>
<hr>
<?php	echo $html;
?>
</body>
</html>