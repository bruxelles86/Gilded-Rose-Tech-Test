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
});
