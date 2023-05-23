const {describe, it} = require('mocha');
const {expect} = require('chai');
const sinon = require('sinon');
const {addNumbers, calculateSum, countdown, delayedGreeting, countdown2, greetWithDelay} = require('../callbacks');

describe('Unit 6 - Easy - Callbacks:', () => {
    describe('Task 1 - addNumbers', function() {
        it('should correctly add two numbers', function() {
          const result = addNumbers(2, 3, function(sum) {
            expect(sum).to.equal(5);
          });
        });
      
        it('should correctly handle negative numbers', function() {
          const result = addNumbers(-5, 10, function(sum) {
            expect(sum).to.equal(5);
          });
        });
      
        it('should correctly handle zero as an input', function() {
          const result = addNumbers(0, 7, function(sum) {
            expect(sum).to.equal(7);
          });
        });
    });

    describe('Task 2 - calculateSum', function() {
        it('should calculate the sum of an array of numbers', function() {
          const arr = [1, 2, 3, 4, 5];
          calculateSum(arr, function(result) {
            expect(result).to.equal(15);
          });
        });
      
        it('should correctly handle an empty array', function() {
          const arr = [];
          calculateSum(arr, function(result) {
            expect(result).to.equal(0);
          });
        });
      
        it('should correctly handle negative numbers', function() {
          const arr = [-1, -2, -3, -4, -5];
          calculateSum(arr, function(result) {
            expect(result).to.equal(-15);
          });
        });
    });

    describe('Task 3 - countdown', function() {
        it('should call the callback function when duration is less than 0', function() {
          const cb = sinon.spy();
      
          countdown(-1, cb);
          expect(cb.calledOnce, 'Callback was called more than 1 time').to.be.true;
        });

        it('should call the callback function when duration is equal to 0', function() {
            const cb = sinon.spy();
        
            countdown(0, cb);
            expect(cb.calledOnce, 'Callback was called more than 1 time').to.be.true;
        });
      
        it('should print the numbers from 0 to 3 if duration is 3', function() {
          const cb = sinon.spy();
          const consoleSpy = sinon.spy(console, 'log');
      
          countdown(3, cb);
          expect(consoleSpy.callCount, 'Number of console.logs is not correct').to.equal(4);
          expect(consoleSpy.firstCall.calledWithExactly(0), 'First console.log is not correct').to.be.true;
          expect(consoleSpy.secondCall.calledWithExactly(1), 'Second console.log is not correct').to.be.true;
          expect(consoleSpy.thirdCall.calledWithExactly(2), 'Third console.log is not correct').to.be.true;
          expect(consoleSpy.lastCall.calledWithExactly(3), 'Last console.log is not correct').to.be.true;
      
          consoleSpy.restore();
        });
    });

    describe('Task 4 - delayedGreeting', function() {
        it('should call the callback with the delayed greeting', function(done) {
          const name = 'Alice';
          const callback = sinon.spy();
      
          delayedGreeting(name, callback);
      
          setTimeout(function() {
            expect(callback.calledOnce, 'Callback was called more than 1 time').to.be.true;
            expect(callback.calledWithExactly(`Hello, ${name}!`), `Callback was not called with text "Hello, ${name}!"`).to.be.true;
            done();
          }, 1000);
        });
    });
});

describe('Unit 6 - Normal - Callbacks:', () => {
    describe('Task 1 - greetWithDelay', function() {
        let clock;
      
        beforeEach(function() {
          clock = sinon.useFakeTimers();
        });
      
        afterEach(function() {
          clock.restore();
        });
      
        it('should call the callback function with the correct arguments after the specified delay', function() {
          const callback = sinon.spy();
      
          greetWithDelay('John', 2, callback);
      
          // Fast-forward the timers by 2 seconds
          clock.tick(2000);
      
          expect(callback.calledOnce, 'Callback was called more than 1 time').to.be.true;
          expect(callback.calledWithExactly('John', 'Welcome to the session.'),  'Callback was not correctly. Should be cb(name, greetingMessage)').to.be.true;
        });
    });
});

describe('Unit 6 - Hard - Callbacks:', () => {
    describe('Task 1 - countdown2', function() {
        let clock;

        beforeEach(function() {
            clock = sinon.useFakeTimers();
        });

        afterEach(function() {
            clock.restore();
        });

        it('should call the callback function after the countdown finishes', function(done) {
            const callback = sinon.spy();

            countdown2(5, callback);

            // Fast-forward the timers by 5 seconds
            clock.tick(6000);

            expect(callback.calledOnce, 'Callback was called more than 1 time').to.be.true;
            done();
        });

        it('should log the correct number of seconds at each interval', function() {
            const callback = sinon.spy();
            const consoleSpy = sinon.spy(console, 'log');

            countdown2(3, callback);

            // Fast-forward the timers by 3 seconds
            clock.tick(3000);

            expect(consoleSpy.callCount, 'Console.log was not called correct amount of times').to.equal(4);
            expect(consoleSpy.getCall(0).calledWithExactly(3), 'First console.log is not correct. Should be 3').to.be.true;
            expect(consoleSpy.getCall(1).calledWithExactly(2), 'Second console.log is not correct. Should be 2').to.be.true;
            expect(consoleSpy.getCall(2).calledWithExactly(1), 'Third console.log is not correct. Should be 1').to.be.true;
            expect(consoleSpy.lastCall.calledWithExactly(0), 'Last console.log is not correct. Should be 0').to.be.true;

            consoleSpy.restore();
        });
    });
});
