(function() {
  const fn = function() {
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
    const element = document.getElementById("dfb8fbf4-fa76-4eec-aa35-49954f9a4492");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dfb8fbf4-fa76-4eec-aa35-49954f9a4492' but no matching script tag was found.")
        }
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.3.min.js"];
      const css_urls = [];
    
      const inline_js = [    function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                  const docs_json = '{"681e4f90-9745-496e-a382-a2341eeb468b":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"41932","type":"Title"},{"attributes":{"coordinates":null,"data_source":{"id":"41929"},"glyph":{"id":"41928"},"group":null,"hover_glyph":null,"view":{"id":"41931"}},"id":"41930","type":"GlyphRenderer"},{"attributes":{"tools":[{"id":"41849"},{"id":"41850"},{"id":"41851"},{"id":"41852"},{"id":"41853"},{"id":"41854"},{"id":"41855"},{"id":"41856"}]},"id":"41859","type":"Toolbar"},{"attributes":{"source":{"id":"41929"}},"id":"41931","type":"CDSView"},{"attributes":{"axis":{"id":"41841"},"coordinates":null,"group":null,"ticker":null},"id":"41844","type":"Grid"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41894","type":"PolyAnnotation"},{"attributes":{"toolbars":[{"id":"41859"},{"id":"41895"}],"tools":[{"id":"41849"},{"id":"41850"},{"id":"41851"},{"id":"41852"},{"id":"41853"},{"id":"41854"},{"id":"41855"},{"id":"41856"},{"id":"41885"},{"id":"41886"},{"id":"41887"},{"id":"41888"},{"id":"41889"},{"id":"41890"},{"id":"41891"},{"id":"41892"}]},"id":"41963","type":"ProxyToolbar"},{"attributes":{},"id":"41943","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41920","type":"Circle"},{"attributes":{},"id":"41944","type":"Selection"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41953"},"group":null,"major_label_policy":{"id":"41954"},"ticker":{"id":"41878"}},"id":"41877","type":"LinearAxis"},{"attributes":{},"id":"41852","type":"WheelZoomTool"},{"attributes":{"toolbar":{"id":"41963"},"toolbar_location":"above"},"id":"41964","type":"ToolbarBox"},{"attributes":{},"id":"41875","type":"LinearScale"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"41926","type":"Span"},{"attributes":{},"id":"41950","type":"BasicTickFormatter"},{"attributes":{"tools":[{"id":"41885"},{"id":"41886"},{"id":"41887"},{"id":"41888"},{"id":"41889"},{"id":"41890"},{"id":"41891"},{"id":"41892"}]},"id":"41895","type":"Toolbar"},{"attributes":{"overlay":{"id":"41894"}},"id":"41889","type":"LassoSelectTool"},{"attributes":{},"id":"41951","type":"AllLabels"},{"attributes":{},"id":"41890","type":"UndoTool"},{"attributes":{},"id":"41888","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"41858"}},"id":"41853","type":"LassoSelectTool"},{"attributes":{},"id":"41855","type":"SaveTool"},{"attributes":{},"id":"41953","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41942"},"selection_policy":{"id":"41941"}},"id":"41904","type":"ColumnDataSource"},{"attributes":{},"id":"41850","type":"PanTool"},{"attributes":{},"id":"41886","type":"PanTool"},{"attributes":{},"id":"41846","type":"BasicTicker"},{"attributes":{},"id":"41954","type":"AllLabels"},{"attributes":{"axis":{"id":"41845"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41848","type":"Grid"},{"attributes":{"overlay":{"id":"41857"}},"id":"41851","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"41964"},{"id":"41962"}]},"id":"41965","type":"Column"},{"attributes":{},"id":"41882","type":"BasicTicker"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41936"},"group":null,"major_label_policy":{"id":"41937"},"ticker":{"id":"41846"}},"id":"41845","type":"LinearAxis"},{"attributes":{"axis":{"id":"41881"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41884","type":"Grid"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41858","type":"PolyAnnotation"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41958"},"selection_policy":{"id":"41957"}},"id":"41929","type":"ColumnDataSource"},{"attributes":{},"id":"41955","type":"UnionRenderers"},{"attributes":{},"id":"41869","type":"DataRange1d"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41928","type":"Scatter"},{"attributes":{},"id":"41956","type":"Selection"},{"attributes":{"source":{"id":"41919"}},"id":"41924","type":"CDSView"},{"attributes":{},"id":"41885","type":"ResetTool"},{"attributes":{},"id":"41854","type":"UndoTool"},{"attributes":{"source":{"id":"41914"}},"id":"41916","type":"CDSView"},{"attributes":{"callback":null},"id":"41856","type":"HoverTool"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"41910","type":"Span"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41905","type":"Circle"},{"attributes":{},"id":"41842","type":"BasicTicker"},{"attributes":{},"id":"41936","type":"BasicTickFormatter"},{"attributes":{"end":1,"start":-0.05},"id":"41835","type":"DataRange1d"},{"attributes":{},"id":"41878","type":"BasicTicker"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"41917","type":"Title"},{"attributes":{},"id":"41849","type":"ResetTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41956"},"selection_policy":{"id":"41955"}},"id":"41919","type":"ColumnDataSource"},{"attributes":{},"id":"41937","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41921","type":"Circle"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41950"},"group":null,"major_label_policy":{"id":"41951"},"ticker":{"id":"41882"}},"id":"41881","type":"LinearAxis"},{"attributes":{},"id":"41939","type":"BasicTickFormatter"},{"attributes":{},"id":"41837","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"41919"},"glyph":{"id":"41920"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41922"},"nonselection_glyph":{"id":"41921"},"view":{"id":"41924"}},"id":"41923","type":"GlyphRenderer"},{"attributes":{},"id":"41957","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"41914"},"glyph":{"id":"41913"},"group":null,"hover_glyph":null,"view":{"id":"41916"}},"id":"41915","type":"GlyphRenderer"},{"attributes":{},"id":"41958","type":"Selection"},{"attributes":{},"id":"41940","type":"AllLabels"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41913","type":"Scatter"},{"attributes":{"end":1,"start":-0.05},"id":"41871","type":"DataRange1d"},{"attributes":{"callback":null},"id":"41892","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41906","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"41904"},"glyph":{"id":"41905"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41907"},"nonselection_glyph":{"id":"41906"},"view":{"id":"41909"}},"id":"41908","type":"GlyphRenderer"},{"attributes":{},"id":"41873","type":"LinearScale"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41912","type":"Span"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41944"},"selection_policy":{"id":"41943"}},"id":"41914","type":"ColumnDataSource"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41939"},"group":null,"major_label_policy":{"id":"41940"},"ticker":{"id":"41842"}},"id":"41841","type":"LinearAxis"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"41925","type":"Span"},{"attributes":{"below":[{"id":"41877"}],"center":[{"id":"41880"},{"id":"41884"}],"height":500,"left":[{"id":"41881"}],"output_backend":"webgl","renderers":[{"id":"41923"},{"id":"41925"},{"id":"41926"},{"id":"41927"},{"id":"41930"}],"title":{"id":"41932"},"toolbar":{"id":"41895"},"toolbar_location":null,"width":500,"x_range":{"id":"41869"},"x_scale":{"id":"41873"},"y_range":{"id":"41871"},"y_scale":{"id":"41875"}},"id":"41868","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41857","type":"BoxAnnotation"},{"attributes":{"children":[[{"id":"41832"},0,0],[{"id":"41868"},0,1]]},"id":"41962","type":"GridBox"},{"attributes":{},"id":"41941","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41907","type":"Circle"},{"attributes":{"axis":{"id":"41877"},"coordinates":null,"group":null,"ticker":null},"id":"41880","type":"Grid"},{"attributes":{},"id":"41942","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41927","type":"Span"},{"attributes":{"source":{"id":"41904"}},"id":"41909","type":"CDSView"},{"attributes":{"overlay":{"id":"41893"}},"id":"41887","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41893","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41922","type":"Circle"},{"attributes":{"below":[{"id":"41841"}],"center":[{"id":"41844"},{"id":"41848"}],"height":500,"left":[{"id":"41845"}],"output_backend":"webgl","renderers":[{"id":"41908"},{"id":"41910"},{"id":"41911"},{"id":"41912"},{"id":"41915"}],"title":{"id":"41917"},"toolbar":{"id":"41859"},"toolbar_location":null,"width":500,"x_range":{"id":"41833"},"x_scale":{"id":"41837"},"y_range":{"id":"41835"},"y_scale":{"id":"41839"}},"id":"41832","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"41891","type":"SaveTool"},{"attributes":{},"id":"41833","type":"DataRange1d"},{"attributes":{},"id":"41839","type":"LinearScale"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"41911","type":"Span"}],"root_ids":["41965"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"681e4f90-9745-496e-a382-a2341eeb468b","root_ids":["41965"],"roots":{"41965":"dfb8fbf4-fa76-4eec-aa35-49954f9a4492"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
    function(Bokeh) {
        }
      ];
    
      function run_inline_js() {
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();