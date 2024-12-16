<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'];

    if ($action === 'add') {
        $flightNumber = $_POST['flightNumber'];
        $sta = $_POST['sta'];
        $std = $_POST['std'];

        $stmt = $pdo->prepare("INSERT INTO flights (flight_number, sta, std) VALUES (?, ?, ?)");
        $stmt->execute([$flightNumber, $sta, $std]);
        echo json_encode(["status" => "success"]);
    }

    if ($action === 'upload') {
        // Excel file upload logic
        // Parse and update the database
    }

    // Implement edit/delete actions similarly
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = $pdo->query("SELECT * FROM flights");
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
}
?>
