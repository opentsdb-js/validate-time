/**
*
*	DEMO
*
*
*	DESCRIPTION:
*		- Demonstrates use of validator.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com.
*
*/

(function() {
	'use strict';

	// MODULES //

	var validate = require( './../lib' );

	// SCRIPT //

	console.log( validate.relative( '72000ms-ago' ) );
	// returns true

	console.log( validate.relative( '2014/07/18' ) );
	// returns false 

	console.log( validate.timestamp( Date.now() ) );
	// returns true

	console.log( validate.timestamp( Math.round( Date.now()/1000 ) ) );
	// returns true

	console.log( validate.timestamp( 1000 ) );
	// returns false

	console.log( validate.absolute( '2014/07/14' ) );
	// returns true

	console.log( validate.absolute( '2014/07/14 9:23' ) );
	// returns true

	console.log( validate.absolute( '2014/07/14 9:23-9:34:42' ) );
	// returns true

	console.log( validate.absolute( new Date().toString() ) );
	// returns false

	console.log( validate.format( '2014/07/18-9:34:42' ) );
	// returns 'absolute'

	console.log( validate.format( Date.now() ) );
	// returns 'timestamp'

	console.log( validate.format( '72000ms-ago' ) );
	// returns 'relative'

	console.log( validate.format( 'beep' ) );
	// returns undefined

})();