//return string with json contents
//parameter arg file name to be read
function readFile( arg ){
    var fs = require( 'fs' ) ;

    try{
        var data = fs.readFileSync( arg , 'utf8' ) ;
    }catch(e){
        console.log('Error: ' , e.stack ) ;
    }
    return data ;
}

var myCart = JSON.parse( readFile( process.argv[2] ) );
var myBasePrice = JSON.parse( readFile( process.argv[3] ) );
//console.log( myCart[0]['product-type'] ) ;
//console.log( myBasePrice[0]['product-type'] ) ;
