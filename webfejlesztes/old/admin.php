<?php
$db = new PDO("sqlite:felmeres.db");
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$results = $db->query("SELECT * FROM valaszok ORDER BY datum DESC")->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Felmérés eredmények</title>
    <style>
        body { font-family: sans-serif; padding: 20px; }
        table { border-collapse: collapse; width: 100%; max-width: 600px; }
        th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
        th { background-color: #f3f3f3; }
    </style>
</head>
<body>
    <h1>Felmérés eredmények</h1>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Válasz</th>
                <th>Dátum</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($results as $row): ?>
                <tr>
                    <td><?= $row['id'] ?></td>
                    <td><?= htmlspecialchars($row['valasz']) ?></td>
                    <td><?= $row['datum'] ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>
</html>
