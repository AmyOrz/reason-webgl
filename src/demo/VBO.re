open Js.Typed_array;

let vs = {|
    attribute vec4 aPosition;
    void main(){
        gl_Position = aPosition;
    }
    |};

let fs = {|
    precision mediump float;
    uniform vec3 uColor;
    void main(){
        gl_FragColor = vec4(uColor,1.0);
    }
    |};

let start = () => {
  let (gl, program) = OperateGLUtils.getGlAndProgram(vs, fs);

  let aPosition =
    gl |> OperateGLUtils.unsafeGetAttribLoation(program, "aPosition");

  let uColor =
    gl |> OperateGLUtils.unsafeGetUnformLocation(program, "uColor");

  let vertcies = Float32Array.make([|0., 0.5, (-0.5), (-0.5), 0.5, (-0.5)|]);

  gl |> Gl.uniform3f(uColor, 0., 1., 1.);

  let buffer = gl |> Gl.createBuffer;
  gl |> Gl.bindBuffer(Gl.getArrayBuffer(gl), buffer);
  gl
  |> Gl.bufferFloat32Data(
       Gl.getArrayBuffer(gl),
       vertcies,
       Gl.getStaticDraw(gl),
     );
  gl |> Gl.vertexAttribPointer(aPosition, 2, Gl.getFloat(gl), false, 0, 0);
  gl |> Gl.enableVertexAttribArray(aPosition);

  gl |> Gl.drawArrays(Gl.getTriangles(gl), 0, 3);
};