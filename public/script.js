'use strict';

(() => {
  
  function updateTime() {
    $('#time').text(moment().format('LT'));
    setTimeout(updateTime, 20000);
  }

  updateTime();
})();
