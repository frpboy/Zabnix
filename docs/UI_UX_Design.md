# UI/UX DESIGN DOCUMENT

## 1. Design Philosophy

The ZABNIX website employs a design system categorized as **Minimal Futuristic Enterprise**. It targets professional business leaders, startup founders, and high-caliber technical talent.

```
       [ Cyberpunk / Sci-Fi Gaming ]  <--- DO NOT DO (Noisy, chaotic)
                    |
                    v
    [ MINIMAL FUTURISTIC ENTERPRISE ] <--- DESIGN TARGET (Sleek, premium, corporate)
                    ^
                    |
       [ Legacy Corporate Brochure ]  <--- DO NOT DO (Dull, outdated, generic)
```

### 1.1 Core Tenets
- **Premium Elegance:** Clean space and geometry over decorative clutter.
- **Controlled Motion:** Animations must guide attention and reinforce content hierarchy, never distract.
- **Typographic Dominance:** Large sans-serif font weights form the structural backbone of layouts.
- **Layered Depth:** Glass surfaces, subtle grid borders, and electric blue glows define the modern digital environment.

---

## 2. Visual Identity & Brand System

### 2.1 Color Architecture

| System Role | Hex Code | Tailwind Equivalent | Sample Visual Application |
| :--- | :--- | :--- | :--- |
| **Primary Background**| `#0A0A0A` | `bg-neutral-950` | Body base background |
| **Surface Card** | `#111111` | `bg-neutral-900` | Reusable cards, content areas |
| **Elevated Surface** | `#171717` | `bg-neutral-900/80` | Modals, active states |
| **Border Line** | `rgba(255,255,255,0.08)`| `border-white/8` | Card borders, grid layouts |
| **Accent Glow** | `#00D2FF` | `text-cyan-400` | Primary Electric Blue accents |
| **Primary Text** | `#FFFFFF` | `text-white` | Header typography, bold statements |
| **Secondary Text** | `#A1A1AA` | `text-zinc-400` | Paragraph text, metadata |

---

### 2.2 Typography Scale

The layout pairs geometric modern typefaces (e.g., **Geist**, **Satoshi**, or **Inter**) with tight letter-spacing:

- **Hero Display:** `72px - 120px` (bold, leading-none, tracking-tighter)
- **Section Heading:** `40px - 64px` (semibold, tracking-tight)
- **Card Title:** `20px - 28px` (medium, tracking-wide)
- **Body Text:** `16px - 18px` (regular, leading-relaxed)
- **Label / Small Cap:** `12px - 14px` (uppercase, tracking-widest, semibold)

---

### 2.3 The Glow System (Controlled Elegance)
To prevent the website from resembling a gaming forum, glow elements must follow these boundary rules:
1. **Interactive Glows:** Buttons trigger a soft back-shadow hover glow:
   `box-shadow: 0 0 20px rgba(0, 210, 255, 0.3);`
2. **Atmospheric Glows:** Large, low-opacity background orbs reside under sections. Blurs must exceed `120px` with opacity set below `8%`.
3. **No Blinking:** Fast pulsing or rainbow gradients are prohibited. Transitions must use smooth, natural eases.

---

## 3. Interaction & Motion Blueprint

### 3.1 Timing & Easing Definitions
All transition curves use hardware-accelerated Bezier eases to ensure fluid rendering:

- **Micro Actions (Hovers, Button Clicks):** `200ms cubic-bezier(0.16, 1, 0.3, 1)`
- **Section Reveals (Scroll Entrances):** `600ms cubic-bezier(0.22, 1, 0.36, 1)`
- **Cinematic Transitions (Hero, Page Loader):** `1200ms cubic-bezier(0.76, 0, 0.24, 1)`

---

### 3.2 Key Section Layouts & Behaviors

#### A. The Cinematic Loader
1. On initial loading, a pitch-black screen (`#000000`) covers the viewport.
2. The ZABNIX typographic logo fades in at the center, glowing with a soft electric blue pulse.
3. Once assets load (maximum cap of 2.0s), the loader wipes vertically upward, revealing the Hero section with a coordinated slide-down effect.

#### B. Floating Navbar
- Transparent backdrop with structural blur: `backdrop-filter: blur(12px); bg-black/40`
- Scroll down behavior: Shrinks height, adds a subtle bottom border (`border-white/10`).
- Scroll up behavior: Slides back into view cleanly.

#### C. Horizontal Services Scroll
- The services section is formatted as a horizontal track.
- As the user scrolls vertically, the screen locks temporarily, and the cards slide horizontally from right to left using Framer Motion.
- Each service card features a hover elevation effect that reveals a tech stack chip list.

---

## 4. Mobile Adaptability Rules

```
+---------------------------+        +---------------------------+
|      Desktop Layout       |        |       Mobile Layout       |
|  +---------------------+  |        |  +---------------------+  |
|  | Multi-Layer GSAP    |  |        |  | Simple CSS Fade     |  |
|  | Canvas Grid Background|  | -----> |  | Static Grid Image   |  |
|  +---------------------+  |        |  +---------------------+  |
|  | Dynamic Scroll Locks|  |        |  | Natural Scroll Flow |  |
|  +---------------------+  |        |  +---------------------+  |
+---------------------------+        +---------------------------+
```

1. **Scroll Locking:** Disable horizontal track locking on mobile viewports (`< 768px`). Reformat cards into a clean vertical list or swipeable horizontal carousel.
2. **Animation Suppression:** Disable background canvas particle animations on mobile to conserve GPU/battery life.
3. **Typography Scaling:** Display headers scale down to `36px - 48px` on mobile to prevent clipping and layout breaks.
4. **Touch Interactions:** Expand hover zones into touch-safe bounds (minimum tap area of `44px x 44px`).
