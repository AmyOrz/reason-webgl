let getGlAndProgram = (vs, fs) => {
    let canvas = DomExtend.querySelector(DomExtend.document, "#webgl");
  
    let gl =
      Gl.getWebgl1Context(
        canvas,
        {
          "alpha": true,
          "depth": true,
          "stencil": false,
          "antialias": true,
          "premultipliedAlpha": true,
          "preserveDrawingBuffer": false,
        }: Gl.contextConfigJsObj,
      );
  
    let program = gl |> Gl.createProgram |> Utils.initShader(vs, fs, gl);
  
    gl |> Gl.useProgram(program);
    gl |> Gl.clearColor(0., 0., 0., 1.);
    gl |> Gl.enable(Gl.getDepthTest(gl));
    gl |> Gl.clear(Gl.getColorBufferBit(gl) lor Gl.getDepthBufferBit(gl));
  
    (gl, program);
  };
  
  let unsafeGetAttribLoation = (gl, program, attr) => {
    let target = gl |> Gl.getAttribLocation(program, attr);
    /* target < 0 ? Utils.error("fck this") |> ignore : target; */
    target;
  };