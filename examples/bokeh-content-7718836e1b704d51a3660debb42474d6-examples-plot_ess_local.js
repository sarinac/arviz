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
    
    
    const element = document.getElementById("f6d00155-1598-46d0-88da-0d1ddd20825c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f6d00155-1598-46d0-88da-0d1ddd20825c' but no matching script tag was found.")
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
                  const docs_json = '{"3b299d3f-f328-4a10-ae28-90339895a5b9":{"defs":[],"roots":{"references":[{"attributes":{},"id":"21164","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21181","type":"Circle"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"21204"},"selection_policy":{"id":"21203"}},"id":"21187","type":"ColumnDataSource"},{"attributes":{},"id":"21158","type":"BasicTicker"},{"attributes":{"axis":{"id":"21157"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21160","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21182","type":"Circle"},{"attributes":{},"id":"21203","type":"UnionRenderers"},{"attributes":{"axis_label":"ESS for small intervals","coordinates":null,"formatter":{"id":"21196"},"group":null,"major_label_policy":{"id":"21197"},"ticker":{"id":"21158"}},"id":"21157","type":"LinearAxis"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21191","type":"Span"},{"attributes":{"overlay":{"id":"21169"}},"id":"21163","type":"BoxZoomTool"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"21192","type":"Title"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21199"},"group":null,"major_label_policy":{"id":"21200"},"ticker":{"id":"21154"}},"id":"21153","type":"LinearAxis"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21170","type":"PolyAnnotation"},{"attributes":{"coordinates":null,"data_source":{"id":"21180"},"glyph":{"id":"21181"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21183"},"nonselection_glyph":{"id":"21182"},"view":{"id":"21185"}},"id":"21184","type":"GlyphRenderer"},{"attributes":{},"id":"21147","type":"DataRange1d"},{"attributes":{},"id":"21166","type":"UndoTool"},{"attributes":{},"id":"21197","type":"AllLabels"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21202"},"selection_policy":{"id":"21201"}},"id":"21180","type":"ColumnDataSource"},{"attributes":{},"id":"21149","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21183","type":"Circle"},{"attributes":{},"id":"21145","type":"DataRange1d"},{"attributes":{},"id":"21151","type":"LinearScale"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"21190","type":"Span"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"21186","type":"Scatter"},{"attributes":{"toolbar":{"id":"21209"},"toolbar_location":"above"},"id":"21210","type":"ToolbarBox"},{"attributes":{"children":[[{"id":"21144"},0,0]]},"id":"21208","type":"GridBox"},{"attributes":{"children":[{"id":"21210"},{"id":"21208"}]},"id":"21211","type":"Column"},{"attributes":{"coordinates":null,"data_source":{"id":"21187"},"glyph":{"id":"21186"},"group":null,"hover_glyph":null,"view":{"id":"21189"}},"id":"21188","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"21153"}],"center":[{"id":"21156"},{"id":"21160"}],"height":500,"left":[{"id":"21157"}],"output_backend":"webgl","renderers":[{"id":"21184"},{"id":"21188"},{"id":"21190"},{"id":"21191"}],"title":{"id":"21192"},"toolbar":{"id":"21171"},"toolbar_location":null,"width":500,"x_range":{"id":"21145"},"x_scale":{"id":"21149"},"y_range":{"id":"21147"},"y_scale":{"id":"21151"}},"id":"21144","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"21162","type":"PanTool"},{"attributes":{},"id":"21201","type":"UnionRenderers"},{"attributes":{"axis":{"id":"21153"},"coordinates":null,"group":null,"ticker":null},"id":"21156","type":"Grid"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21169","type":"BoxAnnotation"},{"attributes":{"toolbars":[{"id":"21171"}],"tools":[{"id":"21161"},{"id":"21162"},{"id":"21163"},{"id":"21164"},{"id":"21165"},{"id":"21166"},{"id":"21167"},{"id":"21168"}]},"id":"21209","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"21170"}},"id":"21165","type":"LassoSelectTool"},{"attributes":{},"id":"21167","type":"SaveTool"},{"attributes":{},"id":"21204","type":"Selection"},{"attributes":{"tools":[{"id":"21161"},{"id":"21162"},{"id":"21163"},{"id":"21164"},{"id":"21165"},{"id":"21166"},{"id":"21167"},{"id":"21168"}]},"id":"21171","type":"Toolbar"},{"attributes":{},"id":"21161","type":"ResetTool"},{"attributes":{},"id":"21199","type":"BasicTickFormatter"},{"attributes":{},"id":"21154","type":"BasicTicker"},{"attributes":{},"id":"21196","type":"BasicTickFormatter"},{"attributes":{},"id":"21202","type":"Selection"},{"attributes":{"source":{"id":"21180"}},"id":"21185","type":"CDSView"},{"attributes":{"callback":null},"id":"21168","type":"HoverTool"},{"attributes":{},"id":"21200","type":"AllLabels"},{"attributes":{"source":{"id":"21187"}},"id":"21189","type":"CDSView"}],"root_ids":["21211"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"3b299d3f-f328-4a10-ae28-90339895a5b9","root_ids":["21211"],"roots":{"21211":"f6d00155-1598-46d0-88da-0d1ddd20825c"}}];
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