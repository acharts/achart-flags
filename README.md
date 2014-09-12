# achart-flags [![spm version](http://spmjs.io/badge/achart-flags)](http://spmjs.io/package/achart-flags)

---

生成多个Flag

  * [wiki 文档](wiki/)

---


## Install

```
$ spm install achart-flags --save
```

## Usage

```js
var achartFlags = require('achart-flags');
// use achartFlags
```

## Flags

### 配置项

  * __flag__ 所有flag的默认配置项,见下面Flag
  * __items__ 初始的flag集合配置信息

### 方法

  * addFlag(item) 添加flag
  * removeAll() 删除所有flag
  * change(items) 更改所有的flag

### 事件

  * flagclick 点击flag

    * ev：flag对象

### 更多

 * 由于Flags使用了 Actived.Group的扩展所以可以使用此扩展的所有的[属性和方法](http://spmjs.io/docs/achart-actived/latest/)

## Flag

### 配置项

 * __title__ 显示的文本
 * __titleCfg__ 显示的文本配置信息
 * __text__ tooltip显示的文本
 * __line__ 连接线的配置信息
 * __distance__ y偏离
 * __shapeType__ 图形类型（可选 rect,circle,image）
 * __shapeCfg__ 图形的配置信息
 * __point__ : 关联的点

### 方法

  * changeCfg(cfg) 修改flag配置，会触发重绘
  * repaint() 重绘


### 更多

 * 由于Flag使用了 Actived.Group的扩展所以可以使用此扩展的所有的[属性和方法](http://spmjs.io/docs/achart-actived/latest/)