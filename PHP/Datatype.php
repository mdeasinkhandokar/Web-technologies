<?php



//integer
$age = 25;
echo $age;
echo "<br>";



//float
$price =99.99;
echo $price;

echo"<br>";


///string
$name="Welcome to Banglades";
echo $name;
echo"<br>";


$master="hello";
echo"Message : $master \n";

echo"<br>";


//boolean

$isActive =true;
if($isActive){
    echo "Active";
}
echo"<br>";


//array
$colors=["red","green","blue"];
echo $colors[2];


echo"<br>";


//object
class Phone{
    public  $brand="i phone";

}

$Phone = new Phone();
echo $Phone->brand;



echo"<br>";

//NULL

$x=NULL;
var_dump($x);



?>