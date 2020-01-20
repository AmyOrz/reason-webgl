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

let _initVBO = (gl, program) => {
  let verticeArray =
    Float32Array.make([|
      (-0.5),
      (-0.5),
      10.0,
      0.5,
      (-0.5),
      20.0,
      0.5,
      0.5,
      30.0,
    |]);

  let buffer = gl |> Gl.createBuffer;
  let fsize = Float32Array._BYTES_PER_ELEMENT;
  gl |> Gl.bindBuffer(gl |> Gl.getArrayBuffer, buffer);
  gl
  |> Gl.bufferFloat32Data(
       gl |> Gl.getArrayBuffer,
       verticeArray,
       gl |> Gl.getStaticDraw,
     );

  let aPosition =
    gl |> OperateGLUtils.unsafeGetAttribLoation(program, "aPosition");
  let aSize = gl |> OperateGLUtils.unsafeGetAttribLoation(program, "aSize");

  Js.log(fsize);
  gl
  |> Gl.vertexAttribPointer(
       aPosition,
       2,
       gl |> Gl.getFloat,
       false,
       fsize * 3,
       0,
     );
  gl |> Gl.enableVertexAttribArray(aPosition);

  gl
  |> Gl.vertexAttribPointer(
       aSize,
       1,
       gl |> Gl.getFloat,
       false,
       fsize * 3,
       fsize * 2,
     );
  gl |> Gl.enableVertexAttribArray(aSize);

  3;
};

let start = () => {
  let (gl, program) = OperateGLUtils.getGlAndProgram(vs, fs);

  let uColor =
    gl |> OperateGLUtils.unsafeGetUnformLocation(program, "uColor");

  gl |> Gl.uniform3f(uColor, 0., 1., 1.);
  /* gl |> Gl.vertexAttrib3f(aPosition, 0.3, 0.5, 0.);
     gl |> Gl.vertexAttrib1f(aSize, 20.);
     gl |> Gl.drawArrays(Gl.getPoints(gl), 0, 1);

     gl
     |> Gl.vertexAttrib4fv(
          aPosition,
          Float32Array.make([|(-0.5), 0.5, 0., 1.|]),
        );
     gl |> Gl.uniform3f(uColor, 1., 1., 0.);
     gl |> Gl.drawArrays(Gl.getPoints(gl), 0, 1); */

  let count = _initVBO(gl, program);

  gl |> Gl.drawArrays(gl |> Gl.getPoints, 0, count);
};