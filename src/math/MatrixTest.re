open Js.Typed_array;

let createIdentityMatrix = () =>
  Js.Typed_array.Float32Array.make([|
    1.,
    0.,
    0.,
    0.,
    0.,
    1.,
    0.,
    0.,
    0.,
    0.,
    1.,
    0.,
    0.,
    0.,
    0.,
    1.,
  |]);

let _getEpsilon = () => 0.000001;

let setLookAt =
    (
      (eyeX, eyeY, eyeZ) as eye,
      (centerX, centerY, centerZ) as center,
      (upX, upY, upZ) as up,
      resultFloat32Arr,
    ) =>
  Js.Math.abs_float(eyeX -. centerX) < _getEpsilon()
  && Js.Math.abs_float(eyeY -. centerY) < _getEpsilon()
  && Js.Math.abs_float(eyeZ -. centerZ) < _getEpsilon() ?
    resultFloat32Arr :
    {
      let (z1, z2, z3) as z = Vector.sub(eye, center) |> Vector.normalize;

      let (x1, x2, x3) as x = Vector.cross(up, z) |> Vector.normalize;

      let (y1, y2, y3) as y = Vector.cross(z, x) |> Vector.normalize;

      Float32Array.unsafe_set(resultFloat32Arr, 0, x1);
      Float32Array.unsafe_set(resultFloat32Arr, 1, y1);
      Float32Array.unsafe_set(resultFloat32Arr, 2, z1);
      Float32Array.unsafe_set(resultFloat32Arr, 3, 0.);
      Float32Array.unsafe_set(resultFloat32Arr, 4, x2);
      Float32Array.unsafe_set(resultFloat32Arr, 5, y2);
      Float32Array.unsafe_set(resultFloat32Arr, 6, z2);
      Float32Array.unsafe_set(resultFloat32Arr, 7, 0.);
      Float32Array.unsafe_set(resultFloat32Arr, 8, x3);
      Float32Array.unsafe_set(resultFloat32Arr, 9, y3);
      Float32Array.unsafe_set(resultFloat32Arr, 10, z3);
      Float32Array.unsafe_set(resultFloat32Arr, 11, 0.);
      Float32Array.unsafe_set(resultFloat32Arr, 12, -. Vector.dot(x, eye));
      Float32Array.unsafe_set(resultFloat32Arr, 13, -. Vector.dot(y, eye));
      Float32Array.unsafe_set(resultFloat32Arr, 14, -. Vector.dot(z, eye));
      Float32Array.unsafe_set(resultFloat32Arr, 15, 1.);

      resultFloat32Arr;
    };

let buildPerspective =
    ((fovy: float, aspect: float, near: float, far: float), resultFloat32Arr) => {
  /* WonderLog.Contract.requireCheck(
       () =>
         WonderLog.(
           Contract.(
             Operators.(
               test(
                 Log.buildAssertMessage(
                   ~expect={j|frustum not be null|j},
                   ~actual={j|be|j},
                 ),
                 () => {
                   let fovy = Js.Math._PI *. fovy /. 180. /. 2.;
                   Js.Math.sin(fovy) <>=. 0.;
                 },
               )
             )
           )
         ),
       IsDebugMainService.getIsDebug(StateDataMain.stateData),
     ); */

  Js.Math.sin(Js.Math._PI *. fovy /. 180. /. 2.) === 0. ?
    Utils.error("frustum should not be null") : ();

  let fovy = Js.Math._PI *. fovy /. 180. /. 2.;
  let s = Js.Math.sin(fovy);
  let rd = 1. /. (far -. near);
  let ct = Js.Math.cos(fovy) /. s;
  Float32Array.unsafe_set(resultFloat32Arr, 0, ct /. aspect);
  Float32Array.unsafe_set(resultFloat32Arr, 1, 0.);
  Float32Array.unsafe_set(resultFloat32Arr, 2, 0.);
  Float32Array.unsafe_set(resultFloat32Arr, 3, 0.);
  Float32Array.unsafe_set(resultFloat32Arr, 4, 0.);
  Float32Array.unsafe_set(resultFloat32Arr, 5, ct);
  Float32Array.unsafe_set(resultFloat32Arr, 6, 0.);
  Float32Array.unsafe_set(resultFloat32Arr, 7, 0.);
  Float32Array.unsafe_set(resultFloat32Arr, 8, 0.);
  Float32Array.unsafe_set(resultFloat32Arr, 9, 0.);
  Float32Array.unsafe_set(resultFloat32Arr, 10, -. (far +. near) *. rd);
  Float32Array.unsafe_set(resultFloat32Arr, 11, -1.);
  Float32Array.unsafe_set(resultFloat32Arr, 12, 0.);
  Float32Array.unsafe_set(resultFloat32Arr, 13, 0.);
  Float32Array.unsafe_set(resultFloat32Arr, 14, (-2.) *. far *. near *. rd);
  Float32Array.unsafe_set(resultFloat32Arr, 15, 0.);

  resultFloat32Arr;
};

