---
description: Add a premium Sale Banner with a 4-hour countdown and dynamic discount reduction (Starting at 80%).
---

# Sale Banner Workflow

This workflow implements a "Fear Of Missing Out" (FOMO) header/footer banner designed for high conversion.

## Features
- **4-Hour Countdown**: Automatically resets and reduces discount when reaching zero.
- **Dynamic Discount**: Starts at **80%** and reduces by **3%** every cycle.
- **Persistence**: Remembers progress using `localStorage`.
- **Premium Design**: Sticky footer, double-height, with Backdrop Blur and Shadows.
- **Contact Info**: Includes links to Email (`buildwithwackky@gmail.com`) and IG.

## Implementation Steps

### 1. Create the SaleBanner Component
Create `src/components/SaleBanner.tsx` with its own logic and premium styling.

### 2. Add to App Layout
Import and place the `<SaleBanner />` at the top of the provider tree in `src/App.tsx`.

### 3. Styling Rules
- Use a semi-transparent glass background with `backdrop-blur-2xl`.
- Position it as a fixed **footer** (`bottom-0`) with a smooth slide-in animation.
- Increase vertical padding to `py-8` for a substantial presence.

// turbo
### 4. Execute Implementation
Run the following tasks:
1. Create `src/components/SaleBanner.tsx`.
2. Update `src/App.tsx` to include the banner.
