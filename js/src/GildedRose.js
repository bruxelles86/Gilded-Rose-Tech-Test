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
            break;
        case 'Backstage passes to a TAFKAL80ETC concert':
            this.passesQuality();
            break;
        case 'Conjured':
            this.conjuredQuality();
            break;
        default:
            this.defaultQuality();
    };
  };

  amendSellIn(item) {
    if(item.name != 'Sulfuras') {
      this.sellIn(item);
    }
  };
}

// sets the 'normal' rate for non-special items to degrade by
Shop.prototype.degradeRate = 1

Shop.prototype.agedBrieQuality = function(item) {
  if(item.quality < 50) {
    item.quality += 1
  };
};

Shop.prototype.sellIn = function(item) {
  item.sellIn -= 1
};

Shop.prototype.passesQuality = function(item) {
  if(item.sellIn < 10 && item.sellIn > 5) {
    if(item.quality + 2 <= 50) {
      item.quality += 2
    }
  } else if(item.sellIn <= 5 && item.sellIn >= 0) {
    if(item.quality + 3 <= 50) {
      item.quality += 3
    }
  } else if(item.sellIn < 0) {
    item.quality = 0
  }
};

Shop.prototype.conjuredQuality = function(item) {
  item.quality -= (shop.degradeRate * 2)
};

Shop.prototype.defaultQuality = function(item) {
  if(item.quality - 1 >= 0) {
  item.quality -= shop.degradeRate
  }
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
