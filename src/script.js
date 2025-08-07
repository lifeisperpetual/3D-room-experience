// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import GUI from 'lil-gui'
// /*
// Here are some clean, short animation ideas you can add to your isometric bedroom scene:

// 1. Lamp Glow Animation: Smoothly pulse the lamp light intensity to create a gentle breathing effect.
// 2. Curtain Sway: If you add curtains, animate them swaying slightly as if a breeze is coming through the window.
// 3. Bed Bounce: When the scene loads, make the bed (or mattress) gently bounce or settle into place.
// 4. Pillow Squish: Animate the pillows slightly squishing and returning to shape, as if someone just fluffed them.
// 5. Blanket Ripple: Add a subtle wave or ripple to the blanket, simulating a breeze or someone just moved it.
// 6. Camera Dolly: Slowly move or rotate the camera for a parallax effect, giving the scene more depth.
// 7. Lamp Switch: Animate the lamps turning on/off with a smooth fade.
// 8. Ambient Dust Particles: Add floating dust motes or light particles for a cozy, sunlit effect.

// Let me know which one(s) you want to implement, or if you want a code example for any!
// */
// /**
//  * Base
//  */
// // Debug
// const gui = new GUI()

// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// // Scene
// const scene = new THREE.Scene()

// /**
//  * Objects
// //  */

// // --- Isometric Bedroom: Vibrant, Big, and Clear ---

// // Floor
// const floor = new THREE.Mesh(
//     new THREE.BoxGeometry(8, 0.1, 8),
//     new THREE.MeshStandardMaterial({ color: 0x222a38 })
// )
// floor.position.set(0, -0.05, 0)
// scene.add(floor)

// // Walls
// const wall1 = new THREE.Mesh(
//     new THREE.BoxGeometry(8, 3.5, 0.15),
//     new THREE.MeshStandardMaterial({ color: 0xf2f2f2 })
// )
// wall1.position.set(0, 1.7, -4)
// scene.add(wall1)
// const wall2 = new THREE.Mesh(
//     new THREE.BoxGeometry(0.15, 3.5, 8),
//     new THREE.MeshStandardMaterial({ color: 0xe0e6f8 })
// )
// wall2.position.set(-4, 1.7, 0)
// scene.add(wall2)

// // Bed base (square, 6x6)
// const bedBase = new THREE.Mesh(
//     new THREE.BoxGeometry(3, 0.6, 3),
//     new THREE.MeshStandardMaterial({ color: 0xf7d9b7 })
// )
// bedBase.position.set(0, 0.3, -1.2)
// scene.add(bedBase)

// // Mattress (square, 6x6)
// const mattress = new THREE.Mesh(
//     new THREE.BoxGeometry(2.7, 0.5, 2.7),
//     new THREE.MeshStandardMaterial({ color: 0x7fd6ff })
// )
// mattress.position.set(0, 0.8, -1.2)
// scene.add(mattress)

// // Blanket (plane with segments for ripple animation)
// const blanketWidth = 2.7;
// const blanketHeight = 1.7;
// const blanketSegmentsW = 32;
// const blanketSegmentsH = 8;
// const blanketGeo = new THREE.PlaneGeometry(blanketWidth, blanketHeight, blanketSegmentsW, blanketSegmentsH);
// const blanketMat = new THREE.MeshStandardMaterial({ color: 0xffe066, side: THREE.DoubleSide });
// const blanket = new THREE.Mesh(blanketGeo, blanketMat);
// blanket.rotation.x = -Math.PI / 2; // Lay flat
// blanket.position.set(0, 1.13, -0.7); // raised slightly to avoid z-fighting
// scene.add(blanket);

// // Headboard (wider for square bed)
// const headboard = new THREE.Mesh(
//     new THREE.BoxGeometry(3.2, 1.1, 0.25),
//     new THREE.MeshStandardMaterial({ color: 0xf2e6d8 })
// )
// headboard.position.set(0, 1.25, -2.35)
// scene.add(headboard)

