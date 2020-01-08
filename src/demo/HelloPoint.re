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
  let (gl, program) = OperateGLUtils.getGlAndProgram(vs, fs);

  let aPosition = gl |> Gl.getAttribLocation(program, "aPosition");
  aPosition < 0 ? Js.log("get aPosition error") : ();

  gl |> Gl.vertexAttrib3f(aPosition, 0., 0., 0.);

  gl |> Gl.drawArrays(Gl.getPoints(gl), 0, 1);
};