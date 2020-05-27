(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.TimeTable = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  /*
   * @Author: your name
   * @Date: 2020-05-27 14:30:59
   * @LastEditTime: 2020-05-27 16:16:52
   * @LastEditors: Please set LastEditors
   * @Description: In User Settings Edit
   * @FilePath: /vue-test/Users/haotang/Desktop/test/timeTable/src/main.js
   */
  var TimeTable = function TimeTable(options) {
    _classCallCheck(this, TimeTable);

    console.log(options);
  };

  return TimeTable;

})));
//# sourceMappingURL=time-table.js.map
