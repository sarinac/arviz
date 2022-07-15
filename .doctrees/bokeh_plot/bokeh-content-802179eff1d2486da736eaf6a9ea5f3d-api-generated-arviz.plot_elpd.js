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
    
    
    const element = document.getElementById("1aa10215-9b2b-4835-a499-89903484ffb6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1aa10215-9b2b-4835-a499-89903484ffb6' but no matching script tag was found.")
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
                  const docs_json = '{"02fd08cd-6e71-4f65-9ac7-8a66493e9c8e":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"group":null,"text":"centered model - non centered model"},"id":"17449","type":"Title"},{"attributes":{"toolbars":[{"id":"17436"}],"tools":[{"id":"17426"},{"id":"17427"},{"id":"17428"},{"id":"17429"},{"id":"17430"},{"id":"17431"},{"id":"17432"},{"id":"17433"}]},"id":"17464","type":"ProxyToolbar"},{"attributes":{},"id":"17429","type":"WheelZoomTool"},{"attributes":{"toolbar":{"id":"17464"},"toolbar_location":"above"},"id":"17465","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"17434"}},"id":"17428","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"17418"},"coordinates":null,"group":null,"ticker":null},"id":"17421","type":"Grid"},{"attributes":{},"id":"17454","type":"AllLabels"},{"attributes":{},"id":"17419","type":"BasicTicker"},{"attributes":{"below":[{"id":"17418"}],"center":[{"id":"17421"},{"id":"17425"}],"height":288,"left":[{"id":"17422"}],"output_backend":"webgl","renderers":[{"id":"17447"}],"title":{"id":"17449"},"toolbar":{"id":"17436"},"toolbar_location":null,"width":432,"x_range":{"id":"17410"},"x_scale":{"id":"17414"},"y_range":{"id":"17412"},"y_scale":{"id":"17416"}},"id":"17409","subtype":"Figure","type":"Plot"},{"attributes":{"children":[[{"id":"17409"},0,0]]},"id":"17463","type":"GridBox"},{"attributes":{},"id":"17410","type":"DataRange1d"},{"attributes":{},"id":"17458","type":"UnionRenderers"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17435","type":"PolyAnnotation"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"17453"},"group":null,"major_label_policy":{"id":"17454"},"ticker":{"id":"17423"}},"id":"17422","type":"LinearAxis"},{"attributes":{},"id":"17456","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"17465"},{"id":"17463"}]},"id":"17466","type":"Column"},{"attributes":{"callback":null},"id":"17433","type":"HoverTool"},{"attributes":{"coordinates":null,"data_source":{"id":"17446"},"glyph":{"id":"17445"},"group":null,"hover_glyph":null,"view":{"id":"17448"}},"id":"17447","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17446"}},"id":"17448","type":"CDSView"},{"attributes":{},"id":"17412","type":"DataRange1d"},{"attributes":{},"id":"17453","type":"BasicTickFormatter"},{"attributes":{},"id":"17426","type":"ResetTool"},{"attributes":{"overlay":{"id":"17435"}},"id":"17430","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"formatter":{"id":"17456"},"group":null,"major_label_policy":{"id":"17457"},"ticker":{"id":"17419"}},"id":"17418","type":"LinearAxis"},{"attributes":{"tools":[{"id":"17426"},{"id":"17427"},{"id":"17428"},{"id":"17429"},{"id":"17430"},{"id":"17431"},{"id":"17432"},{"id":"17433"}]},"id":"17436","type":"Toolbar"},{"attributes":{},"id":"17432","type":"SaveTool"},{"attributes":{},"id":"17431","type":"UndoTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17445","type":"Scatter"},{"attributes":{},"id":"17459","type":"Selection"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gB+QFygcqb8AkvbM2OqMvwDAPZTAZEQ/ABNdkUAak78AFo4kwaykPwDgu3qf/FM/QBB6xSIVsb8AEruac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17459"},"selection_policy":{"id":"17458"}},"id":"17446","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17434","type":"BoxAnnotation"},{"attributes":{},"id":"17423","type":"BasicTicker"},{"attributes":{},"id":"17457","type":"AllLabels"},{"attributes":{},"id":"17416","type":"LinearScale"},{"attributes":{"axis":{"id":"17422"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"17425","type":"Grid"},{"attributes":{},"id":"17427","type":"PanTool"},{"attributes":{},"id":"17414","type":"LinearScale"}],"root_ids":["17466"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"02fd08cd-6e71-4f65-9ac7-8a66493e9c8e","root_ids":["17466"],"roots":{"17466":"1aa10215-9b2b-4835-a499-89903484ffb6"}}];
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