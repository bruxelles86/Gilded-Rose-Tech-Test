describe("Integration tests", function() {

  it("correctly alters aged brie properties", function(){
    const item = new Item("Aged Brie", 3, 0)
    const shop = new Shop([item])
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(1)
    expect(shop.items[0].sellIn).toEqual(2)
  });

  it("correctly doesn't alter sulfuras properties", function(){
    const item = new Item("Sulfuras", 3, 0)
    const shop = new Shop([item])
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(0)
    expect(shop.items[0].sellIn).toEqual(3)
  });
});
