/*
 *    Qlik standard / generated code unless otherwise noted. 
 * 
 *    See https://help.qlik.com/en-US/sense-developer/November2018/Subsystems/Dev-Hub/Content/Sense_Dev-Hub/Howtos/dev-hub-create-mashup-template.htm 
 *    for minimum requirements.
 */
 
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
/* Fill in host and port for Qlik engine */ 
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.setOnError( function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );
	
	/* ADDED: Clear all selections made when clicked. */
	$(document).on("click", "#clearSelections", function(){
		app.clearAll();
	});
	
	/* ADDED: Toggle the Advanved Selections Bar when clicked.*/
	$(document).on("click", "#advancedSelections", function(){
		  var x = document.getElementById('CurrentSelections');
		  if (x.style.display === 'none') {
			x.style.display = 'block';
			console.log(true);
		  } else {
			x.style.display = 'none';
			console.log(false);
		  }
	});
	

	//callbacks -- inserted here --
	//open apps -- inserted here --
	//get objects -- inserted here --
	app.getObject('CurrentSelections','CurrentSelections');	
	//create cubes and lists -- inserted here --

} );