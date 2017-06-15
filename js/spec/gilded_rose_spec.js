describe("updateQuality()", function() {

  it("should call shop's amendQuality function", function() {
    const shop = new Shop([ new Item("foo", 0, 0) ]);
    shop.amendQuality = jasmine.createSpy("amendQuality spy")
    shop.updateQuality(shop.amendQuality);
    expect(shop.amendQuality).toHaveBeenCalled();
  });
});
