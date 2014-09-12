# Demo

---

## Normal usage


````html

<div id="f2"></div>

````

````javascript
seajs.use(['index','achart-canvas'], function(Flags,Canvas) {
    var canvas = new Canvas({
        id : 'f2',
        width : 500,
        height : 200
      });

    var flags = canvas.addGroup(Flags,{
        events: {
          flagclick: function(ev){
            console.log(ev);
          }
        },
        items : [
          {
              point: {
                  x: 50,
                  y: 50
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
});

````
