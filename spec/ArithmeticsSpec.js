describe('Arithmetics', function() {

  describe('#add(a,b)', function() {
    it('calculates the sum of two numbers', function() {
      // ARRANGE
      var a = 3;
      var b = 4;
      var expected = 7;

      // ACT
      var actual = Arithmetics.add(a, b);

      // ASSERT
      expect(actual).toEqual(expected);
    });

    it('calculates the sum of other two numbers', function() {
      // ARRANGE
      var a = 73;
      var b = 89;
      var expected = 162;

      // ACT
      var actual = Arithmetics.add(a, b);

      // ASSERT
      expect(actual).toEqual(expected);
    });
  });

  describe('#subtract(a,b)', function() {
    it('calculates the difference of two numbers (positive)', function() {
      // ARRANGE
      var a = 8;
      var b = 5;
      var expected = 3;

      // ACT
      var actual = Arithmetics.subtract(a, b);

      // ASSERT
      expect(actual).toEqual(expected);
    });

    it('calculates the difference of two numbers (negative)', function() {
      // ARRANGE
      var a = 5;
      var b = 8;
      var expected = -3;

      // ACT
      var actual = Arithmetics.subtract(a, b);

      // ASSERT
      expect(actual).toEqual(expected);
    });
  });

  describe('#multiply(a,b)', function() {
    it('calculates the product of two numbers (-, -)', function() {
      // ARRANGE
      var a = -8;
      var b = -5;
      var expected = 40;

      // ACT
      var actual = Arithmetics.multiply(a, b);

      // ASSERT
      expect(actual).toEqual(expected);
    });

    it('calculates the product of two numbers (+, +)', function() {
      // ARRANGE
      var a = 7;
      var b = 12;
      var expected = 84;

      // ACT
      var actual = Arithmetics.multiply(a, b);

      // ASSERT
      expect(actual).toEqual(expected);
    });

    it('calculates the product of two numbers (+, -)', function() {
      // ARRANGE
      var a = 22;
      var b = -6;
      var expected = -132;

      // ACT
      var actual = Arithmetics.multiply(a, b);

      // ASSERT
      expect(actual).toEqual(expected);
    });
  });

  describe('#divide(a,b)', function() {
    it('calculates the quotient of two numbers (-, -)', function() {
      // ARRANGE
      var a = -8;
      var b = -5;
      var expected = 1.6;

      // ACT
      var actual = Arithmetics.divide(a, b);

      // ASSERT
      expect(actual).toEqual(expected);
    });

    it('calculates the quotient of two numbers (+, +)', function() {
      // ARRANGE
      var a = 7;
      var b = 12;
      var expected = 0.58;

      // ACT
      var actual = Arithmetics.divide(a, b);

      // ASSERT
      expect(actual).toEqual(expected);
    });

    it('calculates the quotient of two numbers (+, -)', function() {
      // ARRANGE
      var a = 22;
      var b = -6;
      var expected = -3.67;

      // ACT
      var actual = Arithmetics.divide(a, b);

      // ASSERT
      expect(actual).toEqual(expected);
    });
  });

});
