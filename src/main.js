import * as THREE from "three";
import {add} from "./math";

window.addEventListener("load",()=>{
  const p=document.createElement("p");
  p.textContent="rollup!";
  document.body.appendChild(p);

  console.log(`THREE.REVISION :${THREE.REVISION}`);
  console.log(add(1,2));
  
});
