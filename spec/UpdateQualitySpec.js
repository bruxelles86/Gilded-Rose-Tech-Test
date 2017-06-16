describe("updateQuality()", function() {

  it("should call shop's amendQuality function", function() {
    const shop = new Shop([ new Item("foo", 0, 0) ]);
    spyOn(shop, '_amendQuality')
    spyOn(shop, '_amendSellIn')
    shop._updateQuality();
    expect(shop._amendQuality).toHaveBeenCalled();
  });

  it("should call the shop's amendSellIn function", function() {
    const shop = new Shop([ new Item("foo", 0, 0) ]);
    spyOn(shop, '_amendSellIn')
    spyOn(shop, '_amendQuality')
    shop._updateQuality();
    expect(shop._amendSellIn).toHaveBeenCalled();
  });
});
