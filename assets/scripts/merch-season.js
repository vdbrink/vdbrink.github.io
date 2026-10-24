// Shows a seasonal gift line in the homepage merchandise card.
(function () {
  var el = document.getElementById('merch-season');
  if (!el) { return; }
  var d = new Date();
  var m = d.getMonth() + 1;
  var day = d.getDate();
  var msg = '';
  if (m === 11) {
    msg = 'Sinterklaas and Christmas are coming: find a nerdy present for 5 December or a geeky gift to put under the tree!';
  } else if (m === 6) {
    var firstDay = new Date(d.getFullYear(), 5, 1).getDay();
    var fathersDay = 1 + ((7 - firstDay) % 7) + 14;
    if (day <= fathersDay) { msg = "Father's Day is coming: a gift for the dad who automates everything?"; }
  }
  if (msg) { el.textContent = msg; el.style.display = 'block'; }
})();
