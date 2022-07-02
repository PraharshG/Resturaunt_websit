function Show(iden)
{
	var x = document.getElementById(iden).innerHTML;
	var y = document.getElementById('disp');
	console.log(x);
	y.innerHTML = x;

}
