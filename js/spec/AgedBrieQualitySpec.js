describe("agedBrieQuality", function() {

  function DummyItem(name) {
    this.name = name;
    this.quality = 0
  }

  it("increments quality by 1 if below 50", function() {
    shop = new Shop()
    item = new DummyItem("Aged Brie")
    shop.agedBrieQuality(item);
    expect(item.quality).toEqual(1);
  });
});
