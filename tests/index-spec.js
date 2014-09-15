var expect = require('expect.js');
var Flags = require('../src/flags'),
    Flag = require('../src/flag'),
    simulate = require('event-simulate'),
    sinon = require('sinon'),
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
        shapeCfg: {
            stock: '#ccc'
        },
        title: 'A',
        titleCfg: {
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
                point: {
                    x: 20,
                    y: 40
                },
                distance: 0,
                line: {
                    'stroke': '#000000',
                    'stroke-width': 0
                },
                title: '',
                shapeType: 'image',
                shapeCfg: {
                    width: 16,
                    height: 20,
                    src: 'https://i.alipayobjects.com/i/ecmng/png/201408/3Ds9p7HMph_src.png'
                }
            }

        flag.change(item);
    });
})
describe('achart-flags', function() {

      var flags = canvas.addGroup(Flags,{
          events: {
              flagclick: function(ev){
                var d = ev;
              }
          },
          items : [
              {
                  point: {
                      x: 10,
                      y: 20
                  },
                  distance: -5,
                  line: {
                      'stroke': '#000000',
                      'stroke-width': 1
                  },
                  shapeType: 'rect',
                  shapeCfg: {
                      stock: '#ccc'
                  },
                  title: 'A',
                  titleCfg: {
                      x : 150,
                      y : 100,
                      rotate : 90,
                      fill : 'blue',
                      'font-size':16,
                      'font-weight' : 'bold'
                  }

              },
              {
                  point: {
                      x: 20,
                      y: 40
                  },
                  distance: 0,
                  line: {
                      'stroke': '#000000',
                      'stroke-width': 0
                  },
                  shapeType: 'image',
                  shapeCfg: {
                      width: 16,
                      height: 20,
                      src: 'https://i.alipayobjects.com/i/ecmng/png/201408/3Ds9p7HMph_src.png'
                  }
              },
              {
                  point: {
                      x: 30,
                      y: 80
                  },
                  distance: -5,
                  line: {
                      'stroke': '#000000',
                      'stroke-width': 1
                  },
                  shapeCfg:{
                      stock: '#ccc',
                      r: 12
                  },
                  title: 'B',
                  titleCfg: {
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

    it('重新配置 animate', function() {
        var items = [
                {
                    point: {
                        x: 220,
                        y: 220
                    },
                    distance: 15,
                    line: {
                        'stroke': '#000000',
                        'stroke-width': 1
                    },
                    shapeType: 'rect',
                    shapeCfg: {
                        stock: '#ccc'
                    },
                    title: 'v',
                    titleCfg: {
                        x : 150,
                        y : 100,
                        rotate : 90,
                        fill : 'blue',
                        'font-size':16,
                        'font-weight' : 'bold'
                    }

                },
                {
                    point: {
                        x: 230,
                        y: 180
                    },
                    distance: -15,
                    line: {
                        'stroke': '#000000',
                        'stroke-width': 1
                    },
                    shapeCfg:{
                        stock: '#ccc',
                        r: 12
                    },
                    shapeType:"circle",
                    title: 'g',
                    titleCfg: {
                        x : 250,
                        y : 200,
                        rotate : 90,
                        fill : 'blue',
                        'font-size':16,
                        'font-weight' : 'bold'
                    }
                },
                {
                    point: {
                        x: 130,
                        y: 80
                    },
                    distance: -15,
                    line: {
                        'stroke': '#000000',
                        'stroke-width': 1
                    },
                    shapeCfg:{
                        stock: '#ccc',
                        r: 12
                    },
                    title: 'GG',
                    titleCfg: {
                        x : 150,
                        y : 100,
                        rotate : 90,
                        fill : 'blue',
                        'font-size':16,
                        'font-weight' : 'bold'
                    }
                },
                {
                    point: {
                        x: 60,
                        y: 180
                    },
                    distance: -15,
                    line: {
                        'stroke': '#000000',
                        'stroke-width': 1
                    },
                    shapeCfg:{
                        stock: '#ccc',
                        r: 12
                    },
                    title: 'cc',
                    titleCfg: {
                        x : 150,
                        y : 100,
                        rotate : 90,
                        fill : 'blue',
                        'font-size':16,
                        'font-weight' : 'bold'
                    }
                }
            ]

        flags.change(items,true);

        expect(flags.get('flagGroups').length).to.be(4);

        var newItem = items.slice(0,3);
        flags.change(newItem,true);

        expect(flags.get('flagGroups').length).to.be(3);

        var newItem1 = items.slice(0,2);
        flags.change(newItem1);

        expect(flags.get('flagGroups').length).to.be(2);
    });

    it('堆叠重新计算',function(){
        flags.changeStackCfg(0,{
            point: {
                x: 0,
                y: 0
            },
            distance: -15,
            line: {
                'stroke': '#000000',
                'stroke-width': 1
            },
            shapeCfg:{
                stock: '#ccc',
                r: 12
            },
            title: 'cc',
            titleCfg: {
                x : 150,
                y : 100,
                rotate : 90,
                fill : 'blue',
                'font-size':16,
                'font-weight' : 'bold'
            }
        });
        expect(flags.get('flagGroups')[0].get('bottomY')).to.be(0);
        flags.changeStackCfg(0,{
            point: {
                x: 220,
                y: 220
            },
            distance: -15,
            line: {
                'stroke': '#000000',
                'stroke-width': 1
            },
            shapeType: 'rect',
            shapeCfg: {
                stock: '#ccc'
            },
            title: 'v',
            titleCfg: {
                x : 150,
                y : 100,
                rotate : 90,
                fill : 'blue',
                'font-size':16,
                'font-weight' : 'bold'
            }
        });
        expect(flags.get('flagGroups')[0].get('bottomY')).to.be(220);
        flags.changeStackCfg(0,{
            point: {
                x: 20,
                y: 40
            },
            distance: 0,
            line: {
                'stroke': '#000000',
                'stroke-width': 0
            },
            shapeType: 'image',
            shapeCfg: {
                width: 16,
                height: 20,
                src: 'https://i.alipayobjects.com/i/ecmng/png/201408/3Ds9p7HMph_src.png'
            }
        });
        expect(flags.get('flagGroups')[0].get('bottomY')).to.be(40);
    })

    it('添加一个flag', function() {
        var add = {
            point: {
                x: 120,
                y: 140
            },
            distance: 0,
            line: {
                'stroke': '#000000',
                'stroke-width': 0
            },
            shapeType: 'image',
            shapeCfg: {
                width: 16,
                height: 20,
                src: 'https://i.alipayobjects.com/i/ecmng/png/201408/3Ds9p7HMph_src.png'
            }
        }

        flags.addFlag(add);
        expect(flags.get('flagGroups').length).to.be(3);
    })

    it('click',function(){
        var callback = sinon.spy();
        flags.on('flagclick',callback);
        simulate.simulate(flags.getFirst().getFirst().get('node'),'click');
        expect(callback.called).to.be(true);
    })

    it('mouseover',function(){
        var callback = sinon.spy();
        flags.on('flagover',callback);
        simulate.simulate(flags.getFirst().getFirst().get('node'),'mouseover');
        expect(callback.called).to.be(true);
    })

    it('mouseout',function(){
        var callback = sinon.spy();
        flags.on('flagout',callback);
        simulate.simulate(flags.getFirst().getFirst().get('node'),'mouseout');
        expect(callback.called).to.be(true);
    })
});
