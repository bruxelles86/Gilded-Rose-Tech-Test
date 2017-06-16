describe("passesQuality", function() {

  beforeEach(function() {
    shop = new Shop()
  });

  function DummyItem(sellIn, quality) {
    this.quality = quality
    this.sellIn = sellIn
  }

  it("increases quality by 2 when sellIn is between 10 and 5", function() {
    const item = new DummyItem(8, 5)
    shop.passesQuality(item);
    expect(item.quality).toEqual(7)
  });

  it("increases quality by 3 when sellIn is between 5 and 0, inclusive", function() {
    const item = new DummyItem(5, 5)
    shop.passesQuality(item);
    expect(item.quality).toEqual(8)
  })

  it("sets quality to zero when sellIn goes below zero", function() {
    const item = new DummyItem(-1, 5)
    shop.passesQuality(item);
    expect(item.quality).toEqual(0)
  })

  it("will not increase quality above 50", function() {
    const item = new DummyItem(8, 50)
    shop.passesQuality(item)
    expect(item.quality).toEqual(50)
  });
});
