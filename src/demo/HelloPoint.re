open Js.Typed_array;

let vs = {|
    attribute vec4 aPosition;
    attribute float aSize;
    void main(){
        gl_Position = aPosition;
        gl_PointSize = aSize;
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
  let aSize = gl |> OperateGLUtils.unsafeGetAttribLoation(program, "aSize");

  let uColor =
    gl |> OperateGLUtils.unsafeGetUnformLocation(program, "uColor");

  gl |> Gl.vertexAttrib3f(aPosition, 0.3, 0.5, 0.);
  gl |> Gl.vertexAttrib1f(aSize, 20.);
  gl |> Gl.uniform3f(uColor, 0., 1., 1.);
  gl |> Gl.drawArrays(Gl.getPoints(gl), 0, 1);

  gl
  |> Gl.vertexAttrib4fv(
       aPosition,
       Float32Array.make([|(-0.5), 0.5, 0., 1.|]),
     );
  gl |> Gl.uniform3f(uColor, 1., 1., 0.);
  gl |> Gl.drawArrays(Gl.getPoints(gl), 0, 1);
};