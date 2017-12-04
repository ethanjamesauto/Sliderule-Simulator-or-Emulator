
var reciprocalLessons = {};

reciprocalLessons ['Divide using CI scale'] = function (message) {
  var a = 0, b = 0, ab = 0;
  while (ab > 10 || a <= 1 || b <= 1) {
    a = 1 + crnu (Math . floor (Math . random () * 100) / 10);
    b = 1 + crnu (Math . floor (Math . random () * 100) / 10);
    ab = crnu (a * b);
  }
  return [
    {action: function () {ensureSide (["CI", "D"]); isolate (["CI", "D"]); dimmm (255, 80, 8); changeMarkings ('hairline', true);}, delay: 100},
    {action: function () {message ("The task: divide " + ab + " by " + b + " using CI scale.");}, delay: 500},
    {action: function () {message ("Move cursor to " + ab + " on the D scale.");}, delay: 2000},
    {action: function () {cursorTo ('D', ab);}, delay: 1500},
    {action: function () {message ("Align 1 on the CI scale with the cursor.");}, delay: 3000},
    {action: function () {slideTo ('CI', 1);}, delay: 1000},
    {action: function () {message ("Move cursor to " + b + " on the CI scale.");}, delay: 3000},
    {action: function () {cursorTo ('CI', b);}, delay: 1000},
    {action: function () {message ("Read the result of " + a + " on the D scale.");}, delay: 3000},
    {action: function () {cursorTo ('D', 1); slideTo ('CI', 10); dimmm (80, 255, 8);
      sliderules . objective = function () {
        if (checkValue ('D', a) && checkValue ('CI', b)) {message ("Mission accomplished!"); increaseCookieResult ('Divide using CI scale'); return true;}
        return false;
      };}, delay: 6000},
    {action: function () {isolate (); message ("Try these instructions again.");}, delay: 4000}
  ];
};

reciprocalLessons ['Multiply using CI scale'] = function (message) {
  var a = 0, b = 0, ab = 0;
  while (ab > 10 || a <= 1 || b <= 1) {
    a = 1 + crnu (Math . floor (Math . random () * 100) / 10);
    b = 1 + crnu (Math . floor (Math . random () * 100) / 10);
    ab = crnu (a * b);
  }
  return [
    {action: function () {ensureSide (["CI", "D"]); isolate (["CI", "D"]); dimmm (255, 80, 8); changeMarkings ('hairline', true);}, delay: 100},
    {action: function () {message ("The task: multiply " + a + " by " + b + " using CI scale.");}, delay: 500},
    {action: function () {message ("Move cursor to " + a + " on the D scale.");}, delay: 2000},
    {action: function () {cursorTo ('D', a);}, delay: 1500},
    {action: function () {message ("Align " + b + " on the CI scale with the cursor.");}, delay: 3000},
    {action: function () {slideTo ('CI', b);}, delay: 1000},
    {action: function () {message ("Move cursor to 1 on the CI scale.");}, delay: 3000},
    {action: function () {cursorTo ('CI', 1);}, delay: 1000},
    {action: function () {message ("Read the result of " + ab + " on the D scale.");}, delay: 3000},
    {action: function () {cursorTo ('D', 1); slideTo ('CI', 10); dimmm (80, 255, 8);
      sliderules . objective = function () {
        if (checkValue ('CI', 1) && checkValue ('D', ab)) {message ("Mission accomplished!"); increaseCookieResult ('Multiply using CI scale'); return true;}
        return false;
      };}, delay: 6000},
    {action: function () {isolate (); message ("Try these instructions again.");}, delay: 4000}
  ];
};

slideruleLessons . push (reciprocalLessons);
