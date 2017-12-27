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
    compare( base ){
        var myBool = false ;
        //check product-type matches
        if( this["product-type"] == base["product-type"] ){
            //check options match
            for( const prop in base.options ){
                if( base.options[prop].includes(this.options[prop]) ){
                    myBool = true ;
                }
                else{
                    myBool = false ;
                    break ;
                }
            }//end of for in
        }//end of if
        return myBool ;
    }

    //return int
    //take base-price object for base-price as paramter
    /*
    cost( baseArr ){
        var myBool = false ;
        var i ;
        for( i = 0 ; i < baseArr.length && !myBool ; ++i ){
            myBool = this.compare( baseArr[i] ) ;
        }
        //this math thing
        return ( baseArr[i]["base-price"] + this["artist-markup"] ) * this.quantity ;
    }
    */
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

    /*
    cost( baseArr ){
        var price = 0 ;
        for( var i = 0 ; i < this.itemArr.length ; ++i ){
            price += this.itemArr[i].cost( baseArr ) ;
        }
        return price ;
    }
    */
}

var myCart = new Cart( JSON.parse(readFile( process.argv[2])) ) ;
var myBasePrice = JSON.parse(readFile(process.argv[3]));
myCart.print() ;

console.log( myCart.itemArr[0].compare( myBasePrice[0] ) ) ;
console.log( myCart.itemArr[0].compare( myBasePrice[1] ) ) ;
console.log( myCart.itemArr[0].compare( myBasePrice[7] ) ) ;



