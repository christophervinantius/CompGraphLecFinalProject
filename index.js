import * as THREE from "./three.js/build/three.module.js";

let renderer, camera, scene;

let init = () => {
    renderer = new THREE.WebGLRenderer({
        antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let fov = 45;
    let aspect = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 1000);
    camera.position.set(10, 10, 10);
    camera.lookAt(0, 0, 0);

    scene = new THREE.Scene();
};

let render = () => {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
};

window.onload = () => {
    init();
    render();
};
