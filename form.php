<?php

    $email = $_POST['email'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $to = "Happymalina@yandex.ru";
    $subject = "От посетителя сайта IRINAMALINA";
    $text = "Написал(а): $name\n Контактный email: $email\n Телефон: $phone\n Текст письма: $message\n";

    $header.= "Content-type: text/html; charset=utf-8\r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $sending = mail($to, $subject, $text, $headers);

?>