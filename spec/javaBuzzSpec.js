describe('Javabuzz', function() {

  var javabuzz;
  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function(){
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {

    it('divisible by three', function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

  });

  describe('knows when a number is', function() {
    
    it('divisible by 5', function (){
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {

    it('divisible by five', function() {
      expect(javabuzz.isDivisibleByFive(3)).toBe(false);
    });

  });

  describe('knows when a number is', function() {

    it('divisble by three and five', function(){
      expect(javabuzz.isDivisibleByThreeAndFive(15)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {

    it('divisible by three and five', function(){
      expect(javabuzz.isDivisibleByThreeAndFive(16)).toBe(false);
    });

  });

  describe('when playing, says', function() {

    it('"Java" when a number is divisible by three', function() {
      expect(javabuzz.says(3)).toEqual("Java");
    });

  });

  describe('when playing, says', function() {

    it('"Buzz" when a number is divisible by five', function() {
      expect(javabuzz.says(5)).toEqual("Buzz");
    });

  });

  describe('when playing, says', function() {

    it('"Javabuzz" when a number is divisible by three and five', function() {
      expect(javabuzz.says(15)).toEqual("Javabuzz")
    });

  });

  describe('when playing, says', function() {

    it('"the number" when the number is not divisible by three or five', function() {
      expect(javabuzz.says(16)).toEqual(16)
    });

  });

});