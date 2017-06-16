describe("amendSellIn()", function() {

  function DummyItem(name) {
    this.name = name;
  }

  it("calls aged brie SellIn function if passed aged brie", function() {
    const shop = new Shop([ new DummyItem("Aged Brie") ]);
    spyOn(shop, 'agedBrieSellIn')
    shop.amendSellIn(shop.items[0]);
    expect(shop.agedBrieSellIn).toHaveBeenCalled();
  })

  it("Calls backstage passes SellIn function if passed passes", function() {
    const shop = new Shop([ new DummyItem("Backstage passes to a TAFKAL80ETC concert") ]);
    spyOn(shop, 'passesSellIn')
    shop.amendSellIn(shop.items[0])
    expect(shop.passesSellIn).toHaveBeenCalled();
  })

  it("Calls conjured SellIn function if passed conjured", function() {
    const shop = new Shop([ new DummyItem("Conjured") ]);
    spyOn(shop, 'conjuredSellIn')
    shop.amendSellIn(shop.items[0])
    expect(shop.conjuredSellIn).toHaveBeenCalled();
  })

  it("Calls default SellIn function if passed none of the above", function() {
    const shop = new Shop([ new DummyItem("Non-special Item") ]);
    spyOn(shop, 'defaultSellIn')
    shop.amendSellIn(shop.items[0])
    expect(shop.defaultSellIn).toHaveBeenCalled();
  })
});
