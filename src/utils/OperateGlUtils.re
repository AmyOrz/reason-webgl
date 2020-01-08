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

let unsafeGetAttribLoation = (program, attr, gl) => {
  let target = gl |> Gl.getAttribLocation(program, attr);
  target < 0 ? Utils.error({|get attribute ${attr} error|}) : target;
};

let unsafeGetUnformLocation = (program, attr, gl) => {
  let target = gl |> Gl.getUniformLocation(program, attr);

  Js.Null.test(target) ?
    Utils.error({|get attribute ${attr} error|}) : target |> Js.Null.getExn;
};