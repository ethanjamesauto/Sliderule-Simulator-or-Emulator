
var multiplicationLessons = {};

multiplicationLessons ['Simple Multiplication (A/B)'] = function (message) {
  var a = rndlist ([2, 3, 4, 5, 6, 7, 8, 9, 10]);
  var b = rndlist ([2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return [
    {action: function () {ensureSide (["A", "B"]);}, delay: 100},
    {action: function () {message ("The task : multiply " + a + " by " + b + " using A/B scales.");}, delay: 1000},
    {action: function () {isolate (["A", "B"]); changeMarkings ('hairline', true);}, delay: 2000},
    {action: function () {message ("Move the cursor to " + a + " on the A scale.");}, delay: 2000},
    {action: function () {cursorTo ("A", a);}, delay: 2000},
    {action: function () {message ("Align the left index (1) on B with the cursor.");}, delay: 4000},
    {action: function () {slideTo ("B", 1);}, delay: 2000},
    {action: function () {message ("Move the cursor to " + b + " on the B scale.");}, delay: 4000},
    {action: function () {cursorTo ("B", b);}, delay: 1000},
    {action: function () {message ("Then read the result " + (a * b) + " on the A scale.");}, delay: 4000},
    {action: function () {cursorTo ("A", 1); slideTo ("B", 1);
    sliderules . objective = function () {
      if (checkValue ("D", a * b / 10) && checkValue ("C", b)) {
        message ("Mission accomplished!");
        increaseCookieResult ('Simple Multiplication (A/B)');
        return true;
      }
      return false;};}, delay: 6000},
    {action: function () {isolate (); changeMarkings ('hairline', false);}, delay: 2000},
    {action: function () {message ("Try these instructions again.");}, delay: 2000},
    {action: function () {message ("Practice makes perfect.");}, delay: 1000}
  ];
};

multiplicationLessons ['Simple Multiplication (C/D)'] = function (message) {
  var a = 9, b = 9;
  while (a * b > 10) {a = Math . floor (11 + Math . random () * 100) / 10; b = Math . floor (11 + Math . random () * 100) / 10;}
  return [
    {action: function () {ensureSide (["C", "D"]);}, delay: 100},
    {action: function () {message ("The task: multiply " + a + " by " + b + " using C/D scales.");}, delay: 1000},
    {action: function () {isolate (["C", "D"]); changeMarkings ('hairline', true);}, delay: 2000},
    {action: function () {message ("Move the cursor to " + a + " on the D scale.");}, delay: 2000},
    {action: function () {cursorTo ("D", a);}, delay: 2000},
    {action: function () {message ("Align the left index (1) on C with the cursor.");}, delay: 4000},
    {action: function () {slideTo ("C", 1);}, delay: 2000},
    {action: function () {message ("Move the cursor to " + b + " on the C scale.");}, delay: 4000},
    {action: function () {cursorTo ("C", b);}, delay: 1000},
    {action: function () {message ("Read the result " + Number (a * b) . toFixed (2) + " on the D scale.");}, delay: 4000},
    {action: function () {cursorTo ("D", 1); slideTo ("C", 1);
    sliderules . objective = function () {
      if (checkValue ("D", a * b / 10) && checkValue ("C", b)) {
        message ("Mission accomplished!");
        increaseCookieResult ('Simple Multiplication (C/D)');
        return true;
      }
      return false;};}, delay: 6000},
    {action: function () {isolate (); changeMarkings ('hairline', false);}, delay: 2000},
    {action: function () {message ("Try these instructions again.");}, delay: 2000},
    {action: function () {message ("Practice makes perfect.");}, delay: 1000}
  ];
};

multiplicationLessons ['Wrap-around multiplication (C/D)'] = function (message) {
  var a = 1, b = 1;
  while (a * b < 10 || a * b > 100) {a = Math . floor (11 + Math . random () * 100) / 10; b = Math . floor (11 + Math . random () * 100) / 10;}
  return [
    {action: function () {ensureSide (["C", "D"]);}, delay: 100},
    {action: function () {message ("The task: multiply " + a + " by " + b + " using C/D scales.");}, delay: 1000},
    {action: function () {isolate (["C", "D"]); changeMarkings ('hairline', true);}, delay: 2000},
    {action: function () {message ("Move the cursor to " + a + " on the D scale.");}, delay: 2000},
    {action: function () {cursorTo ("D", a);}, delay: 2000},
    {action: function () {message ("Align the right index (10) on C with the cursor.");}, delay: 4000},
    {action: function () {slideTo ("C", 10);}, delay: 2000},
    {action: function () {message ("Move the cursor to " + b + " on the C scale.");}, delay: 4000},
    {action: function () {cursorTo ("C", b);}, delay: 1000},
    {action: function () {message ("Read the value " + Number (a * b / 10) . toFixed (3) + " on the D scale.");}, delay: 4000},
    {action: function () {message ("Adjust the decimal place and obtain the result of " + Number (a * b) . toFixed (2) + ".");}, delay: 2000},
    {action: function () {cursorTo ("D", 1); slideTo ("C", 1);
    sliderules . objective = function () {
      if (checkValue ("D", a * b / 10) && checkValue ("C", b)) {
        message ("Mission accomplished!");
        increaseCookieResult ('Wrap-around multiplication (C/D)');
        return true;
      }
      return false;};}, delay: 6000},
    {action: function () {isolate (); changeMarkings ('hairline', false);}, delay: 2000},
    {action: function () {message ("Try these instructions again.");}, delay: 2000},
    {action: function () {message ("Practice makes perfect.");}, delay: 1000}
  ];
};

multiplicationLessons ['Folded-scale multiplication (C/D/CF/DF)'] = function (message) {
  var a = 1, b = 1;
  while (a * b < 10 || a * b > Math . PI * 10 || b < Math . PI) {
    a = Math . floor (11 + Math . random () * 100) / 10;
    b = Math . floor (11 + Math . random () * 100) / 10;
  }
  return [
    {action: function () {ensureSide (["C", "D", "CF", "DF"]);}, delay: 100},
    {action: function () {message ("The task: multiply " + a + " by " + b + " using C/D scales.");}, delay: 1000},
    {action: function () {isolate (["C", "D", "CF", "DF"]); changeMarkings ('hairline', true);}, delay: 2000},
    {action: function () {message ("Move the cursor to " + a + " on the D scale.");}, delay: 2000},
    {action: function () {cursorTo ("D", a);}, delay: 2000},
    {action: function () {message ("Align the left index (1) on C with the cursor.");}, delay: 4000},
    {action: function () {slideTo ("C", 1);}, delay: 2000},
    {action: function () {message ("Move the cursor to " + (b / 10) . toFixed (2) + " on the CF scale.");}, delay: 4000},
    {action: function () {cursorTo ("CF", b / 10);}, delay: 1000},
    {action: function () {message ("Read the value " + Number (a * b / 10) . toFixed (3) + " on the DF scale.");}, delay: 4000},
    {action: function () {message ("Adjust the decimal place and obtain the result of " + Number (a * b) . toFixed (2) + ".");}, delay: 2000},
    {action: function () {cursorTo ("D", 1); slideTo ("C", 1);
    sliderules . objective = function () {
      if (checkValue ("DF", a * b / 10) && checkValue ("CF", b / 10)) {
        message ("Mission accomplished!");
        increaseCookieResult ('Folded-scale multiplication (C/D/CF/DF)');
        return true;
      }
      return false;};}, delay: 6000},
    {action: function () {isolate (); changeMarkings ('hairline', false);}, delay: 2000},
    {action: function () {message ("Try these instructions again.");}, delay: 2000},
    {action: function () {message ("Practice makes perfect.");}, delay: 1000}
  ];
};

for (var ind in multiplicationLessons) {
  var option = document . createElement ('option');
  option . text = ind;
  document . getElementById ('lessons') . add (option);
}