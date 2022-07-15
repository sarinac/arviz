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
    
    
    const element = document.getElementById("c9542eb3-ee9a-498e-ba12-ac6beb52a3a5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c9542eb3-ee9a-498e-ba12-ac6beb52a3a5' but no matching script tag was found.")
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
                  const docs_json = '{"da08bffa-fcf2-412b-8d2a-4be9d2b7d458":{"defs":[],"roots":{"references":[{"attributes":{"callback":null},"id":"18228","type":"HoverTool"},{"attributes":{"coordinates":null,"data_source":{"id":"18254"},"glyph":{"id":"18255"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18257"},"nonselection_glyph":{"id":"18256"},"view":{"id":"18259"}},"id":"18258","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"18242"},"glyph":{"id":"18243"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18245"},"nonselection_glyph":{"id":"18244"},"view":{"id":"18247"}},"id":"18246","type":"GlyphRenderer"},{"attributes":{},"id":"18276","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"18254"}},"id":"18259","type":"CDSView"},{"attributes":{},"id":"18274","type":"AllLabels"},{"attributes":{"coordinates":null,"dimension":"height","group":null,"line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.68796724389903},"id":"18266","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18244","type":"Scatter"},{"attributes":{"line_alpha":{"value":0.2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18263","type":"MultiLine"},{"attributes":{"ticks":[0.0,-1.0]},"id":"18240","type":"FixedTicker"},{"attributes":{},"id":"18281","type":"Selection"},{"attributes":{},"id":"18285","type":"Selection"},{"attributes":{"data":{"xs":[[-32.053182324911575,-29.322752162886484],[-32.237685546932575,-29.38343126345932]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"18285"},"selection_policy":{"id":"18284"}},"id":"18260","type":"ColumnDataSource"},{"attributes":{},"id":"18283","type":"Selection"},{"attributes":{"label":{"value":"ELPD difference"},"renderers":[{"id":"18246"},{"id":"18252"}]},"id":"18268","type":"LegendItem"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18262","type":"MultiLine"},{"attributes":{},"id":"18273","type":"BasicTickFormatter"},{"attributes":{},"id":"18227","type":"SaveTool"},{"attributes":{},"id":"18224","type":"WheelZoomTool"},{"attributes":{"source":{"id":"18248"}},"id":"18253","type":"CDSView"},{"attributes":{},"id":"18278","type":"UnionRenderers"},{"attributes":{},"id":"18226","type":"UndoTool"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18243","type":"Scatter"},{"attributes":{"label":{"value":"ELPD"},"renderers":[{"id":"18258"},{"id":"18264"}]},"id":"18269","type":"LegendItem"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18261","type":"MultiLine"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18245","type":"Scatter"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18251","type":"MultiLine"},{"attributes":{},"id":"18205","type":"DataRange1d"},{"attributes":{"coordinates":null,"data_source":{"id":"18260"},"glyph":{"id":"18261"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18263"},"nonselection_glyph":{"id":"18262"},"view":{"id":"18265"}},"id":"18264","type":"GlyphRenderer"},{"attributes":{},"id":"18284","type":"UnionRenderers"},{"attributes":{"axis":{"id":"18217"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"18220","type":"Grid"},{"attributes":{},"id":"18280","type":"UnionRenderers"},{"attributes":{"axis_label":"elpd_loo (log)","coordinates":null,"formatter":{"id":"18276"},"group":null,"major_label_policy":{"id":"18277"},"ticker":{"id":"18214"}},"id":"18213","type":"LinearAxis"},{"attributes":{"overlay":{"id":"18229"}},"id":"18223","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"18213"},"coordinates":null,"group":null,"ticker":null},"id":"18216","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"text":"Model comparison\\nhigher is better"},"id":"18270","type":"Title"},{"attributes":{},"id":"18221","type":"ResetTool"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18255","type":"Circle"},{"attributes":{"children":[{"id":"18291"},{"id":"18289"}]},"id":"18292","type":"Column"},{"attributes":{},"id":"18282","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"18230"}},"id":"18225","type":"LassoSelectTool"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18249","type":"MultiLine"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18256","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"/kMNnx6wPsCE0HHBgM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18283"},"selection_policy":{"id":"18282"}},"id":"18254","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18260"}},"id":"18265","type":"CDSView"},{"attributes":{"children":[[{"id":"18204"},0,0]]},"id":"18289","type":"GridBox"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18230","type":"PolyAnnotation"},{"attributes":{"end":0.5,"start":-1.5},"id":"18207","type":"DataRange1d"},{"attributes":{},"id":"18222","type":"PanTool"},{"attributes":{"axis_label":"ranked models","coordinates":null,"formatter":{"id":"18273"},"group":null,"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"18274"},"ticker":{"id":"18240"}},"id":"18217","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18250","type":"MultiLine"},{"attributes":{"tools":[{"id":"18221"},{"id":"18222"},{"id":"18223"},{"id":"18224"},{"id":"18225"},{"id":"18226"},{"id":"18227"},{"id":"18228"}]},"id":"18231","type":"Toolbar"},{"attributes":{"data":{"x":{"__ndarray__":"hNBxwYDPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"18279"},"selection_policy":{"id":"18278"}},"id":"18242","type":"ColumnDataSource"},{"attributes":{},"id":"18279","type":"Selection"},{"attributes":{"source":{"id":"18242"}},"id":"18247","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"18248"},"glyph":{"id":"18249"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18251"},"nonselection_glyph":{"id":"18250"},"view":{"id":"18253"}},"id":"18252","type":"GlyphRenderer"},{"attributes":{"toolbar":{"id":"18290"},"toolbar_location":"above"},"id":"18291","type":"ToolbarBox"},{"attributes":{"toolbars":[{"id":"18231"}],"tools":[{"id":"18221"},{"id":"18222"},{"id":"18223"},{"id":"18224"},{"id":"18225"},{"id":"18226"},{"id":"18227"},{"id":"18228"}]},"id":"18290","type":"ProxyToolbar"},{"attributes":{},"id":"18214","type":"BasicTicker"},{"attributes":{"data":{"xs":[[-30.89672005978525,-30.724396750606648]],"ys":[[-0.75,-0.75]]},"selected":{"id":"18281"},"selection_policy":{"id":"18280"}},"id":"18248","type":"ColumnDataSource"},{"attributes":{},"id":"18277","type":"AllLabels"},{"attributes":{"above":[{"id":"18267"}],"below":[{"id":"18213"}],"center":[{"id":"18216"},{"id":"18220"}],"height":500,"left":[{"id":"18217"}],"output_backend":"webgl","renderers":[{"id":"18246"},{"id":"18252"},{"id":"18258"},{"id":"18264"},{"id":"18266"}],"title":{"id":"18270"},"toolbar":{"id":"18231"},"toolbar_location":null,"width":500,"x_range":{"id":"18205"},"x_scale":{"id":"18209"},"y_range":{"id":"18207"},"y_scale":{"id":"18211"}},"id":"18204","subtype":"Figure","type":"Plot"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"18268"},{"id":"18269"}]},"id":"18267","type":"Legend"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":null},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18257","type":"Circle"},{"attributes":{},"id":"18211","type":"LinearScale"},{"attributes":{},"id":"18209","type":"LinearScale"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18229","type":"BoxAnnotation"}],"root_ids":["18292"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"da08bffa-fcf2-412b-8d2a-4be9d2b7d458","root_ids":["18292"],"roots":{"18292":"c9542eb3-ee9a-498e-ba12-ac6beb52a3a5"}}];
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