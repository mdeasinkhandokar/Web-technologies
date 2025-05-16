<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
<?php


//first method
$student_one=array("Maths"=>95,"physics"=>90,"chemistry"=>90,"English"=>93,"computer"=>98);


//2nd method
$student_two["Math"]=95;

$student_two["physics"]=90;

$student_two["chemistry"]=85;

$student_two["English"]=55;

$student_two["computer"]=93;


echo "marks for students: <br>";
echo"Maths:". $student_one["Maths"],"<br>";
echo "physics". $student_two["physics"],"<br>";
echo "English". $student_one["English"],"<br>";



///foreach loop
echo "Looping using foreach : <br>";
foreach($student_one as $subject =>$marks){
    echo"student one got ".$marks." in ".$subject."<br>";

}

/* Looping through an array using for */


echo "\nLooping using for: <br>";
$subject =array_keys($student_one);
$marks=count($student_one);
for($i=0;$i<$marks;++$i){
    echo $subject[$i].' '.$student_one[$subject[$i]]."<br>";

}



?>







</php>