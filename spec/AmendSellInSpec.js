describe("amendSellIn()", function() {

  function DummyItem(name) {
    this.name = name;
  }

  it("calls aged sellIn function if passed aged brie", function() {
    const shop = new Shop([ new DummyItem("Aged Brie") ]);
    spyOn(shop, '_sellIn')
    shop._amendSellIn(shop.items[0]);
    expect(shop._sellIn).toHaveBeenCalled();
  })

  it("Calls passes sellIn function if passed passes", function() {
    const shop = new Shop([ new DummyItem("Backstage passes to a TAFKAL80ETC concert") ]);
    spyOn(shop, '_sellIn')
    shop._amendSellIn(shop.items[0])
    expect(shop._sellIn).toHaveBeenCalled();
  })

  it("Calls sellIn function if passed conjured", function() {
    const shop = new Shop([ new DummyItem("Conjured") ]);
    spyOn(shop, '_sellIn')
    shop._amendSellIn(shop.items[0])
    expect(shop._sellIn).toHaveBeenCalled();
  })

  it("Calls sellIn function if passed none of the above", function() {
    const shop = new Shop([ new DummyItem("Non-special Item") ]);
    spyOn(shop, '_sellIn')
    shop._amendSellIn(shop.items[0])
    expect(shop._sellIn).toHaveBeenCalled();
  })
});
