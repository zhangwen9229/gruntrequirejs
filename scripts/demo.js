define(['jquery'], function(j) {

	j("body").append("ttttttt")

	function Demo() {
		this.click = function(str) {
			alert(str);
		}
	}


	return Demo;
});