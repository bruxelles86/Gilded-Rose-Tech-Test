class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.amendQuality();
    this.amendSellIn();
  };

  amendQuality(item) {

    switch (item.name) {
        case 'Aged Brie':
            this.agedBrieQuality();
            break;
        case 'Sulfuras':
            this.sulfurasQuality();
            break;
        case 'Backstage passes':
            this.passesQuality();
            break;
    }

  }

  amendSellIn() {
  }

}

Shop.prototype.agedBrieQuality = function() {

};

Shop.prototype.sulfurasQuality = function() {

};

Shop.prototype.passesQuality = function() {

};

//   for (var i = 0; i < this.items.length; i++) {
//     // this first 'if' up to line 22 cuts item quality if neither brie, backstage pass, nor sulfuras
//     if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//       if (this.items[i].quality > 0) {
//         if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//           this.items[i].quality = this.items[i].quality - 1
//         }
//       }
//       // this else, up to line 25 increases quality for brie
//     } else {
//       if (this.items[i].quality < 50) {
//         this.items[i].quality = this.items[i].quality + 1
//         // lines 27 to 38 increment quality for backstage passes
//         if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
//           if (this.items[i].sellIn < 11) {
//             if (this.items[i].quality < 50) {
//               this.items[i].quality = this.items[i].quality + 1
//             }
//           }
//           if (this.items[i].sellIn < 6) {
//             if (this.items[i].quality < 50) {
//               this.items[i].quality = this.items[i].quality + 1
//             }
//           }
//         }
//       }
//     }
//     // lines 42 to 44 reduce quality for all non-sulfuras items
//     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//       this.items[i].sellIn = this.items[i].sellIn - 1;
//     }
//     // when sell-by date expires...
//     if (this.items[i].sellIn < 0) {
//       if (this.items[i].name != 'Aged Brie') {
//         if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//           if (this.items[i].quality > 0) {
//             if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//               // ...cuts quality a second time (i.e. twice as fast overall)...
//               this.items[i].quality = this.items[i].quality - 1
//             }
//           }
//           // cuts quality of passes to zero when sellIn below zero
//         } else {
//           this.items[i].quality = this.items[i].quality - this.items[i].quality
//         }
//         // increments brie quality if below 50
//       } else {
//         if (this.items[i].quality < 50) {
//           this.items[i].quality = this.items[i].quality + 1
//         }
//       }
//     }
//   }
//   // item spat out after changes
//   return this.items;
