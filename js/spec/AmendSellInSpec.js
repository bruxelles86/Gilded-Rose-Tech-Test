describe("amendSellIn()", function() {

  it("calls aged brie SellIn function if passed aged brie", function() {
    const shop = new Shop([ new Item("foo", 0, 0) ]);
    const item = function() { }
    Object.defineProperty(item, "name", { value: "Aged Brie" });
    spyOn(shop, 'agedBrieSellIn')
    shop.amendSellIn(item);
    expect(shop.agedBrieSellIn).toHaveBeenCalled();
  })

  it("calls sulfuras SellIn function if passed sulfuras", function() {
    const shop = new Shop([ new Item("foo", 0, 0) ]);
    const item = function() { }
    Object.defineProperty(item, "name", { value: "Sulfuras" });
    spyOn(shop, 'sulfurasSellIn')
    shop.amendSellIn(item)
    expect(shop.sulfurasSellIn).toHaveBeenCalled();
  })

  it("Calls backstage passes SellIn function if passed passes", function() {
    const shop = new Shop([ new Item("foo", 0, 0) ]);
    const item = function() { }
    Object.defineProperty(item, "name", { value: "Backstage passes to a TAFKAL80ETC concert" });
    spyOn(shop, 'passesSellIn')
    shop.amendSellIn(item)
    expect(shop.passesSellIn).toHaveBeenCalled();
  })

  it("Calls conjured SellIn function if passed conjured", function() {
    const shop = new Shop([ new Item("foo", 0, 0) ]);
    const item = function() { }
    Object.defineProperty(item, "name", { value: "Conjured" });
    spyOn(shop, 'conjuredSellIn')
    shop.amendSellIn(item)
    expect(shop.conjuredSellIn).toHaveBeenCalled();
  })

  it("Calls default SellIn function if passed none of the above", function() {
    const shop = new Shop([ new Item("foo", 0, 0) ]);
    const item = function() { }
    spyOn(shop, 'defaultSellIn')
    shop.amendSellIn(item)
    expect(shop.defaultSellIn).toHaveBeenCalled();
  })
});
