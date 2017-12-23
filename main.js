'use strict' ;
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

//maintain similar interface of Item and Cart 
//"primitive"
class Item{
    //strongly limit item to 4 fields
    constructor( itemStruct ){
        this["product-type"] = itemStruct["product-type"] ;
        this["options"] = itemStruct["options"] ;
        this["artist-markup"] = itemStruct["artist-markup"] ;
        this["quantity"] = itemStruct["quantity"] ;
    }

    //print for debugging
    print(){
        console.log( this["product-type"] ) ;
        console.log( this["options"] ) ;
        console.log( this["artist-markup"] );
        console.log( this["quantity"] ) ;
    }

    //return bool if this similar to base price
    //take base-price object as parameter
    compare( baseArr ){
    }

    //return int
    //take base-price object for base-price as paramter
    cost( baseArr ){
        // ( base-price + artist-markup ) * quantity
    }
}

//"composite"
class Cart{
    constructor( cartStruct ){
        this.itemArr = [] ;
        for( var i = 0 ; i < cartStruct.length ; ++i ){
            this.itemArr[i] = new Item( cartStruct[i] ) ;
        }
    }

    //print for debugging
    print(){
        this.itemArr.forEach( function( item ){ item.print() } ) ;
    }
}

var myCart = new Cart( JSON.parse(readFile( process.argv[2])) ) ;
var myBasePrice = JSON.parse(readFile(process.argv[3]));
/*
console.log( myCart[0]['product-type'] ) ;
console.log( myBasePrice[0]['product-type'] ) ;
*/
myCart.print() ;