// // Pillows (rectangular, soft, with rounded edges)
// const pillowMat1 = new THREE.MeshStandardMaterial({ color: 0x6ecfff });
// const pillowMat2 = new THREE.MeshStandardMaterial({ color: 0x3eb6ff });
// // Use a scaled sphere for a rectangular, bulged pillow
// const pillowGeo = new THREE.SphereGeometry(0.38, 24, 16);
// const pillow1 = new THREE.Mesh(pillowGeo, pillowMat1);
// pillow1.scale.set(1.8, 0.38, 0.7); // increased width
// pillow1.position.set(-0.45, 1.09, -1.9);
// scene.add(pillow1);
// const pillow2 = new THREE.Mesh(pillowGeo, pillowMat2);
// pillow2.scale.set(1.8, 0.38, 0.7);
// pillow2.position.set(0.45, 1.09, -1.9);
// scene.add(pillow2);



// // Nightstands (under the lamps, as in reference image)
// const nightstandGeo = new THREE.BoxGeometry(0.9, 0.5, 0.9);
// const nightstandMat = new THREE.MeshStandardMaterial({ color: 0xf7d9b7 });
// const nightstand1 = new THREE.Mesh(nightstandGeo, nightstandMat);
// nightstand1.position.set(-2.2, 0.25, -2.1);
// scene.add(nightstand1);
// const nightstand2 = nightstand1.clone();
// nightstand2.position.set(2.2, 0.25, -2.1);
// scene.add(nightstand2);

// // Bedside Lamps (stylized, glowing, as in reference image)
// function createBedsideLamp(x, z) {
//     const group = new THREE.Group();
//     // Lamp base
//     const base = new THREE.Mesh(
//         new THREE.CylinderGeometry(0.18, 0.22, 0.25, 24),
//         new THREE.MeshStandardMaterial({ color: 0xf7c873 })
//     );
//     base.position.y = 0.125;
//     group.add(base);
//     // Lamp stem
//     const stem = new THREE.Mesh(
//         new THREE.CylinderGeometry(0.07, 0.07, 0.18, 16),
//         new THREE.MeshStandardMaterial({ color: 0xf7c873 })
//     );
//     stem.position.y = 0.29;
//     group.add(stem);
//     // Lamp shade (emissive, glowing)
//     const shade = new THREE.Mesh(
//         new THREE.ConeGeometry(0.32, 0.38, 24),
//         new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff2cc, emissiveIntensity: 1.2 })
//     );
//     shade.position.y = 0.55;
//     group.add(shade);
//     // Add a point light inside the shade
//     const lampLight = new THREE.PointLight(0xfff2cc, 1.5, 2.5);
//     lampLight.position.set(0, 0.55, 0);
//     group.add(lampLight);
//     // Place lamp above nightstand (nightstand height is 0.5, lamp base sits on top)
//     group.position.set(x, 0.5, z);
//     return group;
// }
// const lamp1 = createBedsideLamp(-2.2, -2.1);
// const lamp2 = createBedsideLamp(2.2, -2.1);
// scene.add(lamp1);
// scene.add(lamp2);
// const lampGroups = [lamp1, lamp2];

// // Rug (slightly larger than bed, extends in front and back)
// const rug = new THREE.Mesh(
//     new THREE.BoxGeometry(3.5, 0.04, 3.5),
//     new THREE.MeshStandardMaterial({ color: 0x3eb6ff })
// )
// // Move rug forward so it's visible in front of the bed
// rug.position.set(0, 0.02, -1.0);
// scene.add(rug);

// // Directional light for strong, even illumination
// const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
// dirLight.position.set(3, 6, 4);
// dirLight.target.position.set(0, 0.8, -1.2);
// scene.add(dirLight);
// scene.add(dirLight.target);

// // Slight ambient for fill
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
// scene.add(ambientLight);

// // Store lamp lights for animation
// // --- Store lamp shade and light references for toggling ---
// const lampToggles = [];
// scene.traverse(obj => {
//     if (obj.isMesh && obj.geometry.type === 'ConeGeometry' && obj.material && obj.material.emissive) {
//         // Find the lamp shade mesh
//         // Find the corresponding PointLight in the same parent group
//         const parent = obj.parent;
//         const lampLight = parent.children.find(child => child.isPointLight);
//         if (lampLight) {
//             lampToggles.push({
//                 shade: obj,
//                 lampLight: lampLight,
//                 on: true,
//                 originalEmissive: obj.material.emissiveIntensity,
//                 originalIntensity: lampLight.intensity
//             });
//             // Attach reference for raycast
//             obj.userData.lampToggle = lampToggles[lampToggles.length - 1];
//         }
//     }
// });

