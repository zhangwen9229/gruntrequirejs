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
<<<<<<< HEAD
        demo: "../scripts/demo",
=======
>>>>>>> 01a23082344aeb1cf342181e14b0e06d55f6bb82
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