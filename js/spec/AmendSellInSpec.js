describe("amendSellIn()", function() {

  it("calls aged brie SellIn function if passed aged brie", function() {
    const shop = new Shop([ new Item("Aged Brie", 0, 0) ]);
    spyOn(shop, 'agedBrieSellIn')
    shop.amendSellIn(shop.items[0]);
    expect(shop.agedBrieSellIn).toHaveBeenCalled();
  })

  it("calls sulfuras SellIn function if passed sulfuras", function() {
    const shop = new Shop([ new Item("Sulfuras", 0, 0) ]);
    spyOn(shop, 'sulfurasSellIn')
    shop.amendSellIn(shop.items[0])
    expect(shop.sulfurasSellIn).toHaveBeenCalled();
  })

  it("Calls backstage passes SellIn function if passed passes", function() {
    const shop = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0) ]);
    spyOn(shop, 'passesSellIn')
    shop.amendSellIn(shop.items[0])
    expect(shop.passesSellIn).toHaveBeenCalled();
  })

  it("Calls conjured SellIn function if passed conjured", function() {
    const shop = new Shop([ new Item("Conjured", 0, 0) ]);
    spyOn(shop, 'conjuredSellIn')
    shop.amendSellIn(shop.items[0])
    expect(shop.conjuredSellIn).toHaveBeenCalled();
  })

  it("Calls default SellIn function if passed none of the above", function() {
    const shop = new Shop([ new Item("Non-special Item", 0, 0) ]);
    spyOn(shop, 'defaultSellIn')
    shop.amendSellIn(shop.items[0])
    expect(shop.defaultSellIn).toHaveBeenCalled();
  })
});
