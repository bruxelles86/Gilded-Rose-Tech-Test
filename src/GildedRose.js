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
      self._amendQuality(item);
      self._amendSellIn(item);
    });
    return this.items
  };

  _amendQuality(item) {

    switch (item.name) {
        case 'Aged Brie':
            this._agedBrieQuality(item);
            break;
        case 'Sulfuras':
            break;
        case 'Backstage passes to a TAFKAL80ETC concert':
            this._passesQuality(item);
            break;
        case 'Conjured':
            this._conjuredQuality(item);
            break;
        default:
            this._defaultQuality(item);
    };
  };

  _amendSellIn(item) {
    if(item.name != 'Sulfuras') {
      this._sellIn(item);
    }
  };
}

// sets the 'normal' rate for non-special items to degrade by
Shop.prototype.degradeRate = 1

Shop.prototype._agedBrieQuality = function(item) {
  if(item.quality < 50) {
    item.quality += 1
  };
};

Shop.prototype._sellIn = function(item) {
  item.sellIn -= 1
};

Shop.prototype._passesQuality = function(item) {
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

Shop.prototype._conjuredQuality = function(item) {
  if(item.quality - shop.degradeRate * 2 >= 0) {
  item.quality -= (shop.degradeRate * 2)
  }
};

Shop.prototype._defaultQuality = function(item) {
  if(item.quality - 1 >= 0) {
  item.quality -= shop.degradeRate
  }
};
