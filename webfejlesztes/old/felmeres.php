<?php
// 1. Fogadjuk a JSON-ben érkező adatot
$data = json_decode(file_get_contents("php://input"), true);
$valasz = $data['valasz'] ?? null;

// 2. Ellenőrizzük, hogy valóban "Igen" vagy "Nincs"-et kaptunk
if (!in_array($valasz, ['Igen', 'Nincs'])) {
    http_response_code(400);
    exit("Érvénytelen válasz.");
}

try {
    // 3. Csatlakozás (ha nincs még, létrehozza a fájlt)
    $db = new PDO("sqlite:felmeres.db");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // 4. Tábla létrehozása (ha még nem létezik)
    $db->exec("CREATE TABLE IF NOT EXISTS valaszok (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        valasz TEXT NOT NULL,
        datum DATETIME DEFAULT CURRENT_TIMESTAMP
    )");

    // 5. Mentés
    $stmt = $db->prepare("INSERT INTO valaszok (valasz) VALUES (:valasz)");
    $stmt->execute(['valasz' => $valasz]);

    echo "Mentés sikeres.";
} catch (Exception $e) {
    http_response_code(500);
    echo "Hiba: " . $e->getMessage();
}
?>
