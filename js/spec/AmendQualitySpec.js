describe("amendQuality()", function() {

  it("calls right functions that say how much to change quality by", function() {
    const shop = new Shop([ new Item("foo", 0, 0) ]);
    const item = function() { }
    Object.defineProperty(item, "name", { value: "Aged Brie" });
    spyOn(shop, 'agedBrieQuality')
    shop.amendQuality(item);
    expect(shop.agedBrieQuality).toHaveBeenCalled();
  })
});
