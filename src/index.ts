import * as THREE from 'three';
import './assets/css/reset.css'

let renderer, scene, camera, stats;

let particleSystem, uniforms, geometry;

const particles = 100000;

init();
// animate();

function init() {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
  camera.position.set( 0, 0, 100 );
  camera.lookAt( 0, 0, 0 );

  const scene = new THREE.Scene();

  //create a blue LineBasicMaterial
  const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

  const points = [];
  points.push( new THREE.Vector3( - 10, 0, 0 ) );
  points.push( new THREE.Vector3( 0, 10, 0 ) );
  points.push( new THREE.Vector3( 10, 0, 0 ) );

  const geometry = new THREE.BufferGeometry().setFromPoints( points );

  const line = new THREE.Line( geometry, material );

  scene.add( line );
  renderer.render( scene, camera );
}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

  requestAnimationFrame( animate );

  render();
  stats.update();

}

function render() {

  const time = Date.now() * 0.005;

  particleSystem.rotation.z = 0.01 * time;

  const sizes = geometry.attributes.size.array;

  for ( let i = 0; i < particles; i ++ ) {

    sizes[ i ] = 10 * ( 1 + Math.sin( 0.1 * i + time ) );

  }

  geometry.attributes.size.needsUpdate = true;

  renderer.render( scene, camera );

}
