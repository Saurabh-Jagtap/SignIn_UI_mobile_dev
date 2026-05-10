# 📱 Telecare AI - Login Interface  
A beautiful, modern, and responsive Sign-In screen built with React Native and Expo. This project focuses on high-fidelity UI reproduction, smooth focus states, and cross-platform compatibility.

<img width="300" alt="signinUI_assign" src="https://github.com/user-attachments/assets/f808a807-7c77-4766-82cd-6b2dbc0a1652" />

# ✨ Features
**Modern UI/UX:** Clean aesthetic inspired by modern healthcare AI applications.

**Dynamic Focus States:** Custom input "glow" effects and border transitions using React state.

**Responsive Layout:** Built with Flexbox to ensure it looks great on both iOS and Android.

**Safe Area Integration:** Handles notches and system bars gracefully using react-native-safe-area-context.

**Social Auth Ready:** Styled components for Google, Facebook, and Instagram integration.

**Keyboard Handling:** Uses Keyboard.dismiss logic for a seamless mobile experience.

# 🛠️ Tech Stack
**Framework:** Expo (React Native)

**Icons:** Expo Vector Icons (Ionicons)

**Language:** TypeScript

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## 📂 Project Structure
```bash
├── app/
│   ├── _layout.tsx      # Main layout wrapper
│   └── index.tsx        # Login screen component
├── assets/
│   └── images/          # Local logo and social icon assets
└── package.json
```

## 🧠 What I Learned
**Asset Management:** How to handle local images using the require() syntax in React Native.

**Stateful Styling:** Using onFocus and onBlur to trigger "glow" effects on inputs.

**Flexbox Mastery:** Deep dive into flexDirection, justifyContent, and alignItems for complex layouts.


## 📬 Contact
Saurabh Jagtap - https://x.com/SaurabhJag004 - saurabhjagtap773@gmail.com


## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