let setTranslation = ((x, y, z), resultFloat32Arr) => {
  Float32Array.unsafe_set(resultFloat32Arr, 12, x);
  Float32Array.unsafe_set(resultFloat32Arr, 13, y);
  Float32Array.unsafe_set(resultFloat32Arr, 14, z);

  resultFloat32Arr;
};

let translate = ((x, y, z), resultFloat32Arr) => {
  open Float32Array;

  unsafe_get(resultFloat32Arr, 0)
  *. x
  +. unsafe_get(resultFloat32Arr, 4)
  *. y
  +. unsafe_get(resultFloat32Arr, 8)
  *. z
  +. unsafe_get(resultFloat32Arr, 12)
  |> unsafe_set(resultFloat32Arr, 12);

  unsafe_get(resultFloat32Arr, 1)
  *. x
  +. unsafe_get(resultFloat32Arr, 5)
  *. y
  +. unsafe_get(resultFloat32Arr, 9)
  *. z
  +. unsafe_get(resultFloat32Arr, 13)
  |> unsafe_set(resultFloat32Arr, 13);

  unsafe_get(resultFloat32Arr, 2)
  *. x
  +. unsafe_get(resultFloat32Arr, 6)
  *. y
  +. unsafe_get(resultFloat32Arr, 10)
  *. z
  +. unsafe_get(resultFloat32Arr, 14)
  |> unsafe_set(resultFloat32Arr, 14);

  unsafe_get(resultFloat32Arr, 3)
  *. x
  +. unsafe_get(resultFloat32Arr, 7)
  *. y
  +. unsafe_get(resultFloat32Arr, 11)
  *. z
  +. unsafe_get(resultFloat32Arr, 15)
  |> unsafe_set(resultFloat32Arr, 15);

  resultFloat32Arr |> PrintUtils.printPipeline;
};
/* Matrix4.prototype.rotate = function(angle, x, y, z) {
     return this.concat(new Matrix4().setRotate(angle, x, y, z));
   }; */

let setRotate = ((x, y, z), angle, resultFloat32Arr) => {
  let pi = Js.Math._PI *. angle /. 180.;
  let cos = Js.Math.cos(pi);
  let result = createIdentityMatrix();

  switch (x, y, z) {
  | (x, 0., 0.) =>
    Js.log(1);
    let sin = x < 0. ? -. Js.Math.sin(pi) : Js.Math.sin(pi);

    Float32Array.unsafe_set(result, 5, cos);
    Float32Array.unsafe_set(result, 6, sin);
    Float32Array.unsafe_set(result, 9, -. sin);
    Float32Array.unsafe_set(result, 10, cos);
  | (0., y, 0.) =>
    let sin = y < 0. ? -. Js.Math.sin(pi) : Js.Math.sin(pi);

    Js.log(2);
    Float32Array.unsafe_set(result, 0, cos);
    Float32Array.unsafe_set(result, 2, -. sin);
    Float32Array.unsafe_set(result, 8, sin);
    Float32Array.unsafe_set(result, 10, cos);
  | (0., 0., z) =>
    Js.log(3);
    let sin = z < 0. ? -. Js.Math.sin(pi) : Js.Math.sin(pi);

    Float32Array.unsafe_set(result, 0, cos);
    Float32Array.unsafe_set(result, 1, sin);
    Float32Array.unsafe_set(result, 4, -. sin);
    Float32Array.unsafe_set(result, 5, cos);
  | (x, y, z) => Js.log(4)
  };
};

let concat = (resource, target) => {
  open Float32Array;

  let result = createIdentityMatrix();

  for (i in 0 to 3) {
    let first = unsafe_get(target, i);
    let second = unsafe_get(target, i + 4);
    let thrid = unsafe_get(target, i + 8);
    let four = unsafe_get(target, i + 12);

    first
    *. unsafe_get(resource, 0)
    +. second
    *. unsafe_get(resource, 1)
    +. thrid
    *. unsafe_get(resource, 2)
    +. four
    *. unsafe_get(resource, 3)
    |> unsafe_set(result, i);

    first
    *. unsafe_get(resource, 4)
    +. second
    *. unsafe_get(resource, 5)
    +. thrid
    *. unsafe_get(resource, 6)
    +. four
    *. unsafe_get(resource, 7)
    |> unsafe_set(result, i + 4);

    first
    *. unsafe_get(resource, 8)
    +. second
    *. unsafe_get(resource, 9)
    +. thrid
    *. unsafe_get(resource, 10)
    +. four
    *. unsafe_get(resource, 11)
    |> unsafe_set(result, i + 8);

    first
    *. unsafe_get(resource, 12)
    +. second
    *. unsafe_get(resource, 13)
    +. thrid
    *. unsafe_get(resource, 14)
    +. four
    *. unsafe_get(resource, 15)
    |> unsafe_set(result, i + 12);
  };

  result;
};