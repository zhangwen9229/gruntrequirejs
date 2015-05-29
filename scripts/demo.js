<<<<<<< HEAD
define(['jquery'], function(j) {
=======
define('demo',['jquery'], function(j) {
>>>>>>> 01a23082344aeb1cf342181e14b0e06d55f6bb82

	j("body").append("ttttttt")

	function Demo() {
		this.click = function(str) {
			alert(str);
		}
	}


	return Demo;
});