// // --- Track lamp states for ambient light control ---
// function updateAmbientForLamps() {
//     // If all lamps are off, dim ambient and directional
//     const allOff = lampToggles.every(l => !l.on);
//     ambientLight.intensity = allOff ? 0.05 : 0.2;
//     dirLight.intensity = allOff ? 0.05 : 1.2;
// }

// // Lamp switch state and fade animation
// let lampsOn = true;
// let lampFade = 1.0; // 1 = fully on, 0 = fully off
// const lampFadeSpeed = 2.5; // seconds to fully fade

// document.addEventListener('keydown', (e) => {
//     if (e.key === 'l' || e.key === 'L') {
//         lampsOn = !lampsOn;
//     }
// });

// // --- Raycaster for lamp click detection ---
// canvas.addEventListener('click', (event) => {
//     mouse.x = (event.clientX / sizes.width) * 2 - 1;
//     mouse.y = -(event.clientY / sizes.height) * 2 + 1;
//     raycaster.setFromCamera(mouse, camera);
//     const lampMeshes = lampToggles.map(l => l.shade);
//     const intersects = raycaster.intersectObjects(lampMeshes, true);
//     if (intersects.length > 0) {
//         const lampToggle = intersects[0].object.userData.lampToggle;
//         if (lampToggle) {
//             if (lampToggle.on) {
//                 lampToggle.shade.material.emissiveIntensity = 0;
//                 lampToggle.lampLight.intensity = 0;
//                 if (lampToggle.glowLight) lampToggle.glowLight.intensity = 0;
//                 lampToggle.on = false;
//             } else {
//                 lampToggle.shade.material.emissiveIntensity = lampToggle.originalEmissive;
//                 lampToggle.lampLight.intensity = lampToggle.originalIntensity;
//                 if (lampToggle.glowLight) lampToggle.glowLight.intensity = lampToggle.originalGlow;
//                 lampToggle.on = true;
//             }
//             updateAmbientForLamps();
//         }
//     }
// });

// // Raycaster and mouse for blanket hover
// const raycaster = new THREE.Raycaster();
// const mouse = new THREE.Vector2();
// let blanketHovered = false;


// // Window (geometric, grid style) on left wall
// const windowWidth = 1.8;
// const windowHeight = 1.6;
// const frameThickness = 0.08;
// const gridThickness = 0.04;
// const numCols = 3;
// const numRows = 3;
// const windowY = 1.8;
// const windowZ = 0;
// const windowX = -3.92;

// // Outer frame (vertical sides)
// const leftFrame = new THREE.Mesh(
//     new THREE.BoxGeometry(frameThickness, windowHeight + frameThickness, frameThickness),
//     new THREE.MeshStandardMaterial({ color: 0x8b5a2b })
// );
// leftFrame.position.set(windowX, windowY, windowZ - windowWidth/2);
// scene.add(leftFrame);
// const rightFrame = leftFrame.clone();
// rightFrame.position.set(windowX, windowY, windowZ + windowWidth/2);
// scene.add(rightFrame);

// // Outer frame (horizontal sides)
// const topFrame = new THREE.Mesh(
//     new THREE.BoxGeometry(frameThickness, frameThickness, windowWidth + frameThickness),
//     new THREE.MeshStandardMaterial({ color: 0x8b5a2b })
// );
// topFrame.position.set(windowX, windowY + windowHeight/2, windowZ);
// scene.add(topFrame);
// const bottomFrame = topFrame.clone();
// bottomFrame.position.set(windowX, windowY - windowHeight/2, windowZ);
// scene.add(bottomFrame);

// // Grid bars (vertical)
// for (let i = 1; i < numCols; i++) {
//     const xOffset = -windowWidth/2 + (windowWidth/numCols) * i;
//     const bar = new THREE.Mesh(
//         new THREE.BoxGeometry(gridThickness, windowHeight, gridThickness),
//         new THREE.MeshStandardMaterial({ color: 0x8b5a2b })
//     );
//     bar.position.set(windowX, windowY, windowZ + xOffset);
//     scene.add(bar);
// }
// // Grid bars (horizontal)
// for (let i = 1; i < numRows; i++) {
//     const yOffset = -windowHeight/2 + (windowHeight/numRows) * i;
//     const bar = new THREE.Mesh(
//         new THREE.BoxGeometry(frameThickness, gridThickness, windowWidth),
//         new THREE.MeshStandardMaterial({ color: 0x8b5a2b })
//     );
//     bar.position.set(windowX, windowY + yOffset, windowZ);
//     scene.add(bar);
// }
// // Glass pane
// const windowGlass = new THREE.Mesh(
//     new THREE.PlaneGeometry(windowWidth, windowHeight),
//     new THREE.MeshStandardMaterial({ color: 0x9ac5fa, transparent: true, opacity: 0.45, side: THREE.DoubleSide })
// );
// windowGlass.position.set(windowX + 0.01, windowY, windowZ);
// windowGlass.rotation.y = Math.PI / 2;
// scene.add(windowGlass);

