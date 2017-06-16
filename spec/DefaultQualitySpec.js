describe("conjuredQuality", function() {

  function DummyItem(name, quality) {
    this.name = name;
    this.quality = quality
  }

  beforeEach(function() {
    const shop = new Shop()
  });

  it("degrades in quality twice as fast as a 'normal' item", function(){
    const item = new DummyItem("Non-special item", 5)
    shop._defaultQuality(item);
    expect(item.quality).toEqual(5 - shop.degradeRate);
  });

  it("cannot reduce item quality below zero", function() {
    const item = new DummyItem("Non-special item", 0)
    shop._defaultQuality(item);
    expect(item.quality).toEqual(0);
  })
});
