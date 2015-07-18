/**
 * Created by KarlFast on 7/17/2015.
 */
var results = '.results > table > tbody > tr';
var pageToOpen = 'http://www.sheetmusicdirect.us/';
var close = '[title=Close]';
var inputField = '[placeholder="What can we help you find?"]';
var fieldToClick = '[title=Search]';

module.exports = {



  'Enter Some Text': function (test) {

    test
      .open(pageToOpen)
      .click(close)


      .setValue(inputField, 'Roll Over Beethoven')
      .click(fieldToClick)
      .assert.numberOfElements(results, 3, 'Roll Over Beethoven has 3 elements')
      .screenshot('pics/Roll-Over-Beethoven.png')

      .setValue(inputField, 'Roll It Over')
      .click(fieldToClick)
      .assert.numberOfElements(results, 4, 'Roll It Over=4')
      .screenshot('pics/Roll-It-Over.png')

      .setValue(inputField, 'Let It Roll')
      .click(fieldToClick)
      .assert.numberOfElements(results).is( 0, 'Let It Roll=3')
      .screenshot('pics/Let-It-Roll.png')

      .setValue(inputField, 'Boch')
      .click(fieldToClick)
      .assert.numberOfElements(results, 1, 'Boch=1')
      .screenshot('pics/Boch.png')


      .done();
  }
};