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
   * 显示的文本配置信息
   * @type {Object}
   */
  textAttr: null,
  /**
   * 连接线的配置信息
   * @type {Object}
   */
  line : null,
  /**
   * y偏离
   * @type {Number}
   */
  distance: 0,
  /**
   * 图形的配置信息
   * @type {Object}
   */
  shapeAttr : {
    
  },

  /**
   * 类型
   * @type {String}
   */
  shapeType : '',

  /**
   * 关联的点
   * @type {Object}
   */
  point : null,

  //缓存
  cash: {}
};

Util.extend(Flag,Item);

Util.augment(Flag,{
    //渲染控件
    renderUI : function(){
        var _self = this;
        Flag.superclass.renderUI.call(_self);
        _self.drawFlag();
    },
    /**
     * 绘制flag
     */
    drawFlag: function(){
        var _self = this;
        _self._drawLine();
        _self._drawShape();
        _self._drawText();
    },
    //画线
    _drawLine: function(){
        var _self = this,
            cash = _self.get('cash');
        var line = _self.addShape('line',_self.__getLineAttr());

        cash.line = line;
    },
    //获取线的配置
    __getLineAttr: function(){
        var _self = this,
            lineAttr = _self.get('line'),
            point = _self.get('point'),
            x = point.x,
            y = point.y,
            distance = _self.get('distance');

        //line
        var cfg = Util.mix(lineAttr,{
            x1: x,
            y1: y,
            x2: x,
            y2: y - distance
        });

        return cfg;
    },
    //画图形
    _drawShape: function(){
        var _self = this,
            cash = _self.get('cash');
        var shape = _self.addShape(_self.__getShapeAttr());

        cash.shape = shape;
    },
    //获取图形配置
    __getShapeAttr: function(){
        var _self = this,
            point = _self.get('point'),
            x = point.x,
            y = point.y,
            type = _self.get('shapeType'),
            shape = _self.get('shapeAttr'),
            distance = _self.get('distance'),
            cfg;

        var width = shape.width || 24,
            height = shape.height || 24;

        switch (type){
            case 'rect':
                cfg = Util.mix(shape,{
                    //矩形
                    x : x - width/2,
                    y : distance > 0 ? y  : (y  - height),
                    width : width,
                    height: height
                });
                break;
            case 'image':
                cfg = Util.mix(shape,{
                    //图形
                    x : x - width/2,
                    y : distance > 0 ? (y)  : (y - distance - height),
                    width : width,
                    height: height
                });
                break;
            default :
                type = 'circle';
                cfg = Util.mix(shape,{
                    //圆形
                    cx: x,
                    cy: distance > 0 ? (y + shape.r) : (y - shape.r)
                });
                break;
        }
        return {
            type : type,
            attrs : cfg
        };
    },
    //添加文字
    _drawText: function(){
        var _self = this,
            cash = _self.get('cash');

        var cfg = _self.__getTextAttr();
        if(cfg){
            var text = _self.addShape('text', _self.__getTextAttr());
            cash.text = text;
        }
    },
    //获取文字配置
    __getTextAttr: function(){
        var _self = this,
            text = _self.get('text'),
            textAttr = _self.get('textAttr'),
            point = _self.get('point'),
            x = point.x,
            y = point.y,
            distance = _self.get('distance');

        if(!text) return;

        var cfg = Util.mix(textAttr,{
            text: text,
            x : x ,
            y : distance > 0 ? (y + distance)  : (y + distance - 8)
        });

        return cfg;
    },
    //删除
    remove: function(){
        var _self = this,
            cash = _self.get('cash');
        cash.line && cash.line.remove();
        cash.shape && cash.shape.remove();
        cash.text && cash.text.remove();
    },
    /**
     * 修改flag配置，会触发重绘
     * @param {Object} item 新的配置信息
     */
    changeCfg: function(item){
        var _self = this;
        Util.mix(_self._attrs,item);

        _self.repaint();
    },
    /**
     * 重绘
     */
    repaint: function(){
        var _self = this,
            cash = _self.get('cash');

        _self.remove();

        //重绘线
        _self._drawLine();
        //重绘shape
        _self._drawShape();
        //重绘图形
        _self._drawText();
    }
});

module.exports = Flag;