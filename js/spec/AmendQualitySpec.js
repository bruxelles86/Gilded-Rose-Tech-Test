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
    Object.defineProperty(item, "name", { value: "Backstage passes" });
    spyOn(shop, 'passesQuality')
    shop.amendQuality(item)
    expect(shop.passesQuality).toHaveBeenCalled();
  })
});