// canvas.addEventListener('mousemove', (event) => {
//     // Convert mouse position to normalized device coordinates (-1 to +1)
//     mouse.x = (event.clientX / sizes.width) * 2 - 1;
//     mouse.y = -(event.clientY / sizes.height) * 2 + 1;
// });

// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// // window.addEventListener('resize', () =>
// // {
// //     // Update sizes
// //     sizes.width = window.innerWidth
// //     sizes.height = window.innerHeight

// //     // Update camera
// //     camera.aspect = sizes.width / sizes.height
// //     camera.updateProjectionMatrix()

// //     // Update renderer
// //     renderer.setSize(sizes.width, sizes.height)
// //     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// // })

// /**
//  * Camera
//  */
// // Base camera

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// // Set camera to a high, diagonal, isometric-like angle
// camera.position.set(7, 7, 7);
// camera.lookAt(0, 0.8, -1.2); // Focus on the bed center
// scene.add(camera)

// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

// // --- Edit Mode & Drag Controls ---
// let isEditMode = false;
// const moveObjectsBtn = document.getElementById('moveObjectsBtn');
// const movableObjects = [bedBase, mattress, rug, ...lampGroups];
// let dragControls;
// try {
//     dragControls = new DragControls(movableObjects, camera, renderer.domElement);
//     dragControls.enabled = false;

//     moveObjectsBtn.addEventListener('click', () => {
//         isEditMode = !isEditMode;
//         moveObjectsBtn.textContent = isEditMode ? 'Lock Objects' : 'Move Objects';
//         dragControls.enabled = isEditMode;
//     });

//     dragControls.addEventListener('dragstart', function (event) {
//         controls.enabled = false;
//         event.object.userData._originalY = event.object.position.y;
//     });
//     dragControls.addEventListener('drag', function (event) {
//         event.object.position.y = event.object.userData._originalY;
//     });
//     dragControls.addEventListener('dragend', function (event) {
//         controls.enabled = true;
//         delete event.object.userData._originalY;
//     });
// } catch (e) {
//     console.error('DragControls error:', e);
// }

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// /**
//  * Animate
//  */
// const clock = new THREE.Clock()

// const tick = () => {
//     const elapsedTime = clock.getElapsedTime();

//     // Lamp glow animation: pulse intensity with a sine wave
//     const baseIntensity = 1.2;
//     const pulse = Math.sin(elapsedTime * 2.2) * 0.35 + 1.0; // Range ~0.65 to 1.35

//     // Lamp switch fade animation
//     const fadeTarget = lampsOn ? 1.0 : 0.0;
//     lampFade += (fadeTarget - lampFade) * Math.min(1, elapsedTime * lampFadeSpeed * 0.016);
//     // Clamp
//     lampFade = Math.max(0, Math.min(1, lampFade));

//     // Raycast to check if blanket is hovered
//     raycaster.setFromCamera(mouse, camera);
//     const intersects = raycaster.intersectObject(blanket);
//     blanketHovered = intersects.length > 0;

//     // Blanket ripple animation (always active)
//     const pos = blanket.geometry.attributes.position;
//     for (let i = 0; i < pos.count; i++) {
//         const x = pos.getX(i);
//         const y = pos.getY(i);
//         // Wave travels along blanket (z axis in world, y axis in geometry)
//         const wave = Math.sin(elapsedTime * 2 + x * 2.5 + y * 1.5) * 0.06 * (1 - Math.abs(y) / (blanketHeight / 2));
//         pos.setZ(i, wave);
//     }
//     pos.needsUpdate = true;

//     // Update controls
//     controls.update();

//     // Render
//     renderer.render(scene, camera);

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick);
// };

// tick();


