describe("amendQuality()", function() {

  function DummyItem(name) {
    this.name = name;
  }

  it("calls aged brie quality function if passed aged brie", function() {
    const shop = new Shop([ new DummyItem("Aged Brie") ]);
    spyOn(shop, '_agedBrieQuality')
    shop._amendQuality(shop.items[0]);
    expect(shop._agedBrieQuality).toHaveBeenCalled();
  })

  it("Calls backstage passes quality function if passed passes", function() {
    const shop = new Shop([ new DummyItem("Backstage passes to a TAFKAL80ETC concert") ]);
    spyOn(shop, '_passesQuality')
    shop._amendQuality(shop.items[0])
    expect(shop._passesQuality).toHaveBeenCalled();
  })

  it("Calls conjured quality function if passed conjured", function() {
    const shop = new Shop([ new DummyItem("Conjured") ]);
    spyOn(shop, '_conjuredQuality')
    shop._amendQuality(shop.items[0])
    expect(shop._conjuredQuality).toHaveBeenCalled();
  })

  it("Calls default quality function if passed none of the above", function() {
    const shop = new Shop([ new DummyItem("Non-special Item") ]);
    spyOn(shop, '_defaultQuality')
    shop._amendQuality(shop.items[0])
    expect(shop._defaultQuality).toHaveBeenCalled();
  })
});
