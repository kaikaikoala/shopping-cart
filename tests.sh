#!/bin/bash


#test for cart-4560
echo node --harmony_array_includes main.js cart-4560.json base-prices.json 
node --harmony_array_includes main.js cart-4560.json base-prices.json 
echo

#test for cart-9500
echo node --harmony_array_includes main.js cart-9500.json base-prices.json 
node --harmony_array_includes main.js cart-9500.json base-prices.json 
echo

#test for cart-9363
echo node --harmony_array_includes main.js cart-9363.json base-prices.json 
node --harmony_array_includes main.js cart-9363.json base-prices.json 
echo
