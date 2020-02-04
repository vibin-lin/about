import * as THREE from 'three';
// import * as WHS from 'whs'

import './css/lib/reset.css'
import './css/index.css'

init()

function init() {
  // 获取浏览器窗口的宽高
  let width = window.innerWidth
  let height = window.innerHeight

  // 创建一个场景
  let scene = new THREE.Scene()

  // 创建一个具有透视效果的摄像机
  let camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 300)

  // 设置摄像机位置，并将其朝向场景中心
  camera.position.x = 0
  camera.position.y = 0
  camera.position.z = 20
  camera.lookAt(scene.position)

  // 创建一个 WebGL 渲染器，Three.js 还提供 <canvas>, <svg>, CSS3D 渲染器。
  let renderer = new THREE.WebGLRenderer()

  // 设置渲染器的清除颜色（即背景色）和尺寸。
  // 若想用 body 作为背景，则可以不设置 clearColor，然后在创建渲染器时设置 alpha: true，即 new THREE.WebGLRenderer({ alpha: true })
  renderer.setClearColor('#000')
  renderer.setSize(width, height)

  // 创建一个长宽高均为 4 个单位长度的立方体（几何体）
  let cubeGeometry = new THREE.BoxGeometry(4, 4, 4)

  // 创建材质（该材质不受光源影响）
  let cubeMaterial = new THREE.MeshBasicMaterial({
      color: '#fff'
  })

  // 创建一个立方体网格（mesh）：将材质包裹在几何体上
  let cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

  // 设置网格的位置
  cube.position.x = 0
  cube.position.y = -2
  cube.position.z = 0

  // 将立方体网格加入到场景中
  scene.add(cube)

  // 将渲染器的输出（此处是 canvas 元素）插入到 body 中
  document.body.appendChild(renderer.domElement)

  // 渲染，即摄像机拍下此刻的场景
  renderer.render(scene, camera)
}

// /**
//  * 设置舞台， 定义物理数据，相机， 渲染器等
//  */
// const app = new WHS.App([
//   // 创建一个元素,并把它传递给app
//   new WHS.ElementModule({
//     container: document.getElementById('app')
//   }),
//   // 新建一个场景模块
//   new WHS.SceneModule(),

//   // 新建相机模块
//   new WHS.CameraModule({
//     position: {
//       y: 10,
//       z: 50
//     }
//   }),

//   // 渲染环境， 增加背景色等
//   new WHS.RenderingModule({
//     bgColor: '#000',

//     renderer: {
//       antialias: true,
//       shadowmap: {
//         type: THREE.PCFSoftShadowMap
//       }
//     }
//   }, {shadow: true}),
//   new WHS.OrbitControlsModule(),
//   new WHS.ResizeModule()
// ]);

// // 中心的球
// // const sphere = new WHS.Sphere({ // Create sphere comonent.
// //   geometry: {
// //     radius: 5,
// //     widthSegments: 32,
// //     heightSegments: 32
// //   },

// //   material: new THREE.MeshPhongMaterial({
// //     color: 0xF2F2F2
// //   }),

// //   position: new THREE.Vector3(0, 5, 0)
// // });

// // sphere.addTo(app);

// const loadingText = new WHS.Text({
//   text: 'who',
//   parameters: {
//     size: 20,
//     height: 5,
//   },
//   material: new THREE.MeshBasicMaterial({
//     color: 0xffffff
//   }),
//   position: {
//     x: -40,
//     y: 20,
//     z: 0
//   }
// })
// loadingText.addTo(app)

// app.start();
