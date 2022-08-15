<?php

include_once ('connection.php');

$nickname = $conn->quote($_POST['nicknamePHPRegister']);
$email = $conn->quote($_POST['emailPHPRegister']);
$password = $conn->quote($_POST['passwordPHPRegister']);

$queryCheck = "SELECT id FROM users WHERE email = $email";

try{
    $data = $conn->prepare ($queryCheck);
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
    exit("presentREG");
}else{

    $data = $conn->query("INSERT INTO users (nickname, email, password) VALUES ($nickname, $email, $password)");

    if ($data === TRUE) {
        exit ("failedREG");
    }else{
        exit("successREG");
    }
}


?>