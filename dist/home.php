<?php
  $compiler = include('compiler.php');

  $data['home'] = 'true';

  echo $compiler->render('home', $data);
?>