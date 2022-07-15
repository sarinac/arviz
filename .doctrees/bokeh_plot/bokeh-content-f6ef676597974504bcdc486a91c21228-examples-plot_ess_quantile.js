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
    
    
    const element = document.getElementById("5cae05c2-c278-4369-b06e-2f1f8b5ad246");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5cae05c2-c278-4369-b06e-2f1f8b5ad246' but no matching script tag was found.")
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
                  const docs_json = '{"389a13d4-8d14-4161-88d4-28eaa9af6086":{"defs":[],"roots":{"references":[{"attributes":{},"id":"21311","type":"BasicTickFormatter"},{"attributes":{},"id":"21316","type":"UnionRenderers"},{"attributes":{"children":[{"id":"21323"},{"id":"21321"}]},"id":"21324","type":"Column"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21289","type":"BoxAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21317"},"selection_policy":{"id":"21316"}},"id":"21300","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"21322"},"toolbar_location":"above"},"id":"21323","type":"ToolbarBox"},{"attributes":{},"id":"21274","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"21291"}],"tools":[{"id":"21281"},{"id":"21282"},{"id":"21283"},{"id":"21284"},{"id":"21285"},{"id":"21286"},{"id":"21287"},{"id":"21288"}]},"id":"21322","type":"ProxyToolbar"},{"attributes":{},"id":"21265","type":"DataRange1d"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21314"},"group":null,"major_label_policy":{"id":"21315"},"ticker":{"id":"21274"}},"id":"21273","type":"LinearAxis"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21290","type":"PolyAnnotation"},{"attributes":{},"id":"21267","type":"DataRange1d"},{"attributes":{},"id":"21287","type":"SaveTool"},{"attributes":{"overlay":{"id":"21289"}},"id":"21283","type":"BoxZoomTool"},{"attributes":{"source":{"id":"21300"}},"id":"21305","type":"CDSView"},{"attributes":{},"id":"21312","type":"AllLabels"},{"attributes":{},"id":"21269","type":"LinearScale"},{"attributes":{},"id":"21286","type":"UndoTool"},{"attributes":{"callback":null},"id":"21288","type":"HoverTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21301","type":"Circle"},{"attributes":{"axis":{"id":"21273"},"coordinates":null,"group":null,"ticker":null},"id":"21276","type":"Grid"},{"attributes":{"axis":{"id":"21277"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21280","type":"Grid"},{"attributes":{"axis_label":"ESS for quantiles","coordinates":null,"formatter":{"id":"21311"},"group":null,"major_label_policy":{"id":"21312"},"ticker":{"id":"21278"}},"id":"21277","type":"LinearAxis"},{"attributes":{"tools":[{"id":"21281"},{"id":"21282"},{"id":"21283"},{"id":"21284"},{"id":"21285"},{"id":"21286"},{"id":"21287"},{"id":"21288"}]},"id":"21291","type":"Toolbar"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21306","type":"Span"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21303","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21302","type":"Circle"},{"attributes":{"below":[{"id":"21273"}],"center":[{"id":"21276"},{"id":"21280"}],"height":500,"left":[{"id":"21277"}],"output_backend":"webgl","renderers":[{"id":"21304"},{"id":"21306"}],"title":{"id":"21307"},"toolbar":{"id":"21291"},"toolbar_location":null,"width":500,"x_range":{"id":"21265"},"x_scale":{"id":"21269"},"y_range":{"id":"21267"},"y_scale":{"id":"21271"}},"id":"21264","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"21290"}},"id":"21285","type":"LassoSelectTool"},{"attributes":{},"id":"21314","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"group":null,"text":"sigma"},"id":"21307","type":"Title"},{"attributes":{},"id":"21315","type":"AllLabels"},{"attributes":{},"id":"21282","type":"PanTool"},{"attributes":{},"id":"21278","type":"BasicTicker"},{"attributes":{},"id":"21284","type":"WheelZoomTool"},{"attributes":{},"id":"21317","type":"Selection"},{"attributes":{"children":[[{"id":"21264"},0,0]]},"id":"21321","type":"GridBox"},{"attributes":{"coordinates":null,"data_source":{"id":"21300"},"glyph":{"id":"21301"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21303"},"nonselection_glyph":{"id":"21302"},"view":{"id":"21305"}},"id":"21304","type":"GlyphRenderer"},{"attributes":{},"id":"21281","type":"ResetTool"},{"attributes":{},"id":"21271","type":"LinearScale"}],"root_ids":["21324"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"389a13d4-8d14-4161-88d4-28eaa9af6086","root_ids":["21324"],"roots":{"21324":"5cae05c2-c278-4369-b06e-2f1f8b5ad246"}}];
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