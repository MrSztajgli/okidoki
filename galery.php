<?php
	$result = array('type' => 'error', 'code' => 'Coś niedziała');
	$kat = $_POST['kat'];
	if($kat){
		$dir = "img/galerie/".$kat;
		$lista = array();
		if (is_dir($dir)) {
		    if ($dh = opendir($dir)) {
			    while (($file = readdir($dh)) !== false) {
				    $c=explode('.',$file);
				    if($c[0]){
						$lista[] = $file;
				    }
			    }
			    closedir($dh);
		    }
		}
		if(count($lista)){
			$result = array('type' => 'success', 'code' => $lista);
		}
	}
	echo json_encode($result);
?>
