<script src="scripts/require.js"></script>
<script>
	require.config({
		baseUrl:"another/path",
		paths:{
			"some":"some/v1.0"
		},
		waitSecond:15
		
	});
	
	require(['some/module','my/module','a.js','b.js'],function(someModule,myModule){

		//this function will be called when all the dependencies listed above are loaded.
	});
</script>
