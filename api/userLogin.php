<?php
require_once "./../dbconfig.php";

header('Content-Type: application/json');

// Verwerk POST-data
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$username = $data['username'];
$password = $data['password'];

$response = [];

// Fetch user data from database
$sql = "SELECT * FROM users WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

if ($user) {
    if (password_verify($password, $user['password'])) {
        // Succesfull login
        $response['success'] = true;
        $response['message'] = "Login successful";
    } else {
        // Password does not match
        $response['success'] = false;
        $response['message'] = "Invalid credentials";
    }
} else {
    // User doesn't exist
    $response['success'] = false;
    $response['message'] = "Invalid credentials";
}
// Both failed responses for the wrong password or the user not existing are the same so people can't check if their trying to login on a existing account

echo json_encode($response);
?>
