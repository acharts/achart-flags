/**
 * @fileOverview 图形标记，包含文本和连接线
 * @ignore
 */

var Util = require('achart-util'),
    Flag = require('./flag'),
    Group = require('achart-actived').Group,
    PlotItem = require('achart-plot').Item;

/**
 * @class Chart.Flags
 * 图形标记，包含文本和连接线
 * @extends Chart.PlotItem
 */
var Flags = function(cfg){
    Flags.superclass.constructor.call(this,cfg);
};

Util.extend(Flags,PlotItem);
Util.mixin(Flags,[Group]);

Flags.ATTRS = {
    elCls : 'x-chart-flags',
    zIndex : 6,
    /**
     * 标记的配置项
     * @type {Object}
     */
    flag : null,
    /**
     * @private
     */
    items : null,
    /**
     * @private
     */
    xCache : null
};

Util.augment(Flags,{
    //渲染控件
    renderUI : function(){
        var _self = this;
        Flags.superclass.renderUI.call(_self);
        _self._drawFlags();
    },
    //画flag
    _drawFlags: function(){
        var _self = this,
            items = _self.get('items'),
            flagGroups = [];

        Util.each(items,function(item){
            flagGroups.push(_self._addFlag(item));
        });

        _self.set('flagGroups',flagGroups);
    },
    /**
     * 添加flag
     * @param {Object} item marker的配置信息
     */
    addFlag: function(item){
        return this._addFlag(item);
    },
    //添加flag
    _addFlag: function(item){
        var _self = this,
            flag = _self.get('flag'),
            cfg = Util.mix({},flag,item);

        if(!cfg.point){
            cfg.point = {
                x: cfg.x,
                y: cfg.y
            }
        }
        return _self.addGroup(Flag,cfg);
    },
    /**
     * 修改flag
     * @param {Array} items 新的配置信息
     */
    change: function(items){
        var _self = this,
            flagGroups = _self.get('flagGroups');

        Util.each(flagGroups,function(item,index){
            item.remove();
        });
        _self.set('flagGroups',[]);
        _self.set('items',items);
        _self._drawFlags();
    }
});

module.exports = Flags;