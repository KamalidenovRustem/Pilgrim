<?php

include_once ('connection.php');

$email = $conn->quote($_POST['emailPHP']);
$password = $conn->quote($_POST['passwordPHP']);


// $query = "SELECT id FROM users WHERE email='$email' AND password= '$password'";

$query = "SELECT nickname FROM users WHERE email = $email AND password = $password";

//Uncomment line below to check if email and password register. Authentication will not work!
//echo $email, $password ;

//prepare and fetch passed data from js

try{
    $data = $conn->prepare ($query);
    $data -> execute();
    $result = $data -> fetchAll();
}catch(PDOException $error) {
    http_response_code(400);
    $result = [
        "error" => 400,
        "message" => $error->getMessage()
    ];
}


if($data->rowCount() > 0){
    exit( strval(json_encode($result)) );
}
else{
    exit(strval(json_encode($result));
}