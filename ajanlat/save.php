<?php
$db = new PDO('sqlite:offers.sqlite');
$db->exec("CREATE TABLE IF NOT EXISTS offers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ugyfel TEXT,
    ertekesito TEXT,
    datum TEXT,
    ajanlatszam INTEGER,
    tetelek TEXT
)");

$data = json_decode(file_get_contents('php://input'), true);

$stmt = $db->prepare("INSERT INTO offers (ugyfel, ertekesito, datum, ajanlatszam, tetelek)
                      VALUES (:ugyfel, :ertekesito, :datum, :ajanlatszam, :tetelek)");

$stmt->execute([
    ':ugyfel' => $data['ugyfel'],
    ':ertekesito' => $data['ertekesito'],
    ':datum' => $data['datum'],
    ':ajanlatszam' => $data['ajanlatszam'],
    ':tetelek' => json_encode($data['tetelek'])
]);

echo json_encode(['ok' => true, 'message' => 'Mentés sikeres']);
