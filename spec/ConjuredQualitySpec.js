describe("conjuredQuality", function() {

  function DummyItem(quality) {
    this.quality = quality
  }

  it("degrades in quality twice as fast as a 'normal' item", function(){
    const shop = new Shop()
    const item = new DummyItem(5)
    shop._conjuredQuality(item);
    expect(item.quality).toEqual(5 - (shop.degradeRate * 2));
  });

  it("cannot reduce item quality below zero", function() {
    const item = new DummyItem(0)
    shop._conjuredQuality(item);
    expect(item.quality).toEqual(0);
  })
});
