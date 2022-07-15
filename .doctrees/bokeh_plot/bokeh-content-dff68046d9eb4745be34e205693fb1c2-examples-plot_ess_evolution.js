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
    
    
    const element = document.getElementById("c0600a44-1bd8-42e1-9ec1-01e8c547554a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c0600a44-1bd8-42e1-9ec1-01e8c547554a' but no matching script tag was found.")
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
                  const docs_json = '{"6f5121ad-0f34-487c-8a99-f966a69f69c4":{"defs":[],"roots":{"references":[{"attributes":{},"id":"21067","type":"UnionRenderers"},{"attributes":{},"id":"21068","type":"Selection"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21014","type":"PolyAnnotation"},{"attributes":{"toolbar":{"id":"21073"},"toolbar_location":"above"},"id":"21074","type":"ToolbarBox"},{"attributes":{"children":[[{"id":"20988"},0,0]]},"id":"21072","type":"GridBox"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21064"},"selection_policy":{"id":"21063"}},"id":"21030","type":"ColumnDataSource"},{"attributes":{},"id":"21010","type":"UndoTool"},{"attributes":{"above":[{"id":"21049"}],"below":[{"id":"20997"}],"center":[{"id":"21000"},{"id":"21004"}],"height":500,"left":[{"id":"21001"}],"output_backend":"webgl","renderers":[{"id":"21028"},{"id":"21034"},{"id":"21040"},{"id":"21046"},{"id":"21048"}],"title":{"id":"21052"},"toolbar":{"id":"21015"},"toolbar_location":null,"width":500,"x_range":{"id":"20989"},"x_scale":{"id":"20993"},"y_range":{"id":"20991"},"y_scale":{"id":"20995"}},"id":"20988","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20989","type":"DataRange1d"},{"attributes":{"coordinates":null,"data_source":{"id":"21024"},"glyph":{"id":"21025"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21027"},"nonselection_glyph":{"id":"21026"},"view":{"id":"21029"}},"id":"21028","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21026","type":"Circle"},{"attributes":{},"id":"21057","type":"AllLabels"},{"attributes":{},"id":"21061","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21025","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"21038","type":"Line"},{"attributes":{},"id":"20993","type":"LinearScale"},{"attributes":{},"id":"20995","type":"LinearScale"},{"attributes":{"source":{"id":"21024"}},"id":"21029","type":"CDSView"},{"attributes":{"line_alpha":0.2,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"21039","type":"Line"},{"attributes":{"coordinates":null,"group":null,"text":"b"},"id":"21052","type":"Title"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21068"},"selection_policy":{"id":"21067"}},"id":"21042","type":"ColumnDataSource"},{"attributes":{},"id":"21005","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21044","type":"Circle"},{"attributes":{},"id":"20991","type":"DataRange1d"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"21050"},{"id":"21051"}],"location":"center_right","orientation":"horizontal"},"id":"21049","type":"Legend"},{"attributes":{},"id":"21056","type":"BasicTickFormatter"},{"attributes":{},"id":"21059","type":"BasicTickFormatter"},{"attributes":{},"id":"21064","type":"Selection"},{"attributes":{},"id":"21065","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"21036"},"glyph":{"id":"21037"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21039"},"nonselection_glyph":{"id":"21038"},"view":{"id":"21041"}},"id":"21040","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"21032","type":"Line"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"21033","type":"Line"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21045","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"21030"},"glyph":{"id":"21031"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21033"},"nonselection_glyph":{"id":"21032"},"view":{"id":"21035"}},"id":"21034","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"21042"},"glyph":{"id":"21043"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21045"},"nonselection_glyph":{"id":"21044"},"view":{"id":"21047"}},"id":"21046","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"21013"}},"id":"21007","type":"BoxZoomTool"},{"attributes":{},"id":"21006","type":"PanTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21013","type":"BoxAnnotation"},{"attributes":{},"id":"21062","type":"Selection"},{"attributes":{"toolbars":[{"id":"21015"}],"tools":[{"id":"21005"},{"id":"21006"},{"id":"21007"},{"id":"21008"},{"id":"21009"},{"id":"21010"},{"id":"21011"},{"id":"21012"}]},"id":"21073","type":"ProxyToolbar"},{"attributes":{"source":{"id":"21030"}},"id":"21035","type":"CDSView"},{"attributes":{"source":{"id":"21042"}},"id":"21047","type":"CDSView"},{"attributes":{},"id":"21066","type":"Selection"},{"attributes":{"axis":{"id":"20997"},"coordinates":null,"group":null,"ticker":null},"id":"21000","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21027","type":"Circle"},{"attributes":{"source":{"id":"21036"}},"id":"21041","type":"CDSView"},{"attributes":{"children":[{"id":"21074"},{"id":"21072"}]},"id":"21075","type":"Column"},{"attributes":{"overlay":{"id":"21014"}},"id":"21009","type":"LassoSelectTool"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"21031","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21066"},"selection_policy":{"id":"21065"}},"id":"21036","type":"ColumnDataSource"},{"attributes":{"axis_label":"ESS","coordinates":null,"formatter":{"id":"21056"},"group":null,"major_label_policy":{"id":"21057"},"ticker":{"id":"21002"}},"id":"21001","type":"LinearAxis"},{"attributes":{"axis":{"id":"21001"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21004","type":"Grid"},{"attributes":{},"id":"21011","type":"SaveTool"},{"attributes":{},"id":"21063","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21062"},"selection_policy":{"id":"21061"}},"id":"21024","type":"ColumnDataSource"},{"attributes":{"axis_label":"Total number of draws","coordinates":null,"formatter":{"id":"21059"},"group":null,"major_label_policy":{"id":"21060"},"ticker":{"id":"20998"}},"id":"20997","type":"LinearAxis"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21048","type":"Span"},{"attributes":{},"id":"21060","type":"AllLabels"},{"attributes":{"tools":[{"id":"21005"},{"id":"21006"},{"id":"21007"},{"id":"21008"},{"id":"21009"},{"id":"21010"},{"id":"21011"},{"id":"21012"}]},"id":"21015","type":"Toolbar"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"21028"},{"id":"21034"}]},"id":"21050","type":"LegendItem"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"21037","type":"Line"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"21046"},{"id":"21040"}]},"id":"21051","type":"LegendItem"},{"attributes":{},"id":"21002","type":"BasicTicker"},{"attributes":{"callback":null},"id":"21012","type":"HoverTool"},{"attributes":{"fill_color":{"value":"orange"},"hatch_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21043","type":"Circle"},{"attributes":{},"id":"21008","type":"WheelZoomTool"},{"attributes":{},"id":"20998","type":"BasicTicker"}],"root_ids":["21075"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"6f5121ad-0f34-487c-8a99-f966a69f69c4","root_ids":["21075"],"roots":{"21075":"c0600a44-1bd8-42e1-9ec1-01e8c547554a"}}];
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