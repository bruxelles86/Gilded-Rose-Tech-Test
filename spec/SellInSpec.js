describe("sellIn", function(){
  function DummyItem(sellIn) {
    this.sellIn = sellIn
  }

  it("reduces item sellIn value by one", function(){
    const item = new DummyItem(1)
    shop._sellIn(item)
    expect(item.sellIn).toEqual(0)
  });
});
