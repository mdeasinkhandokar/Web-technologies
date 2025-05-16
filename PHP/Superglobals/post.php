<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="post.php" method="post"> 
  <label>quantity:</label><br>
  <input type="text" name="quantity"><br>

  <label>price:</label><br>
  <input type="text" name="price"><br>
  
  <input type="submit" value="Submit">


  </form>

</body>
</html>

<?php

 $quantity=$_POST["quantity"];
 $price=$_POST["price"];
 $total=null;

 $total=$quantity*$price;

 echo "You have ordered {$quantity} x {$price}/s <br>";
 echo"You total is :\${$total}";

?>
