import { proxy } from "valtio";

const state = proxy({
    intro: true, //are w currently in the home page?
    color: '#EFBD48', //default color
    isLogoTexture: true, //are we currently displaying logo on the shirt?
    isFullTexture: false, 
    logoDecal: './threejs.png', //initial logo 
    fullDecal: './threejs.png' //initial full texture decal
});

export default state;