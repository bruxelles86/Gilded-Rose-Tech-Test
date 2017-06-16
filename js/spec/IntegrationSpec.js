describe("Integration tests", function() {

  it("correctly alters aged brie properties", function(){
    const item = new Item("Aged Brie", 3, 0)
    const shop = new Shop([item])
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(1)
  });
});
