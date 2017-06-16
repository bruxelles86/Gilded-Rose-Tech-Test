describe("passesQuality", function() {

  beforeEach(function() {
    shop = new Shop()
  });

  function DummyItem(name, sellIn, quality) {
    this.name = name;
    this.quality = quality
    this.sellIn = sellIn
  }

  it("increases quality by 2 when sellIn is between 10 and 5", function() {
    item = new DummyItem('Backstage passes to a TAFKAL80ETC concert', 8, 5)
    shop.passesQuality(item);
    expect(item.quality).toEqual(7)
  });

  it("increases quality by 3 when sellIn is between 5 and 0, inclusive", function() {
    item = new DummyItem('Backstage passes to a TAFKAL80ETC concert', 5, 5)
    shop.passesQuality(item);
    expect(item.quality).toEqual(8)
  })

  it("sets quality to zero when sellIn goes below zero", function() {
    item = new DummyItem('Backstage passes to a TAFKAL80ETC concert', -1, 5)
    shop.passesQuality(item);
    expect(item.quality).toEqual(0)

  })
});
