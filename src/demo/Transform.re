open Js.Typed_array;

let vs = {|
    attribute vec4 aPosition;
    uniform mat4 uModelMatrix;
    void main(){
        gl_Position = uModelMatrix * aPosition;
    }
    |};

let fs = {|
    precision mediump float;
    void main(){
        gl_FragColor = vec4(1.0,1.0,0.0,1.0);
    }
    |};

let _initVertexBuffer = (gl, program) => {
  let vertcies = Float32Array.make([|0., 0.5, (-0.5), (-0.5), 0.5, (-0.5)|]);
  let aPosition =
    gl |> OperateGLUtils.unsafeGetAttribLoation(program, "aPosition");
  let buffer = gl |> OperateGLUtils.unsafeCreateBuffer;

  gl |> Gl.bindBuffer(gl |> Gl.getArrayBuffer, buffer);
  gl
  |> Gl.bufferFloat32Data(
       gl |> Gl.getArrayBuffer,
       vertcies,
       gl |> Gl.getStaticDraw,
     );
  gl |> Gl.vertexAttribPointer(aPosition, 2, gl |> Gl.getFloat, false, 0, 0);
  gl |> Gl.enableVertexAttribArray(aPosition);

  3;
};

let start = () => {
  let (gl, program) = OperateGLUtils.getGlAndProgram(vs, fs);

  let uModelMatrix =
    gl |> OperateGLUtils.unsafeGetUnformLocation(program, "uModelMatrix");

  let n = _initVertexBuffer(gl, program);

  let modelMatrix = Matrix.createIdentityMatrix();

  /* modelMatrix
     |> Matrix.setRotate((0., 0., 1.), 80.)
     |> Matrix.translate((0.5, 0., 0.))
     |> Gl.uniformMatrix4fv(uModelMatrix, false, _, gl); */

  modelMatrix
  |> Matrix.setTranslation((0.5, 0., 0.))
  |> Matrix.rotate((0., 0., 1.), 80.)
  |> Gl.uniformMatrix4fv(uModelMatrix, false, _, gl);

  let _loopBody = () => {
    modelMatrix
    |> Matrix.rotate((0., 0., 1.), 80.)
    |> Gl.uniformMatrix4fv(uModelMatrix, false, _, gl);

    gl |> Gl.clear(gl |> Gl.getColorBufferBit);

    gl |> Gl.drawArrays(gl |> Gl.getTriangles, 0, n);
  };

  let rec _loop = () =>
    DomExtend.requestAnimationFrame((time: float) => {
      _loopBody();
      _loop() |> ignore;
    });

  _loop();
};