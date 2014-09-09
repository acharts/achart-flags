/**
 * @fileOverview 图形标记，包含文本和连接线
 * @ignoreig
 */


var Util = require('achart-util'),
  Item = require('achart-plot').Item;

/**
 * @class Chart.Flags.Flag
 * 图形标记，包含文本和连接线
 */
var Flag = function (cfg) {
  Flag.superclass.constructor.call(this,cfg);
};


Flag.ATTRS = {
  /**
   * 显示的文本
   * @type {String}
   */
  text : '',

  /**
   * 文本的配置信息
   * @type {Object}
   */
  textCfg : null,

  /**
   * 连接线的配置信息
   * @type {Object}
   */
  line : null,

  /**
   * 图形的配置信息
   * @type {Object}
   */
  shape : {
    
  },

  /**
   * 类型
   * @type {String}
   */
  type : '',

  /**
   * 关联的点
   * @type {Object}
   */
  point : null

};

Util.extend(Flag,Item);

Util.augment(Flag,{
  //渲染控件
  renderUI : function(){
    var _self = this;
    Flag.superclass.renderUI.call(_self);
  }

});

module.exports = Flag;