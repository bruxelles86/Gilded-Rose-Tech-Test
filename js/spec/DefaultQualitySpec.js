describe("conjuredQuality", function() {

  function DummyItem(name, quality) {
    this.name = name;
    this.quality = quality
  }

  it("degrades in quality twice as fast as a 'normal' item", function(){
    const shop = new Shop()
    const item = new DummyItem("Non-special item", 5)
    shop.defaultQuality(item);
    expect(item.quality).toEqual(5 - shop.degradeRate);
  });
});
