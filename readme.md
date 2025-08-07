
# 🛏️ **Interactive Isometric Bedroom**

**A modern, interactive 3D bedroom experience built with Three.js and Vite.**

---

## 🚀 **Getting Started**

**1. Install dependencies:**

```bash
npm install
```

**2. Start the development server:**

```bash
npm run dev
```

**3. Open in your browser:**

Visit:- https://3-d-room-experience.vercel.app 

---


## ✨ **Features**

- **Drag & Drop:** Move the bed, chair, desk, wardrobe, lamps, and more.
- **Orbit Controls:** Look around the room with smooth camera controls (no visible GUI).
- **Animated Blanket:** The bed blanket gently ripples for a cozy effect.
- **Interactive Lamps:** Click the lamp shades to toggle their light and change the room's mood.
- **Modern UI:**
	- "Move Objects" button at the bottom right to toggle edit mode.
	- Info button for instructions.
	- Stylish close button for overlays.
- **Reset Objects:** Instantly reset all furniture to their original positions with the "Reset Objects" button next to "Move Objects".
- **Realistic Furniture:**
	- Gaming chair with grouped parts (arms, legs, seat, etc. move together)
	- Desk with laptop
	- Bed with pillows and animated blanket
	- Wardrobe with brown wood color and door details
	- Casement window, rug, nightstands, and more
- **Responsive Design:** Works on any screen size.

---


## 📝 **Usage**

- **Move Objects:** Click the "Move Objects" button, then drag furniture to rearrange. Click again to lock.
- **Reset Objects:** Click the "Reset Objects" button (bottom right) to refresh the page and restore all objects to their starting positions.
- **Look Around:** Left-click and drag to orbit, right-click to pan, scroll to zoom.
- **Toggle Lamps:** Click lamp shades to turn bedside lamps on/off.
- **Show Instructions:** Click the "?" info button (top left).

---

## 🛠️ **Tech Stack**

- [Three.js](https://threejs.org/) (via CDN importmap)
- [Vite](https://vitejs.dev/) for fast development
- Modern HTML/CSS for UI

---

## 📁 **Project Structure**

```
src/
	index.html   # Main 3D scene and UI
	script.js    # (Unused, all logic in index.html)
	style.css    # (Unused, all styles in index.html)
static/
models/
```

---

## 💡 **Tips**

- All 3D logic and UI are in `src/index.html` for easy editing.
- No build step needed for Three.js modules—importmap handles it!

---

## 📣 **Credits**

- Built by Chirag Nagpal using Three.js, Vite, and a <3 for interactive 3D design!

---

**Enjoy your virtual bedroom! 🛋️✨**
