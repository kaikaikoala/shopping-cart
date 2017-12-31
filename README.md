# shopping-cart
main.js implements 2 objects, 1 function, and the main script which executes the program. The 2 objects loosely follow a composite design pattern: with Cart being the composite and Item being the primitive. readFile function cleans the main scripting logic by handling file io. 

## Running Tests
Code run with [node](https://nodejs.org/en/download/) v9.3.0 

### Test scripts
Test scripts are in tests.sh

### Notes
For node versions older than v8 include the flag --harmony_array_includes (ex. node --harmony_array_includes main.js cart-9500.json base-prices.json)
