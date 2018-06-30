var height, width, color;

$('sizePicker').submit(function(event){
	event.preventDefault();
	 height=$('#inputHeight').val();
	width=$('#inputWeight').val();
	makeGrid(height,width);
})

function makeGrid(rows, cols){

	$('tr').remove();
	for (var row=1; row<=rows; row++){
		$('#pixelCanvas').append('<tr id=table' + row + '></tr>');
		for (var col=1; col<=cols; col++){
			$('#table'+row).append('<td></td>');
		}
	}
	
	$('td').click(function addColor(){
		color = $('#colorPicker').val();
		if($(this).attr('style')){
			$(this).removeAttr('style')
		} else{
			$(this).attr('style','background-color:' + color);
		}
	});
}
