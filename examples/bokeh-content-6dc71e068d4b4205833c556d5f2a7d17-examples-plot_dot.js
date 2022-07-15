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
    
    
    const element = document.getElementById("d0fbe464-4139-48c3-8884-e07217ebaeaa");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd0fbe464-4139-48c3-8884-e07217ebaeaa' but no matching script tag was found.")
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
                  const docs_json = '{"f3a7376a-cca5-40e5-8634-3054a2d37fca":{"defs":[],"roots":{"references":[{"attributes":{"source":{"id":"20576"}},"id":"20581","type":"CDSView"},{"attributes":{},"id":"20544","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#fa7c17"},"hatch_color":{"value":"#fa7c17"},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20589","type":"Circle"},{"attributes":{},"id":"20603","type":"Selection"},{"attributes":{"overlay":{"id":"20560"}},"id":"20555","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"data_source":{"id":"20576"},"glyph":{"id":"20577"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20579"},"nonselection_glyph":{"id":"20578"},"view":{"id":"20581"}},"id":"20580","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"formatter":{"id":"20600"},"group":null,"major_label_policy":{"id":"20601"},"ticker":{"id":"20544"}},"id":"20543","type":"LinearAxis"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20560","type":"PolyAnnotation"},{"attributes":{},"id":"20548","type":"BasicTicker"},{"attributes":{"source":{"id":"20588"}},"id":"20593","type":"CDSView"},{"attributes":{},"id":"20604","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.2},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20591","type":"Circle"},{"attributes":{"overlay":{"id":"20559"}},"id":"20553","type":"BoxZoomTool"},{"attributes":{"source":{"id":"20582"}},"id":"20587","type":"CDSView"},{"attributes":{},"id":"20606","type":"UnionRenderers"},{"attributes":{},"id":"20535","type":"DataRange1d"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20573","type":"Line"},{"attributes":{"data":{"x":[-0.667808853419204,0.6382905789859445],"y":[0,0]},"selected":{"id":"20605"},"selection_policy":{"id":"20604"}},"id":"20576","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"20615"},{"id":"20613"}]},"id":"20616","type":"Column"},{"attributes":{"toolbar":{"id":"20614"},"toolbar_location":"above"},"id":"20615","type":"ToolbarBox"},{"attributes":{},"id":"20556","type":"UndoTool"},{"attributes":{},"id":"20557","type":"SaveTool"},{"attributes":{},"id":"20537","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20583","type":"Circle"},{"attributes":{"below":[{"id":"20543"}],"center":[{"id":"20546"},{"id":"20550"}],"height":360,"left":[{"id":"20547"}],"match_aspect":true,"output_backend":"webgl","renderers":[{"id":"20574"},{"id":"20580"},{"id":"20586"},{"id":"20592"}],"title":{"id":"20594"},"toolbar":{"id":"20561"},"toolbar_location":null,"width":720,"x_range":{"id":"20535"},"x_scale":{"id":"20539"},"y_range":{"id":"20537"},"y_scale":{"id":"20541"}},"id":"20534","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20584","type":"Circle"},{"attributes":{"children":[[{"id":"20534"},0,0]]},"id":"20613","type":"GridBox"},{"attributes":{"axis":{"id":"20547"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20550","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20590","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20578","type":"Line"},{"attributes":{},"id":"20607","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"20582"},"glyph":{"id":"20583"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20585"},"nonselection_glyph":{"id":"20584"},"view":{"id":"20587"}},"id":"20586","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-1.9040259413199274,1.8078221014364193],"y":[0,0]},"selected":{"id":"20603"},"selection_policy":{"id":"20602"}},"id":"20570","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"20588"},"glyph":{"id":"20589"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20591"},"nonselection_glyph":{"id":"20590"},"view":{"id":"20593"}},"id":"20592","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20572","type":"Line"},{"attributes":{},"id":"20554","type":"WheelZoomTool"},{"attributes":{},"id":"20539","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"FRx+8A5uAsDsq3R/ipD6v+yrdH+KkPq/7Kt0f4qQ+r80ET6N8b3yvzQRPo3xvfK/NBE+jfG98r80ET6N8b3yv6IYAQonyui/ohgBCifK6L+iGAEKJ8rov6IYAQonyui/ohgBCifK6L+iGAEKJ8rov3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP456/k5DI+Q/jnr+TkMj5D+Oev5OQyPkP456/k5DI+Q/jnr+TkMj5D/ZQm3RXADwP9lCbdFcAPA/2UJt0VwA8D/ZQm3RXADwP9By6jDXYPY/0HLqMNdg9j/Qcuow12D2P2DXuW8eufw/YNe5bx65/D+lK8ris3EDQA==","dtype":"float64","order":"little","shape":[50]},"y":{"__ndarray__":"Hkoo7ZC0xD8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Px5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Pzi8sMC10gBAHkoo7ZC0xD8tb7xj2Q7fP6Zccii14ek/2kCDz/4d8j9iU80KI0v3P+plF0ZHePw/OLywwLXSAEAeSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yP2JTzQojS/c/6mUXRkd4/D84vLDAtdIAQB5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpPx5KKO2QtMQ/LW+8Y9kO3z8eSijtkLTEPw==","dtype":"float64","order":"little","shape":[50]}},"selected":{"id":"20609"},"selection_policy":{"id":"20608"}},"id":"20588","type":"ColumnDataSource"},{"attributes":{},"id":"20602","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20585","type":"Circle"},{"attributes":{"toolbars":[{"id":"20561"}],"tools":[{"id":"20551"},{"id":"20552"},{"id":"20553"},{"id":"20554"},{"id":"20555"},{"id":"20556"},{"id":"20557"},{"id":"20558"}]},"id":"20614","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"20543"},"coordinates":null,"group":null,"ticker":null},"id":"20546","type":"Grid"},{"attributes":{},"id":"20608","type":"UnionRenderers"},{"attributes":{},"id":"20541","type":"LinearScale"},{"attributes":{},"id":"20598","type":"AllLabels"},{"attributes":{},"id":"20601","type":"AllLabels"},{"attributes":{},"id":"20551","type":"ResetTool"},{"attributes":{"callback":null},"id":"20558","type":"HoverTool"},{"attributes":{"tools":[{"id":"20551"},{"id":"20552"},{"id":"20553"},{"id":"20554"},{"id":"20555"},{"id":"20556"},{"id":"20557"},{"id":"20558"}]},"id":"20561","type":"Toolbar"},{"attributes":{"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20577","type":"Line"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20579","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"20570"},"glyph":{"id":"20571"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20573"},"nonselection_glyph":{"id":"20572"},"view":{"id":"20575"}},"id":"20574","type":"GlyphRenderer"},{"attributes":{},"id":"20600","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"20570"}},"id":"20575","type":"CDSView"},{"attributes":{"coordinates":null,"group":null},"id":"20594","type":"Title"},{"attributes":{"data":{},"selected":{"id":"20607"},"selection_policy":{"id":"20606"}},"id":"20582","type":"ColumnDataSource"},{"attributes":{},"id":"20605","type":"Selection"},{"attributes":{},"id":"20597","type":"BasicTickFormatter"},{"attributes":{},"id":"20609","type":"Selection"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20559","type":"BoxAnnotation"},{"attributes":{},"id":"20552","type":"PanTool"},{"attributes":{"coordinates":null,"formatter":{"id":"20597"},"group":null,"major_label_policy":{"id":"20598"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"20548"}},"id":"20547","type":"LinearAxis"},{"attributes":{"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20571","type":"Line"}],"root_ids":["20616"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"f3a7376a-cca5-40e5-8634-3054a2d37fca","root_ids":["20616"],"roots":{"20616":"d0fbe464-4139-48c3-8884-e07217ebaeaa"}}];
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