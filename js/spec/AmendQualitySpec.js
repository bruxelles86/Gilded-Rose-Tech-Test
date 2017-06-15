describe("amendQuality()", function() {

  it("calls functions that say how much to change quality by", function() {
    const shop = new Shop([ new Item("foo", 0, 0) ]);
    spyOn(shop, 'agedBrieQuality')
    spyOn(shop, 'sulfurasQuality')
    shop.updateQuality();
    expect(shop.agedBrieQuality).toHaveBeenCalled();
    expect(shop.sulfurasQuality).toHaveBeenCalled();
  })
});
