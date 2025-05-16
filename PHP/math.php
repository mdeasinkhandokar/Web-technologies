<!DOCTYPE html>
<html>
    <body>
        <form action="math.php" method="post">
            <label>radius</label>
            <input type="text" name="radius"><br>
<input type="submit" value="calculate">






        </form>
    </body>
</html>



<?php

$radius=$_POST["radius"];
$circumference=null;
$area=null;
$volume=null;


$circumference=2*pi()*$radius;

$circumference= round($circumferecne,2);
$area=pi()*pow($radius,2);
$area=round($area,2);
$area=pi()*pow($radius,2);
$area=round($area,2);
$volume=4/3*pi()*pow($radius,2);
$volume=round($volume,2);

echo"circumference={$circumference}cm<br>";
echo"Area={$area}cm^2<br>";
echo"volume={$volume}cm^3<br>";