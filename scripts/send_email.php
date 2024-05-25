<?php
// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the JSON data from the request body
    $data = json_decode(file_get_contents('php://input'), true);

    // Validate and sanitize input data
    $name = htmlspecialchars(strip_tags(trim($data['name'])));
    $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(strip_tags(trim($data['message'])));

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Set the recipient email address
    $to = "edengibson355@gmail.com"; // Replace with your email address

    // Set the email subject
    $subject = "Contact Form Submission from $name";

    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Set the email headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong, and we couldn't send your message.";
    }
} else {
    echo "Invalid request method.";
}

