# Keeway Website Design System

This document outlines the core design language, typography, and color palette established for the Keeway Serbia website redesign. 

## 1. Core Principles
- **Aesthetic**: Premium, sleek, dynamic, and light-themed.
- **Vibe**: Performance-oriented, sporty yet refined ("Racing Heritage. Street Born").
- **Contrast**: High contrast using pure whites, deep blacks, and striking brand accent colors.

## 2. Brand Color Guidelines

### 1. Primarne Boje i Gradijent (Digitalni mediji)
Glavna prepoznatljiva boja brenda je narandžasta, koja se u digitalnom okruženju koristi samostalno ili u obliku službenog gradijenta.

* **Keeway Orange (Glavna primarna boja):**
    * HEX: `#F54308` (Pantone 1655C)
    * *Primena:* Glavni elementi brendiranja, primarni dugmići, ključni naglasci.
* **Keeway Orange II (Nova nijansa):**
    * HEX: `#FF7A00`
    * *Primena:* Koristi se u kombinaciji sa prvom nijansom za kreiranje gradijenta.
* **Keeway Gradient (Službeni digitalni gradijent):**
    * Prijelaz iz `#F54308` u `#FF7A00` (sleva nadesno).
    * *Primena:* Pozadine sekcija, herosekcije, ili upečatljivi UI elementi koji zahtevaju moderan i dinamičan izgled.

### 2. Sekundarne i Neutralne Boje
Za postizanje čiste, monohromatske estetike i osiguravanje visokog kontrasta koriste se sledeće boje:

* **Blue:** HEX: `#003A73`
* **Black:** HEX: `#000000`
* **Dark Gray:** HEX: `#393939`

## 3. Brand Typography Guidelines

### 1. Typography System

**Title and Subtitle Fonts**
* **Zuume Regular Italic (400)**: Used for all headings and titles (H1, H2, H3, H4).
These fonts provide a dynamic and modern look, enhancing the visual impact of our titles and subtitles.

* **Glavni Naslovi (H1, H2):**
    * Imaju dodatni "Neon Glow" efekat (narandžasta senka: `text-shadow: 0 0 20px rgba(245, 67, 8, 0.7), 0 4px 4px rgba(0,0,0,0.5)`)
    * Imaju konturu slova (Stroke): `-webkit-text-stroke: 0.42px currentColor`
    * Transformacija: `Uppercase`

**Body Text Fonts**
* **Saira Light (300)**
* **Saira Regular (400)**
* **Saira Bold (700)**

Additionally, their italic versions (Saira Light Italic, Saira Italic, Saira Bold Italic) are used to add emphasis within the body text. These fonts ensure readability and a clean aesthetic for longer texts, documents, and extensive literature.
By following these typography guidelines, we ensure a cohesive and professional appearance in all our presentations, advertisements, social media posts, and more.

* **Dugmići ("View More"):**
    * Koriste osnovni naslovni stil (Zuume, Italic, Uppercase). Namerno nemaju glow efekat kako bi ostali jasni i čitljivi. Na prelazak mišem (hover), tekst glatko prelazi u primarnu Keeway Orange boju.

## 4. Tehnička implementacija

### Typography System

#### Global (Body & All Text)
Svi tekstovni elementi sada nasleđuju čitljivi Saira font, dok su naslovi zadržali agresivniji Zuume:
- **Body & Text:** `font-family: var(--font-saira); font-weight: 400; font-style: normal;`
- **H1, H2, H3, H4:** `font-family: var(--font-zuume); font-weight: 400; font-style: italic; text-transform: uppercase;` uz `-webkit-text-stroke` i `text-shadow` samo za glavne hero naslove.
- **.btn-view-more:** Primenjuje naslovni stil bez senki, sa tranzicijom na narandžastu boju.

### Color Palette

#### Color Variables
- **Keeway Orange (Primary):** `#F54308`
- **Keeway Orange II:** `#FF7A00`
- **Blue:** `#003A73`
- **Black:** `#000000`
- **Dark Gray:** `#393939`

#### Gradients
- **Keeway Gradient:** `linear-gradient(to right, #F54308, #FF7A00)`

#### Tailwind Custom Config Reference
```json
{
  "theme": {
    "extend": {
      "colors": {
        "keeway": {
          "orange": "#F54308",
          "orange-light": "#FF7A00",
          "blue": "#003A73",
          "dark-gray": "#393939"
        }
      },
      "backgroundImage": {
        "keeway-gradient": "linear-gradient(to right, #F54308, #FF7A00)"
      }
    }
  }
}
```

## 4. Key Layout Components

### Header
- Fixed at the top (`fixed z-50`).
- Transparent when at the very top of the page (overlapping the video hero).
- Morphs into a solid white header with a subtle shadow (`bg-white shadow-md py-3`) when scrolled.

### Hero Section
- **Background**: Full viewport height (`h-screen`) video (`hero-teaser.mp4`).
- **Overlay**: Subtle dark overlay (`bg-black/30`) to ensure white text readability.
- **Action Buttons**: Floating Cyan and Red circular action buttons pinned vertically to the middle right edge of the screen.

### Featured Models
- **Split View**: 50/50 horizontal split (stacking vertically on mobile). Uses large immersive imagery with text anchored to the bottom.
- **Grid Layout**: A 2-column clean white block with striking black text and hover animations indicating interactivity (`View More >>`).

### Newsletter Module
- Minimalistic block featuring brand Cyan as the primary submit button and section heading text.

### Footer
- **Background**: White with a very faint, oversized watermark of the Keeway Heritage Icon.
- **Layout**: Four distinct columns separating corporate, customer service, and group company links.
- **Branding**: Contains the "Beyond the Ride" logo block and Keeway Group copyright details centered at the bottom.

## 5. Micro-Animations & Interactions
- **Hover Effects**: All standard links and "View More >>" texts transition to the Accent Cyan (`#5ACCF0`) on hover.
- **Buttons**: Play buttons and floating icons use a `scale-110` transform effect to feel dynamic.
- **Selection**: Text selection highlight is custom set to Cyan background with White text.
- **Scrollbar**: Customized sleek scrollbar mimicking the brand aesthetic.
