var assert = require ('chai').assert;
var sayHello = require ('../first').sayHello;
var addNumbers = require ('../first').addNumbers;
var angkaLima = require ('../first').angkaLima;
//var first = require ('../first');

describe ('Jajal Test', function(){
  describe('sayHello', function(){
    it('sayHello should return Hello World', function(){
      let result = sayHello();
      assert.equal(result, 'Hello World');
    });

    it('sayHello should return type string', function(){
      let result = sayHello();
      assert.typeOf(result, 'string');
    });

  });

  describe('angkaLima', function(){
    it('ini angka berupa string', function(){
      let result = angkaLima(7);
      assert.typeOf(result, 'string');
    });
  });

  describe('addNumbers', function(){
    it('addNumbers should be above 5', function(){
      let result = addNumbers(5, 5);
      assert.isAbove(result, 5);
    });

    it('addNumbers should return type number', function(){
      let result = addNumbers(5, 5);
      assert.typeOf(result, 'number');
    });
  });
});
