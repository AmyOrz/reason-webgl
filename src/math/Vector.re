/* let _transformMat4ToTuple = ((x, y, z), mat4) => {
     let w =
       ref(
         Float32Array.unsafe_get(mat4, 3)
         *. x
         +. Float32Array.unsafe_get(mat4, 7)
         *. y
         +. Float32Array.unsafe_get(mat4, 11)
         *. z
         +. Float32Array.unsafe_get(mat4, 15),
       );
     w :=
       (
         switch (w^) {
         | 0. => 1.0
         | d => d
         }
       );
     (
       (
         Float32Array.unsafe_get(mat4, 0)
         *. x
         +. Float32Array.unsafe_get(mat4, 4)
         *. y
         +. Float32Array.unsafe_get(mat4, 8)
         *. z
         +. Float32Array.unsafe_get(mat4, 12)
       )
       /. w^,
       (
         Float32Array.unsafe_get(mat4, 1)
         *. x
         +. Float32Array.unsafe_get(mat4, 5)
         *. y
         +. Float32Array.unsafe_get(mat4, 9)
         *. z
         +. Float32Array.unsafe_get(mat4, 13)
       )
       /. w^,
       (
         Float32Array.unsafe_get(mat4, 2)
         *. x
         +. Float32Array.unsafe_get(mat4, 6)
         *. y
         +. Float32Array.unsafe_get(mat4, 10)
         *. z
         +. Float32Array.unsafe_get(mat4, 14)
       )
       /. w^,
     );
   }; */

/* let transformMat4Tuple = (sourceVec3Tuple, mat4: Float32Array.t) =>
   _transformMat4ToTuple(sourceVec3Tuple, mat4); */

/* let add = (type g, kind: number(g), (x1, y1, z1), (x2, y2, z2)) =>
   switch (kind) {
   | Float => (x1 +. x2, y1 +. y2, z1 +. z2)
   };

    */

/* let multiply = (type g, kind: number(g), (x1, y1, z1), (x2, y2, z2)) =>
   switch (kind) {
   | Float => (x1 *. x2, y1 *. y2, z1 *. z2)
   }; */

let dot = ((x, y, z), (vx, vy, vz)) => x *. vx +. y *. vy +. z *. vz;

let sub = ((x1, y1, z1), (x2, y2, z2)) => (x1 -. x2, y1 -. y2, z1 -. z2);

let scale = (scalar, (x, y, z)) => (x *. scalar, y *. scalar, z *. scalar);

/* let lerp = ((x1, y1, z1), (x2, y2, z2), t: float) => (
     x1 +. t *. (x2 -. x1),
     y1 +. t *. (y2 -. y1),
     z1 +. t *. (z2 -. z1),
   ); */

let cross = ((x1, y1, z1), (x2, y2, z2)) => (
  y1 *. z2 -. y2 *. z1,
  z1 *. x2 -. z2 *. x1,
  x1 *. y2 -. x2 *. y1,
);

let normalize = ((x, y, z)) => {
  let d = Js.Math.sqrt(x *. x +. y *. y +. z *. z);
  d === 0. ? (0., 0., 0.) : (x /. d, y /. d, z /. d);
};

let lengthSq = ((x, y, z)) => x *. x +. y *. y +. z *. z;

let length = vec => Js.Math.sqrt(lengthSq(vec));