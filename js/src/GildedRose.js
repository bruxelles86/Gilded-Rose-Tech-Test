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
    var self = this

    this.items.forEach(function(item) {
      self.amendQuality(item);
      self.amendSellIn(item);
    });
  };

  amendQuality(item) {

    switch (item.name) {
        case 'Aged Brie':
            this.agedBrieQuality(item);
            break;
        case 'Sulfuras':
            break;
        case 'Backstage passes to a TAFKAL80ETC concert':
            this.passesQuality(item);
            break;
        case 'Conjured':
            this.conjuredQuality(item);
            break;
        default:
            this.defaultQuality(item);
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
  } else {
    if(item.quality - shop.degradeRate >= 0) {
    item.quality -= shop.degradeRate
    }
  }
};

Shop.prototype.conjuredQuality = function(item) {
  if(item.quality - shop.degradeRate * 2 >= 0) {
  item.quality -= (shop.degradeRate * 2)
  }
};

Shop.prototype.defaultQuality = function(item) {
  if(item.quality - 1 >= 0) {
  item.quality -= shop.degradeRate
  }
  return this.items
};
