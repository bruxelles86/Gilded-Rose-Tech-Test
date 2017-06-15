describe("updateQuality()", function() {

  it("should call shop's amendQuality function", function() {
    const shop = new Shop([ new Item("foo", 0, 0) ]);
    spyOn(shop, 'amendQuality')
    shop.updateQuality();
    expect(shop.amendQuality).toHaveBeenCalled();
  });

  it("should call the shop's amendSellIn function", function() {
    const shop = new Shop([ new Item("foo", 0, 0) ]);
    spyOn(shop, 'amendSellIn')
    shop.updateQuality();
    expect(shop.amendSellIn).toHaveBeenCalled();
  });
});
