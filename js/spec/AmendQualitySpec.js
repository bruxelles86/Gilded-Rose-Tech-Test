describe("amendQuality()", function() {

  it("calls aged brie quality function if passed aged brie", function() {
    const shop = new Shop([ new Item("foo", 0, 0) ]);
    const item = function() { }
    Object.defineProperty(item, "name", { value: "Aged Brie" });
    spyOn(shop, 'agedBrieQuality')
    shop.amendQuality(item);
    expect(shop.agedBrieQuality).toHaveBeenCalled();
  })

  it("calls sulfuras quality function if passed sulfuras", function() {
    const shop = new Shop([ new Item("foo", 0, 0) ]);
    const item = function() { }
    Object.defineProperty(item, "name", { value: "Sulfuras" });
    spyOn(shop, 'sulfurasQuality')
    shop.amendQuality(item)
    expect(shop.sulfurasQuality).toHaveBeenCalled();
  })

  it("Calls backstage passes quality function if passed passes", function() {
    const shop = new Shop([ new Item("foo", 0, 0) ]);
    const item = function() { }
    Object.defineProperty(item, "name", { value: "Backstage passes to a TAFKAL80ETC concert" });
    spyOn(shop, 'passesQuality')
    shop.amendQuality(item)
    expect(shop.passesQuality).toHaveBeenCalled();
  })

  it("Calls conjured quality function if passed conjured", function() {
    const shop = new Shop([ new Item("foo", 0, 0) ]);
    const item = function() { }
    Object.defineProperty(item, "name", { value: "Conjured" });
    spyOn(shop, 'conjuredQuality')
    shop.amendQuality(item)
    expect(shop.conjuredQuality).toHaveBeenCalled();
  })

  it("Calls default quality function if passed none of the above", function() {
    const shop = new Shop([ new Item("foo", 0, 0) ]);
    const item = function() { }
    spyOn(shop, 'defaultQuality')
    shop.amendQuality(item)
    expect(shop.defaultQuality).toHaveBeenCalled();
  })
});
