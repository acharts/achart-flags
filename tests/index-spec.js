var expect = require('expect.js');
var Flags = require('../src/flags'),
    Flag = require('../src/flag'),
    Canvas = require('achart-canvas'),
    Util = require('achart-util');

var node = Util.createDom('<div id="s1"></div>');
document.body.appendChild(node);

var canvas = new Canvas({
    id : 's1',
    width : 500,
    height : 500
});
describe('achart-flag',function(){
    var flag = canvas.addGroup(Flag,{
        point:{
            x: 100,
            y: 200
        },
        distance: -5,
        line: {
            'stroke': '#000000',
            'stroke-width': 1
        },
        shapeType: 'rect',
        shapeAttr: {
            stock: '#ccc'
        },
        text: 'A',
        textAttr: {
            x : 150,
            y : 100,
            rotate : 90,
            fill : 'blue',
            'font-size':16,
            'font-weight' : 'bold'
        }

    })

    it('单个flag生成', function() {
        expect(flag.get('children').length).to.be(3);
    });

    it('修改配置重新生成',function(){
        var item = {
                x : 20,
                y: 40,
                distance: 0,
                line: {
                    'stroke': '#000000',
                    'stroke-width': 0
                },
                text: '',
                shapeType: 'image',
                shapeAttr: {
                    width: 16,
                    height: 20,
                    src: 'https://i.alipayobjects.com/i/ecmng/png/201408/3Ds9p7HMph_src.png'
                }
            }

        flag.changeCfg(item);
    });
})
describe('achart-flags', function() {

      var flags = canvas.addGroup(Flags,{
          items : [
              {
                  x: 10,
                  y: 20,
                  distance: -5,
                  line: {
                      'stroke': '#000000',
                      'stroke-width': 1
                  },
                  shapeType: 'rect',
                  shapeAttr: {
                      stock: '#ccc'
                  },
                  text: 'A',
                  textAttr: {
                      x : 150,
                      y : 100,
                      rotate : 90,
                      fill : 'blue',
                      'font-size':16,
                      'font-weight' : 'bold'
                  }

              },
              {
                  x : 20,
                  y: 40,
                  distance: 0,
                  line: {
                      'stroke': '#000000',
                      'stroke-width': 0
                  },
                  shapeType: 'image',
                  shapeAttr: {
                      width: 16,
                      height: 20,
                      src: 'https://i.alipayobjects.com/i/ecmng/png/201408/3Ds9p7HMph_src.png'
                  }
              },
              {
                  x : 30,
                  y:  80,
                  distance: -5,
                  line: {
                      'stroke': '#000000',
                      'stroke-width': 1
                  },
                  shapeAttr:{
                      stock: '#ccc',
                      r: 12
                  },
                  text: 'B',
                  textAttr: {
                      x : 150,
                      y : 100,
                      rotate : 90,
                      fill : 'blue',
                      'font-size':16,
                      'font-weight' : 'bold'
                  }
              }
          ]
      });
    it('生成', function() {
        expect(flags.get('flagGroups').length).to.be(3);
    });

    it('重新配置', function() {
        var items = [
                {
                    x: 120,
                    y: 20,
                    distance: 15,
                    line: {
                        'stroke': '#000000',
                        'stroke-width': 1
                    },
                    shapeType: 'rect',
                    shapeAttr: {
                        stock: '#ccc'
                    },
                    text: 'v',
                    textAttr: {
                        x : 150,
                        y : 100,
                        rotate : 90,
                        fill : 'blue',
                        'font-size':16,
                        'font-weight' : 'bold'
                    }

                },
                {
                    x : 130,
                    y:  80,
                    distance: -5,
                    line: {
                        'stroke': '#000000',
                        'stroke-width': 1
                    },
                    shapeAttr:{
                        stock: '#ccc',
                        r: 12
                    },
                    text: 'g',
                    textAttr: {
                        x : 150,
                        y : 100,
                        rotate : 90,
                        fill : 'blue',
                        'font-size':16,
                        'font-weight' : 'bold'
                    }
                }
            ]

        flags.change(items);

        expect(flags.get('flagGroups').length).to.be(2);
    });
});
