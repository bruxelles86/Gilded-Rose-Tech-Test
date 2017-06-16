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

  it("correctly alters backstage pass properties when sellIn above 10", function(){
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 11, 1)
    const shop = new Shop([item])
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(0)
    expect(shop.items[0].sellIn).toEqual(10)
  });

  it("correctly alters backstage pass properties when sellIn between 5 and 10", function(){
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 8, 0)
    const shop = new Shop([item])
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(2)
    expect(shop.items[0].sellIn).toEqual(7)
  });

  it("correctly alters backstage pass properties when sellIn between 0 and 5", function(){
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 4, 0)
    const shop = new Shop([item])
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(3)
    expect(shop.items[0].sellIn).toEqual(3)
  });

  it("correctly alters backstage pass properties when sellIn is zero", function(){
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", -1, 5)
    const shop = new Shop([item])
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(0)
    expect(shop.items[0].sellIn).toEqual(-2)
  });

  it("correctly alters conjured properties", function() {
    const item = new Item("Conjured", 3, 5)
    const shop = new Shop([item])
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(3)
    expect(shop.items[0].sellIn).toEqual(2)
  })

  it("correctly alters properties for non-special items", function() {
    const item = new Item("Any random item", 3, 5)
    const shop = new Shop([item])
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(4)
    expect(shop.items[0].sellIn).toEqual(2)
  })
});
