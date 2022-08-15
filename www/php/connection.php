<?php
$DB_HOST = 'db.sinners.be';
$DB_USERNAME = 'rustemkamalidenov';
$DB_PASSWORD = 'BS0kGnFbrsxz';
$DB_DATABASE = 'rustemkamalidenov_CordovaApplication';

// Set response headers
header('Access-Control-Allow-Origin: *');       // Enable CORS
header('Content-Type: application/json');
http_response_code(200);                        // response code 200: OK

// Open connection to database
try {
    $conn = new PDO("mysql:host=$DB_HOST;dbname=$DB_DATABASE;charset=utf8", $DB_USERNAME, $DB_PASSWORD);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $error) {
    http_response_code(400);
    echo json_encode([
        "error" => 400,
        "message" => $error->getMessage()
    ]);
    die();
}