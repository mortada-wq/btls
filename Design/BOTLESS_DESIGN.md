# BOTLESS_DESIGN.md
> Single source of truth for Botless.Chat visual and verbal identity.
> Hand this file to any AI or developer — they should need nothing else.

---

## 01 — Philosophy

**The stage is dark. The product is the light.**

Products are not objects to sell — they are characters waiting to speak.
Every design decision serves one goal: make the character feel alive.

---

## 02 — Color System

### Core Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-stage` | `#0D1B2A` | Page background. The stage. |
| `--color-surface` | `#1C2B36` | Cards, panels, nav |
| `--color-raised` | `#253545` | Inputs, elevated cards, modals |
| `--color-slate` | `#4A6B8A` | Primary accent, buttons, labels |
| `--color-glow` | `#7BAFD4` | Highlights, links, grid lines on dark |
| `--color-warm-white` | `#F0EBE3` | Primary text on dark |

### Semantic Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-cta` | `#E8724A` | Call to action, alerts |
| `--color-success` | `#3DAA7A` | Success states, live indicators |
| `--color-muted` | `rgba(240,235,227,0.45)` | Secondary text |
| `--color-ghost-border` | `rgba(123,175,212,0.3)` | Ghost inputs, translucent borders |

### Light Theme (Merchant Dashboard only)

| Token | Hex | Usage |
|---|---|---|
| `--color-stage-light` | `#F9FAFB` | Page background |
| `--color-surface-light` | `#FFFFFF` | Cards |
| `--color-text-light` | `#1C2B36` | Primary text |

---

## 03 — Typography

### Font Stack

```css
--font-primary: 'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
--font-mono: 'DM Mono', 'Courier New', monospace;
```

### Type Scale

| Role | Size | Weight | Color | Notes |
|---|---|---|---|---|
| Display | 36px | 800 | `#F0EBE3` | letter-spacing: -1.5px |
| Heading | 22px | 700 | `#F0EBE3` | letter-spacing: -0.5px |
| Body | 15px | 400 | `rgba(240,235,227,0.7)` | line-height: 1.7 |
| Caption | 12px | 400 | `rgba(240,235,227,0.4)` | letter-spacing: 0.2px |
| Label | 10px | 600 | `#4A6B8A` | letter-spacing: 3px, UPPERCASE |
| Mono | 12px | 400 | `#7BAFD4` | for code, IDs, metadata |

### Rules

- Sentence case always. Never title case. Never ALL CAPS except labels.
- Two weights only in UI: 400 (regular) and 700–800 (display/heading).
- Never Inter, Roboto, or system fonts.

---

## 04 — Background System

### Dark Stage (default — storefront, app, landing)

```css
body {
  background-color: #0D1B2A;
  background-image:
    linear-gradient(to right, rgba(123,175,212,0.07) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(123,175,212,0.07) 1px, transparent 1px);
  background-size: 40px 40px;
  position: relative;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(123,175,212,0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(123,175,212,0.04) 1px, transparent 1px);
  background-size: 10px 10px;
  pointer-events: none;
  z-index: 0;
}

/* Vignette — pulls focus to center, makes character feel lit */
body::after {
  content: "";
  position: fixed;
  inset: 0;
  background: radial-gradient(
    ellipse at 50% 40%,
    transparent 40%,
    rgba(13,27,42,0.85) 100%
  );
  pointer-events: none;
  z-index: 0;
}
```

### Light Theme (merchant dashboard / settings)

```css
body.theme-light {
  background-color: #F9FAFB;
  background-image:
    linear-gradient(to right, rgba(74,107,138,0.10) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(74,107,138,0.10) 1px, transparent 1px);
  background-size: 40px 40px;
}

body.theme-light::before {
  background-image:
    linear-gradient(to right, rgba(74,107,138,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(74,107,138,0.05) 1px, transparent 1px);
  background-size: 10px 10px;
}

body.theme-light::after {
  background: radial-gradient(
    ellipse at 50% 0%,
    transparent 50%,
    rgba(249,250,251,0.7) 100%
  );
}
```

### Surface Rules

```css
/* Cards — always above the grid */
.card {
  background: #1C2B36;
  position: relative;
  z-index: 1;
}
.theme-light .card {
  background: #FFFFFF;
}

/* Modals / elevated */
.elevated {
  background: #253545;
  z-index: 2;
}
.theme-light .elevated {
  background: #FFFFFF;
  box-shadow: 0 2px 24px rgba(13,27,42,0.08);
}

/* Dark panels inside light pages — grid OFF */
.panel-dark {
  background: #1C2B36;
}
```

> **Rule:** Grid lives on the page only — never bleeds onto cards, modals, or elevated surfaces.
> **Rule:** Dark panels inside light pages always use `#1C2B36` flat — no grid.

---

## 05 — Spacing & Radius Tokens

### Spacing Scale

