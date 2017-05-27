<?php
  $compiler = include('compiler.php');

  $data['title'] = 'Contact';
  echo $compiler->render('contact', $data);
?>
