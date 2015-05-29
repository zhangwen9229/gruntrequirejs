define('demo',['jquery'], function(j) {

	j("body").append("ttttttt")

	function Demo() {
		this.click = function(str) {
			alert(str);
		}
	}


	return Demo;
});
require.config({
    baseUrl: 'node_modules',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: 'jquery/dist/jquery'
    }
});

require(["demo", "jquery"], function(Demo, $) {
    var demo = new Demo();
    var i = 0;
    $("#test").on('click', function(event) {
        demo.click(i++);
    });
});
/*! testrequirejs 2015-05-29 */
define("demo",["jquery"],function(a){function b(){this.click=function(a){alert(a)}}return a("body").append("ttttttt"),b}),require.config({baseUrl:"node_modules",paths:{jquery:"jquery/dist/jquery"}}),require(["demo","jquery"],function(a,b){var c=new a,d=0;b("#test").on("click",function(a){c.click(d++)})}),define(["jquery"],function(a){function b(){this.click=function(a){alert(a)}}return a("body").append("ttttttt"),b}),require.config({baseUrl:"node_modules",paths:{jquery:"jquery/dist/jquery"}}),require(["./scripts/demo","jquery"],function(a,b){var c=new a,d=0;b("#test").on("click",function(a){c.click(d++)})}),define("demo",["jquery"],function(a){function b(){this.click=function(a){alert(a)}}return a("body").append("ttttttt"),b}),require.config({baseUrl:"node_modules",paths:{jquery:"jquery/dist/jquery"}}),require(["demo","jquery"],function(a,b){var c=new a,d=0;b("#test").on("click",function(a){c.click(d++)})}),define(["jquery"],function(a){function b(){this.click=function(a){alert(a)}}return a("body").append("ttttttt"),b}),require.config({baseUrl:"node_modules",paths:{jquery:"jquery/dist/jquery"}}),require(["./scripts/demo.js","jquery"],function(a,b){var c=new a,d=0;b("#test").on("click",function(a){c.click(d++)})}),define(["jquery"],function(a){function b(){this.click=function(a){alert(a)}}return a("body").append("ttttttt"),b}),require.config({baseUrl:"../node_modules",paths:{jquery:"jquery/dist/jquery"}}),require(["./scripts/demo.js","jquery"],function(a,b){var c=new a,d=0;b("#test").on("click",function(a){c.click(d++)})});