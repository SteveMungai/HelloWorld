# Hello World

A minimal React Native app that renders a logo and a styled button on a colored background. Built as a class exercise to learn the basics of React Native layout, styling, and core components.

## Features

- Full-screen plum background with padding, using a `View` with flexbox
- Logo image loaded from local assets
- A `Button` with a custom color (`midnightblue`)
- `onPress` handler that logs to the console (the button is currently set to `disabled`, so it won't fire)

## Tech Stack

- React Native
- Expo 
- JavaScript

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn
- Expo Go app on your phone, or an Android/iOS emulator

### Installation

```bash
git clone https://github.com/[your-username]/[repo-name].git
cd [repo-name]
npm install
```

### Running the app

```bash
npx expo start
```

Then scan the QR code with Expo Go, or press `a` (Android emulator) or `i` (iOS simulator).

## Project Structure

```
├── App.js            # Main component
├── assets/
│   └── favicon.png   # Logo image
└── package.json
```
