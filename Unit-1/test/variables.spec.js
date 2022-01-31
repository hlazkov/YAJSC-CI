const { expect } = require('chai');
const vars = require('../variables');

describe('Unit 1 - Easy - Variables and Data Types', () => {

  it('"myNum" variable should be created', () => {
    expect(vars.myNum).to.equal(74);
  });

  it('"myText" variable should be created', () => {
    expect(vars.myText).to.equal("Jack");
  });

  it('"myBool" variable should be created', () => {
    expect(vars.myBool).to.equal(false);
  });

  it('"myNull" variable should be created', () => {
    expect(vars.myNull).to.equal(null);
  });

  it('"myUndefined" variable should be created', () => {
    expect(vars.myUndefined).to.equal(undefined);
  });

  const expectedArr = [2,3,4,5,6,7];
  it('"myArr" variable should be created', () => {
    expect(Array.isArray(vars.myArr)).to.equal(true);
    expect(vars.myArr.length, '"myArr" length is not correct').to.equal(expectedArr.length)
    vars.myArr.forEach((el, i) => {
      expect(el, `myArr[${i}] variable is not correct`).to.equal(expectedArr[i]);
    });
  });

  it('"fourthElement" variable should be created', () => {
    expect(vars.fourthElement).to.equal(expectedArr[3]);
  });

  it('"myNum2" variable should be created', () => {
    expect(vars.myNum2).to.equal(74/2);
  });

  it('"myText2" variable should be created', () => {
    expect(vars.myText2).to.equal("Jack is 37");
  });

  it('"myObj" variable should be created', () => {
    expect(typeof vars.myObj).to.equal('object');
    expect(vars.myObj.firstName).to.equal('John');
    expect(vars.myObj.lastName).to.equal('Dou');
    expect(vars.myObj.fullName).to.equal('John Dou');
  });

});

describe('Unit 1 - Normal - Variables and Data Types', () => {

  it('"myBool2" variable should be created', () => {
    expect(vars.myBool2).to.equal(false);
  });

  it('"myBool3" variable should be created', () => {
    expect(vars.myBool3).to.equal(false);
  });

  it('"myUndefined2" variable should be created', () => {
    expect(vars.myUndefined2).to.equal(undefined);
  });

});
