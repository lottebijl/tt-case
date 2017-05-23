<?php
  header('Content-type: image/svg+xml');
  $colorValue = $_GET['c'];

  $color = str_replace('#', '', $colorValue);
  $svg = file_get_contents('../assets/svg/' . $_GET['svg'] . '.svg');
  $file = str_replace('stroke:red', 'stroke:#F00', $svg);
  echo str_replace('F00', $color, $file);
?>