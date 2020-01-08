let vs = {|
    attribute vec4 aPosition;
    void main(){
        gl_Position = aPosition;
        gl_PointSize = 10.0;
    }
    |};

let fs = {|
    void main(){
        gl_FragColor = vec4(1.0,0.0,0.0,1.0);
    }
    |};

let start = () => {
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

  let aPosition = gl |> Gl.getAttribLocation(program, "aPosition");
  aPosition < 0 ? Js.log("get aPosition error") : ();

  gl |> Gl.vertexAttrib3f(aPosition, 0., 0., 0.);

  gl |> Gl.drawArrays(Gl.getPoints(gl), 0, 1);
};