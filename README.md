# background-rainbow-lines

[![npm version](https://img.shields.io/npm/v/@camilledev/background-rainbow-lines.svg)](https://www.npmjs.com/package/@camilledev/background-rainbow-lines) [![npm downloads](https://img.shields.io/npm/dm/@camilledev/background-rainbow-lines.svg)](https://www.npmjs.com/package/@camilledev/background-rainbow-lines) [![GitHub stars](https://img.shields.io/github/stars/spiritracking-arch/background-rainbow-lines?style=social)](https://github.com/spiritracking-arch/background-rainbow-lines/stargazers) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Animated multi-color background lines, inspired by European flag colors. A drop-in hero background for React and Next.js, built with [motion](https://motion.dev).

> ⭐ **If this component saves you time, [star it on GitHub](https://github.com/spiritracking-arch/background-rainbow-lines).** It helps other developers find it.

## Install

```bash
npm install @camilledev/background-rainbow-lines motion
```

## Usage

```tsx
import { BackgroundRainbowLines } from "@camilledev/background-rainbow-lines";

export default function Hero() {
  return (
    <BackgroundRainbowLines className="flex min-h-screen items-center justify-center">
      <h1 className="text-white text-6xl font-bold">Your headline</h1>
    </BackgroundRainbowLines>
  );
}
```

- **Next.js App Router:** `"use client"` is already included in the component.
- **Tailwind is optional.** The layout the lines need is set inline, so the component works with plain CSS too. Your own `className` is applied to the container.
- **Accessible by default:** the lines are decorative (`aria-hidden`), and they stay still for visitors who enabled "reduce motion" in their system settings.
- **Several on one page:** each instance gets its own gradient ids, so they never clash.

## Props

| Prop              | Type        | Default                  | Description                            |
|-------------------|-------------|--------------------------|----------------------------------------|
| `children`        | `ReactNode` | -                        | Content rendered above the lines       |
| `className`       | `string`    | -                        | Classes applied to the outer container |
| `backgroundColor` | `string`    | `"#060608"`              | Background color behind the lines      |
| `colors`          | `string[]`  | EU-flag-inspired palette | Custom line color palette              |
| `lineCount`       | `number`    | `24`                     | Number of animated lines               |

## Custom palette

```tsx
<BackgroundRainbowLines
  colors={["#22d3ee", "#a78bfa", "#f472b6"]}
  lineCount={18}
  backgroundColor="#0b1020"
>
  {/* your content */}
</BackgroundRainbowLines>
```

## About the author

I'm **Camille Guerineau**. I spent ten years as a jewelry maker and founder of [Loch Ness Paris](https://lochness-paris.com/) before going back to full-stack development. I build e-commerce shops across Europe, and this background comes from them.

- 🧩 Also by me: [`payload-plugin-reviews`](https://github.com/spiritracking-arch/payload-plugin-reviews) and [`payload-plugin-seo-jsonld`](https://github.com/spiritracking-arch/payload-plugin-seo-jsonld) for Payload CMS v3
- ✅ [Verumano](https://lochness-paris.com/verumano/), a verifiable "human-made" label for creators ([`verumano`](https://www.npmjs.com/package/verumano) on npm)
- ✍️ Writing on [dev.to](https://dev.to/spiritrackingarch)
- 💬 Questions, bugs or ideas: [open an issue](https://github.com/spiritracking-arch/background-rainbow-lines/issues)

## License

MIT © [Camille Guerineau](https://github.com/spiritracking-arch)
