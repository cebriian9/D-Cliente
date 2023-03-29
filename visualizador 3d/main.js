import * as THREE from './three.module.js';
import { STLLoader } from './STLLoader.js';
import { OrbitControls } from './OrbitControls.js';

const fileInput = document.getElementById('file-input');
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.addEventListener('load', (event) => {
    const loader = new STLLoader();
    const geometry = loader.parse(event.target.result);
    const material = new THREE.MeshNormalMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    const scene = new THREE.Scene();
    scene.add(mesh);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);
    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
  });
  reader.readAsArrayBuffer(file);
});
