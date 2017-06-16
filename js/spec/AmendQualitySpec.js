describe("amendQuality()", function() {

  function DummyItem(name) {
    this.name = name;
  }

  it("calls aged brie quality function if passed aged brie", function() {
    const shop = new Shop([ new DummyItem("Aged Brie") ]);
    spyOn(shop, 'agedBrieQuality')
    shop.amendQuality(shop.items[0]);
    expect(shop.agedBrieQuality).toHaveBeenCalled();
  })

  it("Calls backstage passes quality function if passed passes", function() {
    const shop = new Shop([ new DummyItem("Backstage passes to a TAFKAL80ETC concert") ]);
    spyOn(shop, 'passesQuality')
    shop.amendQuality(shop.items[0])
    expect(shop.passesQuality).toHaveBeenCalled();
  })

  it("Calls conjured quality function if passed conjured", function() {
    const shop = new Shop([ new DummyItem("Conjured") ]);
    spyOn(shop, 'conjuredQuality')
    shop.amendQuality(shop.items[0])
    expect(shop.conjuredQuality).toHaveBeenCalled();
  })

  it("Calls default quality function if passed none of the above", function() {
    const shop = new Shop([ new DummyItem("Non-special Item") ]);
    spyOn(shop, 'defaultQuality')
    shop.amendQuality(shop.items[0])
    expect(shop.defaultQuality).toHaveBeenCalled();
  })
});
