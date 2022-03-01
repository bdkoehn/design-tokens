export default
`:root {
  --sizes-32: 32.72px; /* 32.72px spacer component */
  --sizes-40: 40px;
  --sizes-60: 60px;
  --sizes-80: 80px;
  --sizes-plain-token: 200px;
  --sizes-token-in-frame: 200px;
  --sizes-token-in-group: 200px;
  --sizes-in-variant-60: 60px;
  --sizes-in-variant-90: 90px;
  --sizes-in-variant-120: 120px;
  --sizes-frame: 32px;
  --sizes-rect: 32px;
  --sizes-shape-in-component: 32px; /* Should use 32px not 20 from inside shape */
  --breakpoints-lg: 1280px;
  --breakpoints-sm: 768px;
  --breakpoints-md: 1024px;
  --spacing-10: 10px;
  --spacing-mixed: 10px 20px 30px 20px;
  --spacing-top: 10px 0px 0px 0px;
  --borders-single: [object Object];
  --borders-dashed-outside: [object Object];
  --borders-single-style: [object Object];
  --borders-unsupported-multiple-borders: [object Object];
  --radius-5: 5px;
  --radii-smoothing: 10px;
  --radii-mixed: 5.5px 10px 20px 15px;
  --motion-move-in: [object Object];
  --motion-dissolve: [object Object];
  --motion-smart: [object Object];
  --motion-push: [object Object];
  --gradient-gradient-single-with-multiple-color-stops: radial-gradient(rgb(255, 184, 0) 0%, rgb(255, 138, 0) 34%, rgb(255, 46, 0) 65%, rgb(255, 0, 0) 100%); /* Four color stops from yellow to red */
  --gradient-gradient-multiple-0: linear-gradient(180deg, rgb(255, 184, 0) 0%, rgba(255, 184, 0, 0) 100%);
  --gradient-gradient-multiple-1: radial-gradient(rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
  --gradient-gradient-multiple-2: undefined;
  --gradient-gradient-multiple-3: undefined;
  --color-colors-multiple-fills-0: rgb(64, 255, 186);
  --color-colors-multiple-fills-1: rgba(0, 0, 0, 0.1);
  --color-colors-single-blue: rgb(4, 74, 255);
  --color-colors-ref-blue: rgb(4, 74, 255); /* Some other description */
  --color-colors-special-characters: rgb(64, 223, 80); /* Emoji */
  --color-colors-special-characters-nderung: rgb(52, 86, 175);
  --color-invalid-empty: rgba(0, 0, 0, 0);
  --color-light-background: rgb(255, 255, 255);
  --color-dark-background: rgb(0, 0, 0);
  --grid-multiple-0: [object Object];
  --grid-multiple-1: [object Object];
  --grid-multiple-2: [object Object];
  --grid-multiple-3: [object Object];
  --grid-multiple-4: [object Object];
  --grid-multiple-5: [object Object];
  --grid-multiple-6: [object Object];
  --grid-multiple-7: [object Object];
  --grid-single: [object Object];
  --font-body-h3: condensed  700 20/32 Akzidenz-Grotesk Pro; /* Comment for text style */
  --font-body-h4-strike-through: italic 500 16/19.2 Roboto; /* With stylisitc options */
  --font-body-italic: italic 400 12/14 Roboto;
  --font-body-extra-bold-condensed-italic: condensed italic 800 12/14.4 Akzidenz-Grotesk Pro;
  --font-body-medium-extended-italic: expanded italic 500 20/24 Akzidenz-Grotesk Pro;
  --font-body-super: 900 22/26.4 Akzidenz-Grotesk Pro;
  --effect-drop-shadow-single: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); /* Drop shadow single description */
  --effect-inner-shadow-multiple-0: inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  --effect-inner-shadow-multiple-1: inset 10px 100px 1px 0.5px rgb(0, 0, 0);
  --effect-inner-shadow-multiple-2: inset -4px 2px 3px 11px rgba(0, 0, 0, 0.25);
  --typography-body-h3-font-size: 20px;
  --typography-body-h3-text-decoration: none;
  --typography-body-h3-font-family: Akzidenz-Grotesk Pro;
  --typography-body-h3-font-weight: 700;
  --typography-body-h3-font-style: normal;
  --typography-body-h3-font-stretch: condensed;
  --typography-body-h3-letter-spacing: 0.4px;
  --typography-body-h3-line-height: 32px;
  --typography-body-h3-paragraph-indent: 5px;
  --typography-body-h3-paragraph-spacing: 8px;
  --typography-body-h3-text-case: uppercase;
  --typography-body-h4-strike-through-font-size: 16px;
  --typography-body-h4-strike-through-text-decoration: line-through;
  --typography-body-h4-strike-through-font-family: Roboto;
  --typography-body-h4-strike-through-font-weight: 500;
  --typography-body-h4-strike-through-font-style: italic;
  --typography-body-h4-strike-through-font-stretch: normal;
  --typography-body-h4-strike-through-letter-spacing: 0;
  --typography-body-h4-strike-through-line-height: 19.2px;
  --typography-body-h4-strike-through-paragraph-indent: 0;
  --typography-body-h4-strike-through-paragraph-spacing: 0;
  --typography-body-h4-strike-through-text-case: none;
  --typography-body-italic-font-size: 12px;
  --typography-body-italic-text-decoration: none;
  --typography-body-italic-font-family: Roboto;
  --typography-body-italic-font-weight: 400;
  --typography-body-italic-font-style: italic;
  --typography-body-italic-font-stretch: normal;
  --typography-body-italic-letter-spacing: 0;
  --typography-body-italic-line-height: 14px;
  --typography-body-italic-paragraph-indent: 0;
  --typography-body-italic-paragraph-spacing: 0;
  --typography-body-italic-text-case: none;
  --typography-body-extra-bold-condensed-italic-font-size: 12px;
  --typography-body-extra-bold-condensed-italic-text-decoration: none;
  --typography-body-extra-bold-condensed-italic-font-family: Akzidenz-Grotesk Pro;
  --typography-body-extra-bold-condensed-italic-font-weight: 800;
  --typography-body-extra-bold-condensed-italic-font-style: italic;
  --typography-body-extra-bold-condensed-italic-font-stretch: condensed;
  --typography-body-extra-bold-condensed-italic-letter-spacing: 0;
  --typography-body-extra-bold-condensed-italic-line-height: 14.4px;
  --typography-body-extra-bold-condensed-italic-paragraph-indent: 0;
  --typography-body-extra-bold-condensed-italic-paragraph-spacing: 0;
  --typography-body-extra-bold-condensed-italic-text-case: none;
  --typography-body-medium-extended-italic-font-size: 20px;
  --typography-body-medium-extended-italic-text-decoration: none;
  --typography-body-medium-extended-italic-font-family: Akzidenz-Grotesk Pro;
  --typography-body-medium-extended-italic-font-weight: 500;
  --typography-body-medium-extended-italic-font-style: italic;
  --typography-body-medium-extended-italic-font-stretch: expanded;
  --typography-body-medium-extended-italic-letter-spacing: 0;
  --typography-body-medium-extended-italic-line-height: 24px;
  --typography-body-medium-extended-italic-paragraph-indent: 0;
  --typography-body-medium-extended-italic-paragraph-spacing: 0;
  --typography-body-medium-extended-italic-text-case: none;
  --typography-body-super-font-size: 22px;
  --typography-body-super-text-decoration: none;
  --typography-body-super-font-family: Akzidenz-Grotesk Pro;
  --typography-body-super-font-weight: 900;
  --typography-body-super-font-style: normal;
  --typography-body-super-font-stretch: normal;
  --typography-body-super-letter-spacing: 0;
  --typography-body-super-line-height: 26.4px;
  --typography-body-super-paragraph-indent: 0;
  --typography-body-super-paragraph-spacing: 0;
  --typography-body-super-text-case: none;
}`
