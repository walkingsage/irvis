$name = $_POST['name'];
$number = $_POST['number'];

$name = htmlspecialchars($name);
$number = htmlspecialchars($number);

$name = urldecode($name);
$number = urldecode($number);

$name = trim($name);
$number = trim($number);

echo $name;
echo "<br>";
echo $number;