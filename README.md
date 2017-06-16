Gilded-Rose Tech Test
=====================

Makers Academy week 10 practice tech test, in JavaScript. Find a full description of the challenge at <https://github.com/emilybache/GildedRose-Refactoring-Kata>.

Installation, Testing & Use
--------

* Simply fork or clone this repo. 
* Tests can be run by loading SpecRunner.html in a web browser
* You can interact with the code by loading the Chrome console while viewing SpecRunner.html. Create one or more items, and then pass them in an array to a new shop.
* After instantiating a shop, run _updateQuality().

Features
--------

* Updates the 'quality' and 'sellIn' values of item objects stored in a shop object's items array
* Fully tested with unit and integration tests, insulated from each other with doubles and spies

Approach
--------

I began by spending more than four hours reading the provided code, commenting it so I remembered how it worked, and diagramming to help organise my thoughts and try to create a structure. The provided code was obviously flawed in many ways, not least the sheer length of updateQuality, the number of nested 'if' statements, and the poor way in which it revealed the author's intention.

Given the constraint of being unable to refactor the Item class, I decided the cleanest way of tackling the problem was to separate the responsibilities of updating quality and sellIn values to different functions, which would be fired by updateQuality. That led me to create amendQuality and amendSellIn. Since the way that quality needed to change varied by object type, I used a switch to fire different item-specific functions to alter an item's quality property. As sellIn is changed in a uniform way for all objects except Sulfuras, I used a single function to alter this property. I also opted for a forEach iteration rather than the 'for' loop originally used.


Technologies & Principles
-------------------------

* JavaScript
* Jasmine
