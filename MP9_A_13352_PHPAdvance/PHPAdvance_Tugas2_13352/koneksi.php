<?php
    $conn = mysqli_conn('localhost', 'root', '', 'mp9_php_advance');
        if (!$conn) {
            die('Koneksi Gagal: ' .mysqli_connect_eror());
        }
?>
