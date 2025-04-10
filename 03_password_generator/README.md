# 🔐 Random Password Generator — Project 03

A secure and sleek **React-based password generator** that creates strong random passwords based on user preferences.

This project helped me level up in:
- 🧠 Generating secure, random passwords
- 🎛️ Customizing output based on user input
- ⚛️ Using `useCallback` for optimization
- 📋 Using `useRef` & `navigator.clipboard` to copy password to clipboard

---

## 🚀 Features

- ✨ Generate strong passwords instantly
- 🔢 User can choose:
  - ✅ Include numbers
  - ✅ Include special characters
  - 🔧 Desired password length
- ⚡ Optimized password generation using `useCallback`
- 📋 "Copy to clipboard" functionality using `useRef` and `navigator.clipboard`
- 🖱️ Copy feedback (button text updates when copied)
- 💎 Simple and clean UI with React hooks

---

## 🧠 What I Learned

- ✅ How to generate random strings from custom character sets
- ✅ How to create **dynamic, conditional logic** for user options
- ✅ How to use `useCallback()` to **prevent unnecessary re-renders**
- ✅ How to use `useRef()` to **interact directly with DOM** (e.g., selecting input)
- ✅ How to use `window.navigator.clipboard.writeText()` for modern copy-to-clipboard functionality

---

## 🔧 How It Works

1. User selects:
   - Password length via range slider
   - Toggles for including **numbers** and **special characters**
2. App dynamically generates a random password based on those settings
3. User clicks “Copy” to instantly copy the password to clipboard
4. Button changes to “Copied” as feedback

---

## 🛠️ Getting Started

1. Clone the repo:

```bash
git clone https://github.com/yourusername/03-random-password-generator.git
cd 03-random-password-generator
npm i
npm run dev
```

