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
    
    
    const element = document.getElementById("15a3869a-2c40-4e04-8dbd-604bcae2ac44");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '15a3869a-2c40-4e04-8dbd-604bcae2ac44' but no matching script tag was found.")
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
                  const docs_json = '{"a01a8493-0179-42bb-b8e4-a9cbfeb95e8a":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"group":null,"text":"Centered eight - Non centered eight"},"id":"20729","type":"Title"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20714","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"data_source":{"id":"20726"},"glyph":{"id":"20725"},"group":null,"hover_glyph":null,"view":{"id":"20728"}},"id":"20727","type":"GlyphRenderer"},{"attributes":{},"id":"20711","type":"UndoTool"},{"attributes":{},"id":"20733","type":"BasicTickFormatter"},{"attributes":{},"id":"20709","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"formatter":{"id":"20736"},"group":null,"major_label_policy":{"id":"20737"},"ticker":{"id":"20699"}},"id":"20698","type":"LinearAxis"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gB+QFygcqb8AkvbM2OqMvwDAPZTAZEQ/ABNdkUAak78AFo4kwaykPwDgu3qf/FM/QBB6xSIVsb8AEruac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"20739"},"selection_policy":{"id":"20738"}},"id":"20726","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"20714"}},"id":"20708","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"20745"},{"id":"20743"}]},"id":"20746","type":"Column"},{"attributes":{"overlay":{"id":"20715"}},"id":"20710","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"20713","type":"HoverTool"},{"attributes":{},"id":"20737","type":"AllLabels"},{"attributes":{},"id":"20736","type":"BasicTickFormatter"},{"attributes":{},"id":"20712","type":"SaveTool"},{"attributes":{},"id":"20739","type":"Selection"},{"attributes":{"source":{"id":"20726"}},"id":"20728","type":"CDSView"},{"attributes":{},"id":"20696","type":"LinearScale"},{"attributes":{},"id":"20734","type":"AllLabels"},{"attributes":{"axis":{"id":"20698"},"coordinates":null,"group":null,"ticker":null},"id":"20701","type":"Grid"},{"attributes":{},"id":"20706","type":"ResetTool"},{"attributes":{"toolbars":[{"id":"20716"}],"tools":[{"id":"20706"},{"id":"20707"},{"id":"20708"},{"id":"20709"},{"id":"20710"},{"id":"20711"},{"id":"20712"},{"id":"20713"}]},"id":"20744","type":"ProxyToolbar"},{"attributes":{},"id":"20694","type":"LinearScale"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"20725","type":"Scatter"},{"attributes":{},"id":"20692","type":"DataRange1d"},{"attributes":{"axis":{"id":"20702"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20705","type":"Grid"},{"attributes":{"tools":[{"id":"20706"},{"id":"20707"},{"id":"20708"},{"id":"20709"},{"id":"20710"},{"id":"20711"},{"id":"20712"},{"id":"20713"}]},"id":"20716","type":"Toolbar"},{"attributes":{},"id":"20703","type":"BasicTicker"},{"attributes":{},"id":"20738","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"20744"},"toolbar_location":"above"},"id":"20745","type":"ToolbarBox"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20715","type":"PolyAnnotation"},{"attributes":{"children":[[{"id":"20689"},0,0]]},"id":"20743","type":"GridBox"},{"attributes":{},"id":"20690","type":"DataRange1d"},{"attributes":{"below":[{"id":"20698"}],"center":[{"id":"20701"},{"id":"20705"}],"height":288,"left":[{"id":"20702"}],"output_backend":"webgl","renderers":[{"id":"20727"}],"title":{"id":"20729"},"toolbar":{"id":"20716"},"toolbar_location":null,"width":432,"x_range":{"id":"20690"},"x_scale":{"id":"20694"},"y_range":{"id":"20692"},"y_scale":{"id":"20696"}},"id":"20689","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20699","type":"BasicTicker"},{"attributes":{},"id":"20707","type":"PanTool"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"20733"},"group":null,"major_label_policy":{"id":"20734"},"ticker":{"id":"20703"}},"id":"20702","type":"LinearAxis"}],"root_ids":["20746"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"a01a8493-0179-42bb-b8e4-a9cbfeb95e8a","root_ids":["20746"],"roots":{"20746":"15a3869a-2c40-4e04-8dbd-604bcae2ac44"}}];
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