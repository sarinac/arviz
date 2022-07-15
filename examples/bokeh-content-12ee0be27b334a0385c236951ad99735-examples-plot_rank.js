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
    
    
    const element = document.getElementById("d4576474-f23a-4932-b06f-05f18976cd44");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd4576474-f23a-4932-b06f-05f18976cd44' but no matching script tag was found.")
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
                  const docs_json = '{"e96661d0-1ba9-4899-9766-ea2f00db8ffe":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"data_source":{"id":"48440"},"glyph":{"id":"48441"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48443"},"nonselection_glyph":{"id":"48442"},"view":{"id":"48445"}},"id":"48444","type":"GlyphRenderer"},{"attributes":{},"id":"48411","type":"LinearScale"},{"attributes":{"callback":null},"id":"48428","type":"HoverTool"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48525"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48526"},"ticker":{"id":"48414"}},"id":"48413","type":"LinearAxis"},{"attributes":{"axis":{"id":"48417"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48420","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"48502","type":"Title"},{"attributes":{"callback":null},"id":"48394","type":"HoverTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48441","type":"VBar"},{"attributes":{"overlay":{"id":"48429"}},"id":"48423","type":"BoxZoomTool"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"48470","type":"Title"},{"attributes":{},"id":"48422","type":"PanTool"},{"attributes":{},"id":"48421","type":"ResetTool"},{"attributes":{},"id":"48505","type":"BasicTickFormatter"},{"attributes":{},"id":"48380","type":"BasicTicker"},{"attributes":{},"id":"48427","type":"SaveTool"},{"attributes":{},"id":"48424","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"48430"}},"id":"48425","type":"LassoSelectTool"},{"attributes":{},"id":"48506","type":"AllLabels"},{"attributes":{},"id":"48426","type":"UndoTool"},{"attributes":{},"id":"48508","type":"BasicTickFormatter"},{"attributes":{},"id":"48375","type":"LinearScale"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48508"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48509"},"ticker":{"id":"48380"}},"id":"48379","type":"LinearAxis"},{"attributes":{},"id":"48509","type":"AllLabels"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48429","type":"BoxAnnotation"},{"attributes":{},"id":"48377","type":"LinearScale"},{"attributes":{"axis":{"id":"48379"},"coordinates":null,"group":null,"ticker":null},"id":"48382","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48443","type":"VBar"},{"attributes":{},"id":"48522","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"48383"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48386","type":"Grid"},{"attributes":{},"id":"48523","type":"AllLabels"},{"attributes":{},"id":"48510","type":"UnionRenderers"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48505"},"group":null,"major_label_policy":{"id":"48506"},"ticker":{"id":"48468"}},"id":"48383","type":"LinearAxis"},{"attributes":{},"id":"48525","type":"BasicTickFormatter"},{"attributes":{},"id":"48511","type":"Selection"},{"attributes":{"below":[{"id":"48379"}],"center":[{"id":"48382"},{"id":"48386"},{"id":"48446"},{"id":"48453"},{"id":"48460"},{"id":"48467"}],"height":331,"left":[{"id":"48383"}],"output_backend":"webgl","renderers":[{"id":"48444"},{"id":"48451"},{"id":"48458"},{"id":"48465"}],"title":{"id":"48470"},"toolbar":{"id":"48397"},"toolbar_location":null,"width":496,"x_range":{"id":"48371"},"x_scale":{"id":"48375"},"y_range":{"id":"48373"},"y_scale":{"id":"48377"}},"id":"48370","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48511"},"selection_policy":{"id":"48510"}},"id":"48440","type":"ColumnDataSource"},{"attributes":{},"id":"48371","type":"DataRange1d"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48448","type":"VBar"},{"attributes":{},"id":"48526","type":"AllLabels"},{"attributes":{"overlay":{"id":"48395"}},"id":"48389","type":"BoxZoomTool"},{"attributes":{},"id":"48388","type":"PanTool"},{"attributes":{},"id":"48387","type":"ResetTool"},{"attributes":{"ticks":[0,1,2,3]},"id":"48468","type":"FixedTicker"},{"attributes":{},"id":"48393","type":"SaveTool"},{"attributes":{},"id":"48390","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"48396"}},"id":"48391","type":"LassoSelectTool"},{"attributes":{"tools":[{"id":"48421"},{"id":"48422"},{"id":"48423"},{"id":"48424"},{"id":"48425"},{"id":"48426"},{"id":"48427"},{"id":"48428"}]},"id":"48431","type":"Toolbar"},{"attributes":{},"id":"48392","type":"UndoTool"},{"attributes":{"tools":[{"id":"48387"},{"id":"48388"},{"id":"48389"},{"id":"48390"},{"id":"48391"},{"id":"48392"},{"id":"48393"},{"id":"48394"}]},"id":"48397","type":"Toolbar"},{"attributes":{"source":{"id":"48440"}},"id":"48445","type":"CDSView"},{"attributes":{},"id":"48373","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48395","type":"BoxAnnotation"},{"attributes":{},"id":"48409","type":"LinearScale"},{"attributes":{"children":[[{"id":"48370"},0,0],[{"id":"48406"},0,1]]},"id":"48538","type":"GridBox"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48396","type":"PolyAnnotation"},{"attributes":{},"id":"48512","type":"UnionRenderers"},{"attributes":{"axis":{"id":"48413"},"coordinates":null,"group":null,"ticker":null},"id":"48416","type":"Grid"},{"attributes":{},"id":"48513","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.41666666666666663},"id":"48446","type":"Span"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48522"},"group":null,"major_label_policy":{"id":"48523"},"ticker":{"id":"48500"}},"id":"48417","type":"LinearAxis"},{"attributes":{},"id":"48527","type":"UnionRenderers"},{"attributes":{},"id":"48414","type":"BasicTicker"},{"attributes":{},"id":"48528","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48513"},"selection_policy":{"id":"48512"}},"id":"48447","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48442","type":"VBar"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48430","type":"PolyAnnotation"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.4166666666666665},"id":"48460","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48455","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48447"},"glyph":{"id":"48448"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48450"},"nonselection_glyph":{"id":"48449"},"view":{"id":"48452"}},"id":"48451","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4166666666666665},"id":"48453","type":"Span"},{"attributes":{"source":{"id":"48447"}},"id":"48452","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48450","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48449","type":"VBar"},{"attributes":{},"id":"48514","type":"UnionRenderers"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48462","type":"VBar"},{"attributes":{},"id":"48515","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.4166666666666665},"id":"48467","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48515"},"selection_policy":{"id":"48514"}},"id":"48454","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48454"},"glyph":{"id":"48455"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48457"},"nonselection_glyph":{"id":"48456"},"view":{"id":"48459"}},"id":"48458","type":"GlyphRenderer"},{"attributes":{"source":{"id":"48454"}},"id":"48459","type":"CDSView"},{"attributes":{},"id":"48529","type":"UnionRenderers"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48457","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48456","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48480","type":"VBar"},{"attributes":{},"id":"48530","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48517"},"selection_policy":{"id":"48516"}},"id":"48461","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48461"},"glyph":{"id":"48462"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48464"},"nonselection_glyph":{"id":"48463"},"view":{"id":"48466"}},"id":"48465","type":"GlyphRenderer"},{"attributes":{"source":{"id":"48461"}},"id":"48466","type":"CDSView"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48464","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48463","type":"VBar"},{"attributes":{"ticks":[0,1,2,3]},"id":"48500","type":"FixedTicker"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48528"},"selection_policy":{"id":"48527"}},"id":"48472","type":"ColumnDataSource"},{"attributes":{},"id":"48516","type":"UnionRenderers"},{"attributes":{"source":{"id":"48472"}},"id":"48477","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"48472"},"glyph":{"id":"48473"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48475"},"nonselection_glyph":{"id":"48474"},"view":{"id":"48477"}},"id":"48476","type":"GlyphRenderer"},{"attributes":{},"id":"48517","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48473","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4807692307692308},"id":"48485","type":"Span"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48475","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48474","type":"VBar"},{"attributes":{},"id":"48531","type":"UnionRenderers"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48487","type":"VBar"},{"attributes":{},"id":"48532","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.48076923076923067},"id":"48478","type":"Span"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.480769230769231},"id":"48492","type":"Span"},{"attributes":{"below":[{"id":"48413"}],"center":[{"id":"48416"},{"id":"48420"},{"id":"48478"},{"id":"48485"},{"id":"48492"},{"id":"48499"}],"height":331,"left":[{"id":"48417"}],"output_backend":"webgl","renderers":[{"id":"48476"},{"id":"48483"},{"id":"48490"},{"id":"48497"}],"title":{"id":"48502"},"toolbar":{"id":"48431"},"toolbar_location":null,"width":496,"x_range":{"id":"48371"},"x_scale":{"id":"48409"},"y_range":{"id":"48373"},"y_scale":{"id":"48411"}},"id":"48406","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48530"},"selection_policy":{"id":"48529"}},"id":"48479","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48479"},"glyph":{"id":"48480"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48482"},"nonselection_glyph":{"id":"48481"},"view":{"id":"48484"}},"id":"48483","type":"GlyphRenderer"},{"attributes":{"source":{"id":"48479"}},"id":"48484","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48482","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48481","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48494","type":"VBar"},{"attributes":{"children":[{"id":"48540"},{"id":"48538"}]},"id":"48541","type":"Column"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.480769230769231},"id":"48499","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48532"},"selection_policy":{"id":"48531"}},"id":"48486","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48486"},"glyph":{"id":"48487"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48489"},"nonselection_glyph":{"id":"48488"},"view":{"id":"48491"}},"id":"48490","type":"GlyphRenderer"},{"attributes":{"source":{"id":"48486"}},"id":"48491","type":"CDSView"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48489","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48488","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48534"},"selection_policy":{"id":"48533"}},"id":"48493","type":"ColumnDataSource"},{"attributes":{},"id":"48533","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"48493"},"glyph":{"id":"48494"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48496"},"nonselection_glyph":{"id":"48495"},"view":{"id":"48498"}},"id":"48497","type":"GlyphRenderer"},{"attributes":{"source":{"id":"48493"}},"id":"48498","type":"CDSView"},{"attributes":{},"id":"48534","type":"Selection"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48496","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48495","type":"VBar"},{"attributes":{"toolbars":[{"id":"48397"},{"id":"48431"}],"tools":[{"id":"48387"},{"id":"48388"},{"id":"48389"},{"id":"48390"},{"id":"48391"},{"id":"48392"},{"id":"48393"},{"id":"48394"},{"id":"48421"},{"id":"48422"},{"id":"48423"},{"id":"48424"},{"id":"48425"},{"id":"48426"},{"id":"48427"},{"id":"48428"}]},"id":"48539","type":"ProxyToolbar"},{"attributes":{"toolbar":{"id":"48539"},"toolbar_location":"above"},"id":"48540","type":"ToolbarBox"}],"root_ids":["48541"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"e96661d0-1ba9-4899-9766-ea2f00db8ffe","root_ids":["48541"],"roots":{"48541":"d4576474-f23a-4932-b06f-05f18976cd44"}}];
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