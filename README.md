# 🧮 React Native Calculator App

A modern, fully-featured calculator application built with **React Native** and **Expo**. This cross-platform app runs seamlessly on **Android**, **iOS**, and **Web** with a beautiful dark theme interface and intuitive number pad layout.

![Calculator App](https://img.shields.io/badge/React%20Native-0.81.5-blue) ![Expo](https://img.shields.io/badge/Expo-54.0.33-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue) ![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- ✅ **Basic Operations**: Addition (+), Subtraction (-), Multiplication (×), Division (÷), Modulo (%)
- ✅ **Advanced Functions**: Percentage calculations, sign toggle (+/-)
- ✅ **Decimal Support**: Full support for floating-point calculations
- ✅ **Operation Chaining**: Chain multiple operations (e.g., 2 + 3 + 5 = 10)
- ✅ **Dark Theme**: Modern dark interface with carefully chosen colors
- ✅ **Responsive Design**: Optimized for all screen sizes
- ✅ **Cross-Platform**: Works on Android, iOS, and Web with identical code
- ✅ **Clean History**: Clear button (C) to reset and start fresh
- ✅ **Real-time Display**: Instant feedback as you type

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18+) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Expo Go app** (optional, for mobile testing) - [Download](https://expo.dev/go)

### Installation

1. **Clone or navigate to the project**

   ```bash
   cd test_react_native_app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   This installs all required packages (943 total dependencies)

3. **Start the development server**
   ```bash
   npm start
   ```

### Running on Different Platforms

**On Web Browser** (Recommended for quick testing)

```bash
npm run web
```

Opens the calculator at `http://localhost:8081`

**On Android Simulator**

```bash
npm run android
```

Requires Android SDK and emulator installed

**On iOS Simulator** (macOS only)

```bash
npm run ios
```

Requires Xcode installed

**On Mobile Device**

```bash
npm start
```

Then scan the QR code with **Expo Go** app (available on App Store & Google Play)

---

## 📖 How to Use the Calculator

### Basic Operations

#### 1. **Simple Addition**

```
Press: 5 → + → 3 → =
Result: 8
```

#### 2. **Simple Subtraction**

```
Press: 10 → - → 4 → =
Result: 6
```

#### 3. **Multiplication**

```
Press: 7 → × → 6 → =
Result: 42
```

#### 4. **Division**

```
Press: 20 → ÷ → 4 → =
Result: 5
```

### Advanced Features

#### Decimal Numbers

```
Press: 3.14 → × → 2 → =
Result: 6.28
```

- Use the **"."** button for decimal point
- You can only add one decimal point per number

#### Chaining Operations

```
Press: 2 → + → 3 → + → 5 → =
Result: 10
```

Each operation is evaluated as you go, allowing for continuous calculations.

#### Percentage Calculations

```
Press: 100 → % → =
Result: 1 (100 divided by 100)

Or: 50 → % → =
Result: 0.5
```

#### Toggle Sign (+/-)

```
Press: 5 → +/- → =
Result: -5

Press: -5 → +/- → =
Result: 5
```

#### Clear Function

```
Press: C
Result: Display resets to 0
All previous values and operations are cleared
```

### Complete Example: Compound Calculation

Let's calculate: (15 + 25) × 2 - 10 = 70

```
Step 1: Press 15
        Display: 15

Step 2: Press +
        Display: 15 (waiting for next number)

Step 3: Press 25
        Display: 25

Step 4: Press × (this calculates 15 + 25 = 40)
        Display: 40

Step 5: Press 2
        Display: 2

Step 6: Press - (this calculates 40 × 2 = 80)
        Display: 80

Step 7: Press 10
        Display: 10

Step 8: Press = (this calculates 80 - 10 = 70)
        Display: 70 ✓ Final Result
```

---

## 🛠️ Tech Stack

| Technology                  | Version | Purpose                             |
| --------------------------- | ------- | ----------------------------------- |
| **React Native**            | 0.81.5  | Cross-platform mobile framework     |
| **Expo**                    | 54.0.33 | Development platform & build system |
| **React**                   | 19.1.0  | UI library                          |
| **TypeScript**              | 5.9.2   | Type-safe JavaScript                |
| **Expo Router**             | 6.0.23  | File-based routing                  |
| **React Navigation**        | 7.1.8   | Navigation & routing                |
| **React Native Web**        | 0.21.0  | Web support                         |
| **React Native Reanimated** | 4.1.1   | Performance optimized animations    |
| **ESLint**                  | 9.25.0  | Code quality & linting              |

For detailed technology breakdown and architecture, see [TECHNOLOGIES_AND_METHODOLOGY.md](./TECHNOLOGIES_AND_METHODOLOGY.md)

---

## 📁 Project Structure

```
test_react_native_app/
├── app/                              # Application folder (file-based routing)
│   ├── (tabs)/
│   │   ├── index.tsx                 # 🧮 Home screen with Calculator
│   │   ├── explore.tsx               # Example tab
│   │   └── _layout.tsx               # Tab navigation layout
│   ├── _layout.tsx                   # Root layout with theming
│   └── modal.tsx                     # Modal example
│
├── components/
│   ├── Calculator.tsx                # ⭐ Main calculator component
│   ├── themed-text.tsx               # UI components
│   ├── themed-view.tsx
│   ├── parallax-scroll-view.tsx
│   └── hello-wave.tsx
│
├── hooks/
│   └── useColorScheme.ts             # Dark/light mode hook
│
├── constants/
│   └── Colors.ts                     # Theme colors
│
├── assets/
│   ├── images/                       # Icons and images
│   └── fonts/                        # Custom fonts
│
├── package.json                      # Dependencies & scripts
├── app.json                          # Expo configuration
├── tsconfig.json                     # TypeScript config
├── README.md                         # This file
└── TECHNOLOGIES_AND_METHODOLOGY.md   # Detailed tech documentation
```

---

## 🧠 How It Works (Technical Overview)

### State Management

The calculator uses React hooks to manage state:

```typescript
const [display, setDisplay] = useState("0"); // Current display value
const [previousValue, setPreviousValue] = useState(null); // Previous number
const [operation, setOperation] = useState(null); // Selected operation
const [waitingForOperand, setWaitingForOperand] = useState(false); // Input flag
```

### Calculation Flow

1. **User presses number** → Updates display
2. **User presses operation** → Saves current value, waits for next number
3. **User presses equals** → Performs calculation and shows result
4. **Chain operations** → Each new operation auto-calculates the previous one

### UI Architecture

- **SafeAreaView** - Handles notches and safe zones on modern devices
- **TouchableOpacity** - Responsive button feedback
- **StyleSheet** - Optimized styles for React Native
- **Row Layout** - Flexbox grid for button arrangement

---

## 💻 Development

### Running in Development Mode

```bash
# Start development server (interactive)
npm start

# Specific platform commands
npm run web      # Web browser
npm run android  # Android emulator
npm run ios      # iOS simulator
```

### Hot Reload

The app automatically reloads when you save changes. Press `r` in the terminal to manually reload.

### Linting and Code Quality

```bash
npm run lint
```

Checks code for errors and style inconsistencies using ESLint.

### Debug Mode

Press `j` during dev server to open the debugger.

---

## 🎯 Features Breakdown

### 🎨 UI/UX

- **Dark Theme**: Easy on the eyes with high contrast
- **Color Coding**:
  - Gray buttons for numbers
  - Orange buttons for operations
  - Green button for equals
- **Clear Feedback**: Instant visual response to actions
- **Accessibility**: Large touch targets (70x70px)

### ⚙️ Functional Features

- Supports numbers up to JavaScript's max safe integer
- Decimal precision maintained
- Error handling for division by zero
- Modulo operator for remainder calculations
- Percentage calculations (divide by 100)

### 🔄 Operation Chaining Example

```
Calculator interprets: 2 + 3 + 5 =
As: (2 + 3) = 5, then (5 + 5) = 10
```

---

## 🚀 Extending the App

### Add History of Calculations

See [TECHNOLOGIES_AND_METHODOLOGY.md](./TECHNOLOGIES_AND_METHODOLOGY.md#2-adăugare-historicului-calculelor) for implementation guide.

### Add New Operations

1. Add handler function in Calculator.tsx
2. Add button in UI
3. Add case in `performCalculation()` switch statement

### Custom Themes

Modify `styles` in Calculator.tsx to change colors:

```typescript
const styles = StyleSheet.create({
  operationButton: {
    backgroundColor: "#FF9500", // Change this color
  },
});
```

For more extension ideas, see the [TECHNOLOGIES_AND_METHODOLOGY.md](./TECHNOLOGIES_AND_METHODOLOGY.md#-cum-să-extinzi-aplicația) file.

---

## 📚 Learning Resources

### Official Documentation

- [Expo Docs](https://docs.expo.dev/) - Official Expo documentation
- [React Native Docs](https://reactnative.dev/) - React Native guide
- [React Docs](https://react.dev/) - React fundamentals
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript reference

### Tutorials

- [Expo Tutorial](https://docs.expo.dev/tutorial/introduction/)
- [React Native Learn](https://reactnative.dev/docs/tutorial)

### Community

- [Expo Discord](https://chat.expo.dev) - Ask questions and get help
- [React Native GitHub](https://github.com/facebook/react-native)

---

## 🐛 Troubleshooting

### Issue: "Cannot find module"

**Solution**: Run `npm install` to ensure all dependencies are installed

### Issue: Port 8081 already in use

**Solution**:

```bash
# Kill process on port 8081
npx kill-port 8081
# Or use different port
expo start --web --clear
```

### Issue: Android emulator not starting

**Solution**:

```bash
# List available emulators
emulator -list-avds
# Start specific emulator
emulator -avd <emulator_name>
```

### Issue: iOS build failing on Mac

**Solution**:

```bash
# Clear Pods and rebuild
cd ios && rm -rf Pods && cd ..
npm run ios
```

---

## 📝 Scripts Reference

```bash
npm start              # Start dev server with QR code
npm run web            # Run on web browser
npm run android        # Run on Android simulator
npm run ios            # Run on iOS simulator
npm run lint           # Check code quality
npm run reset-project  # Reset app directory (caution!)
```

---

## 🤝 Contributing

This is a demonstration/learning project. To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

Built as a React Native & Expo learning project.

**Want to learn how this was built?** Check out [TECHNOLOGIES_AND_METHODOLOGY.md](./TECHNOLOGIES_AND_METHODOLOGY.md) for the complete breakdown of technologies, architecture, and development methodology.

---

## 🎓 Key Takeaways

- ✅ React Native enables code reuse across platforms
- ✅ Expo simplifies the development and build process
- ✅ TypeScript provides type safety and better developer experience
- ✅ File-based routing makes navigation declarative
- ✅ State management with hooks is simple yet powerful

---

**Happy calculating! 🧮✨**

For questions or feedback, feel free to open an issue or reach out through the official Expo/React Native communities.
