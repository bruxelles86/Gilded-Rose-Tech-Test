describe("amendQuality()", function() {

  it("calls aged brie quality function if passed aged brie", function() {
    const shop = new Shop([ new Item("Aged Brie", 0, 0) ]);
    spyOn(shop, 'agedBrieQuality')
    shop.amendQuality(shop.items[0]);
    expect(shop.agedBrieQuality).toHaveBeenCalled();
  })

  it("calls sulfuras quality function if passed sulfuras", function() {
    const shop = new Shop([ new Item("Sulfuras", 0, 0) ]);
    spyOn(shop, 'sulfurasQuality')
    shop.amendQuality(shop.items[0])
    expect(shop.sulfurasQuality).toHaveBeenCalled();
  })

  it("Calls backstage passes quality function if passed passes", function() {
    const shop = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0) ]);
    spyOn(shop, 'passesQuality')
    shop.amendQuality(shop.items[0])
    expect(shop.passesQuality).toHaveBeenCalled();
  })

  it("Calls conjured quality function if passed conjured", function() {
    const shop = new Shop([ new Item("Conjured", 0, 0) ]);
    spyOn(shop, 'conjuredQuality')
    shop.amendQuality(shop.items[0])
    expect(shop.conjuredQuality).toHaveBeenCalled();
  })

  it("Calls default quality function if passed none of the above", function() {
    const shop = new Shop([ new Item("Non-special Item", 0, 0) ]);
    spyOn(shop, 'defaultQuality')
    shop.amendQuality(shop.items[0])
    expect(shop.defaultQuality).toHaveBeenCalled();
  })
});