| Token | Value | Usage |
|---|---|---|
| `--space-xs` | 4px | Tight gaps, icon spacing |
| `--space-sm` | 8px | Component internal gaps |
| `--space-md` | 16px | Between elements |
| `--space-lg` | 24px | Section breathing room |
| `--space-xl` | 40px | Major section separation |
| `--space-2xl` | 64px | Page-level sections |

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sharp` | 4px | Tags, badges, small chips |
| `--radius-base` | 8px | Buttons, inputs |
| `--radius-card` | 12px | Cards, panels |
| `--radius-pill` | 9999px | Suggestion chips, toggles |

---

## 06 — Components

### Buttons

```css
/* Primary */
background: #4A6B8A;
color: #F0EBE3;
border: none;
border-radius: 8px;
padding: 10px 20px;
font-size: 13px;
font-weight: 600;

/* Ghost */
background: transparent;
color: #F0EBE3;
border: 0.5px solid rgba(240,235,227,0.25);

/* CTA */
background: #E8724A;
color: #F0EBE3;
font-weight: 700;
```

### Input

```css
background: #253545;
border: 0.5px solid rgba(123,175,212,0.3);
border-radius: 8px;
padding: 12px 16px;
color: #F0EBE3;
font-size: 14px;

/* Placeholder */
color: rgba(240,235,227,0.3);

/* Send button inside */
width: 28px; height: 28px;
background: #4A6B8A;
border-radius: 6px;
```

### Cards

```css
background: #1C2B36;
border-radius: 12px;
border: 0.5px solid rgba(240,235,227,0.08);
padding: 20px;
position: relative;
z-index: 1;
```

### Character Card

```css
/* Avatar area */
width: 52px; height: 52px;
border-radius: 10px;
background: #0D1B2A;
border: 0.5px solid rgba(123,175,212,0.3);

/* Name */
font-size: 14px; font-weight: 700; color: #F0EBE3;

/* Trait line */
font-size: 11px; color: rgba(240,235,227,0.4);
```

### Emotion Tags

```css
/* Default */
background: #253545;
color: #F0EBE3;
border: 0.5px solid rgba(240,235,227,0.15);
border-radius: 20px;
padding: 5px 12px;
font-size: 11px;

/* Active */
background: #4A6B8A;
border: none;
```

### Status Badges

```css
/* Ready */
background: rgba(74,107,138,0.2);
color: #7BAFD4;

/* Live */
background: rgba(61,170,122,0.15);
color: #3DAA7A;

/* Error */
background: rgba(232,114,74,0.15);
color: #E8724A;
```

---

## 07 — Motion Principles

| Type | Animation | Duration | Easing |
|---|---|---|---|
| Entrance | `opacity: 0 + translateY(20px) → 1 + 0` | 300ms | ease-out |
| Idle loop | `translateY(0) ↔ -6px` | 3s | ease-in-out, infinite |
| Reaction (emotion trigger) | Snap to new frame, hold 1.5s, release | 150ms snap | ease-in |
| Page transition | Fade cross-dissolve | 200ms | ease |
| Hover | `scale(1.02)` | 120ms | ease |

### Rules

- Characters always float when idle — never completely static.
- Emotion animations trigger from the conversation layer — AI picks the state.
- Never use bounce or elastic easing — they feel cheap against a dark stage.
- Prefer CSS animations for idle; JS-driven for reaction triggers.

---

## 08 — Voice & Tone

### We are

- Confident without arrogance
- Warm but not sentimental
- Witty but never tries too hard
- Direct. No fluff.

### We are not

- Corporate and stiff
- Overly excited chatbot energy
- Generic AI assistant vibes
- Talking "on behalf of" — ever

### The one rule

> The product speaks in first person. Always. It is not a spokesperson for the brand — it IS the brand.

### Example lines

- *"I'm not just stainless steel. I'm the reason your mornings don't suck."*
- *"Yes, I'm dishwasher safe. But I prefer hand-washing — I'm particular like that."*
- *"Ask me anything. I know exactly what I'm made of."*

---

## 09 — Phase Labels (UI copy)

| Phase | Label | One-liner |
|---|---|---|
| 01 | Vision Read | Your product looks at itself |
| 02 | Character Build | It gets a face, a voice, a personality |
| 03 | Knowledge Load | It learns what it knows |
| 04 | Deploy | It goes live. Customers talk to it. |

---

## 10 — Do / Don't

| Do | Don't |
|---|---|
| Dark stage as default | Beige / taupe / light grey backgrounds on storefront |
| Characters float in space | Characters on white product-card backgrounds |
| First-person product voice | "This product features..." |
| Flat buttons, no gradients | Rounded gradient CTA blobs |
| Grid on page body only | Grid inside cards or modals |
| Slate Blue `#4A6B8A` as accent | Purple gradients, neon, generic SaaS blue |
| DM Sans / DM Mono | Inter, Roboto, system-ui |
| Sentence case everywhere | Title Case In Buttons |

---

*Last updated: 2026 — maintained alongside `BOTLESS_KNOWLEDGE.md`*
