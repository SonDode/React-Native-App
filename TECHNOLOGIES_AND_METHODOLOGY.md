# Tehnologii și Metodologia de Creare - React Native Calculator App

## 📋 Cuprins

1. [Tehnologii Principale](#tehnologii-principale)
2. [Dependințe și Pachete](#dependințe-și-pachete)
3. [Structura Proiectului](#structura-proiectului)
4. [Metodologia de Creare](#metodologia-de-creare)
5. [Arhitectura Componenților](#arhitectura-componenților)
6. [Procesul de Dezvoltare](#procesul-de-dezvoltare)
7. [Cum să Extinzi Aplicația](#cum-să-extinzi-aplicația)

---

## 🛠️ Tehnologii Principale

### Framework și Runtime

- **Expo** (v54.0.33) - Platform de dezvoltare pentru React Native care simplifică build-ul și deployment-ul
- **React Native** (v0.81.5) - Framework pentru construirea aplicațiilor mobile cross-platform
- **TypeScript** (v5.9.2) - Limbaj de programare care adaugă tipuri statice peste JavaScript

### UI și State Management

- **React** (v19.1.0) - Biblioteca JavaScript pentru construirea interfețelor
- **React DOM** (v19.1.0) - Rendering React pe web
- **React Navigation** (v7.1.8) - Navigare și rutare în aplicații mobile
  - Bottom tabs navigation
  - Stack-based navigation

### Web Support

- **React Native Web** (v0.21.0) - Permite rularea React Native pe web browser
- **Expo Router** (v6.0.23) - Sistem de file-based routing asemănător Next.js

### Componente și Utilități UI

- **@expo/vector-icons** - Icoane SVG și font-based
- **expo-constants** - Acces la constante ale aplicației
- **expo-font** - Încărcare de font-uri personalizate
- **expo-haptics** - Vibrații și feedback haptic
- **expo-image** - Componente optimizate pentru imagini
- **expo-splash-screen** - Ecran de splash configurabil
- **expo-status-bar** - Gestionarea status bar-ului
- **react-native-safe-area-context** - Înmânarea zonelor sigure pe dispozitive cu notch

### Layout și Animații

- **react-native-reanimated** (v4.1.1) - Bibliotecă pentru animații performante
- **react-native-gesture-handler** - Gestionarea gesturilor
- **react-native-screens** - Optimizări specifice pentru navigare

### Linting și Code Quality

- **ESLint** (v9.25.0) - Linter JavaScript
- **eslint-config-expo** - Configurație ESLint recomandată pentru Expo

---

## 📦 Dependințe și Pachete

### Dependințe Principale (Production)

```json
{
  "expo": "~54.0.33", // Expo CLI și runtime
  "react": "19.1.0", // UI library
  "react-native": "0.81.5", // Mobile framework
  "typescript": "~5.9.2", // Type safety
  "react-native-web": "~0.21.0", // Web support
  "expo-router": "~6.0.23", // File-based routing
  "@react-navigation/native": "~7.1.8" // Navigation
}
```

### Dependințe de Dezvoltare

```json
{
  "@types/react": "~19.1.0", // TypeScript types for React
  "typescript": "~5.9.2", // TypeScript compiler
  "eslint": "^9.25.0" // Code linting
}
```

---

## 📁 Structura Proiectului

```
test_react_native_app/
├── .github/
│   └── copilot-instructions.md     # Instrucțiuni pentru Copilot
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx             # Layout pentru tab navigation
│   │   ├── index.tsx               # Home screen cu Calculator
│   │   └── explore.tsx             # Tab explore (default)
│   ├── modal.tsx                   # Modal example
│   ├── _layout.tsx                 # Root layout cu theming
├── components/
│   ├── Calculator.tsx              # 🧮 Componenta main a calculatorului
│   ├── hello-wave.tsx              # Componente helper
│   ├── parallax-scroll-view.tsx
│   ├── themed-text.tsx
│   └── themed-view.tsx
├── constants/
│   └── Colors.ts                   # Constante de culori
├── hooks/
│   └── useColorScheme.ts            # Hook custom pentru dark/light mode
├── assets/
│   ├── images/                     # Imagini și icoane
│   └── fonts/                      # Font-uri personalizate
├── scripts/
│   └── reset-project.js            # Script pentru reset proiect
├── node_modules/                   # Dependințe instalate
├── package.json                    # Configurare dependințe și scripts
├── package-lock.json               # Lock file pentru versiuni exacte
├── app.json                        # Configurare Expo
├── tsconfig.json                   # Configurare TypeScript
├── eslint.config.js                # Configurare ESLint
├── .gitignore                      # Git ignore rules
├── README.md                       # Documentație inițială
└── TECHNOLOGIES_AND_METHODOLOGY.md # 📄 Questo file
```

---

## 🏗️ Metodologia de Creare

### 1. Inițializare Proiect (Scaffold)

**Pasul 1: Creare Directoar**

```bash
mkdir test_react_native_app
cd test_react_native_app
```

**Pasul 2: Creare Proiect Expo**

```bash
npx create-expo-app@latest .
```

- Aceasta creează structura completă a proiectului
- Instalează toate dependințele necesare (943 pachete)
- Generează configurare inițială (app.json, tsconfig.json)

**Pasul 3: Instalare Dependințe**

```
npm install
```

- Toate dependințele sunt deja specificate în package.json
- Generează node_modules/ și package-lock.json

### 2. Configurare TypeScript

**Fișier: tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2020", // Ținta JavaScript
    "useDefineForClassFields": true,
    "skipLibCheck": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "moduleResolution": "bundler",
    "strict": true,
    "allowSyntheticDefaultImports": true,
    "paths": {
      "@/*": ["./*"] // Path alias pentru @/ imports
    }
  }
}
```

### 3. Configurare Expo (app.json)

**Configurații Principale:**

- `name`: Nume aplicație
- `slug`: Identificator unic
- `version`: Versiunea aplicației
- `orientation`: Portrait (verticală)
- `plugins`:
  - `expo-router` - Pentru file-based routing
  - Alte plugin-uri pentru funcționalități native
- `android.edgeToEdgeEnabled`: True (full screen, inclusiv notch)
- `web.output`: Static (optimizat pentru deployment)

### 4. Creare Structură Rutare

**Fișier: app/\_layout.tsx (Root Layout)**

```typescript
- Configurează tema (dark/light)
- Defineștе Stack navigator
- Inițializează status bar
- Providează ThemeProvider pentru întreaga aplicație
```

**Fișier: app/(tabs)/\_layout.tsx (Tab Layout)**

```typescript
- Configurează bottom tab navigation
- Definește taburile disponibile
- Setează icoane și opțiuni per tab
```

### 5. Crearea Calculatorului

**Fișier: components/Calculator.tsx**

**Tehnologie și Design:**

- Componentă funcțională React cu hooks
- State management cu `useState`
- TypeScript cu type hints

**State Management:**

```typescript
- display: string           // Valoarea afișată pe ecran
- previousValue: number     // Valoarea anterioară pentru calcul
- operation: string         // Operație selectată
- waitingForOperand: boolean // Flag pentru intrare număr nou
```

**Funcții Principale:**

- `handleNumberPress()` - Procesează apăsarea numerelor
- `handleOperation()` - Procesează operații (+, -, \*, ÷, %)
- `performCalculation()` - Execută calculul matematic
- `handleEquals()` - Calculează rezultatul final
- `handleClear()` - Resetează calculatorul

**Styling:**

```typescript
- Dark theme: #1c1c1c (fundal)
- Display: #333 (gri închis)
- Butoane normale: #505050 (gri)
- Butoane operații: #FF9500 (portocaliu)
- Buton egal: #4CAF50 (verde)
- Text: #fff (alb)
```

### 6. Integrare în Interfață

**Fișier: app/(tabs)/index.tsx**

```typescript
- Componenta HomeScreen (renamed din index)
- Importă Calculator component
- Render-ează Calculator în SafeAreaView
- SafeAreaView - gestionează notch și safe zones
```

---

## 🎯 Arhitectura Componenților

### Ierarhia Componenților

```
App (_layout.tsx)
├── ThemeProvider
└── Stack Navigator
    ├── (tabs)
    │   ├── TabsLayout
    │   └── index.tsx
    │       └── HomeScreen
    │           └── SafeAreaView
    │               └── Calculator ⭐
    ├── modal.tsx
    └── explore.tsx
```

### Fluxul de Date din Calculator

```
User Input (apasă buton)
    ↓
handleClick(...) function
    ↓
Actualizează State (display, previousValue, operation)
    ↓
Re-render Component
    ↓
Noua interfață se afișează
```

### Logica Calculatorului

```
1. Introducere Număr
   - display = numărul introdus

2. Selectare Operație
   - previousValue = display
   - operation = operația selectată
   - waitingForOperand = true

3. Introducere Al Doilea Număr
   - display = noul număr

4. Apasare Egal
   - result = performCalculation(previousValue, display, operation)
   - display = result
   - Reset pentru operație nouă

5. Lanț de Operații
   - 2 + 3 + 5 = ?
   - La apasarea celui de-al 2-lea +: calcul intermediar
   - display = 5
   - previousValue = 5
```

---

## 💻 Procesul de Dezvoltare

### Development Workflow

**1. Start Development Server**

```bash
npm start
```

- Pornește Metro Bundler
- Afișează QR code pentru Expo Go
- Oferă opțiuni:
  - `w` - Open pe web (http://localhost:8081)
  - `a` - Deschide Android simulator
  - `i` - Deschide iOS simulator
  - `j` - Open debugger
  - `r` - Reload app

**2. Build pentru Web**

```bash
npm run web
```

- Rulează pe http://localhost:8081
- Hot reload - schimbările sunt reflectate instant
- Browser DevTools disponibile

**3. Build pentru Android**

```bash
npm run android
```

- Necesită Android SDK și emulator
- Build APK/AAB pentru distribuție

**4. Build pentru iOS** (doar pe macOS)

```bash
npm run ios
```

- Necesită Xcode
- Build IPA pentru distribuție

**5. Linting și Validare**

```bash
npm run lint
```

- ESLint verifică code quality
- Detectează probleme și antipattern-uri

### Hot Reload vs Full Reload

- **Fast Refresh**: Reîncarcă componentele modificate (implicit)
- **Full Reload**: `r` în terminal - reîncarcă toată aplicația

### Debugging

```
- Browser DevTools: F12 pe web, DevTools în Expo app
- Console.log() pentru debugging
- React DevTools disponibil ca extensie
- Debugger JS: `j` în terminal Expo
```

---

## 🚀 Cum să Extinzi Aplicația

### Adăugare Functionalități Noi

#### 1. Adăugare Buton Operation Nou (ex: square root)

**Modificare Calculator.tsx:**

```typescript
- Adaugă handler: handleSquareRoot()
- Adaugă buton în render
- Implementează logica în performCalculation()

Exemplu:
case '√':
  return Math.sqrt(current);
```

#### 2. Adăugare Historicului Calculelor

**State nouă:**

```typescript
const [history, setHistory] = useState<string[]>([]);
```

**Update handleEquals:**

```typescript
// Adaugă la history
setHistory([
  ...history,
  `${previousValue} ${operation} ${inputValue} = ${result}`,
]);
```

**Componenta FlatList:**

```typescript
<FlatList
  data={history}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => <Text>{item}</Text>}
/>
```

#### 3. Teme Colorate Personalizate

**Constants/Colors.ts:**

```typescript
export const THEMES = {
  dark: { bg: "#1c1c1c", button: "#505050", operation: "#FF9500" },
  light: { bg: "#f5f5f5", button: "#ddd", operation: "#0066cc" },
};

// În Calculator.tsx:
const [theme, setTheme] = useState("dark");
const colors = THEMES[theme];
```

#### 4. Suport pentru Unități (Temperature, Distance)

Adaugă Picker pentru selectare tip calcul:

```typescript
<Picker
  selectedValue={calculationType}
  onValueChange={(value) => setCalculationType(value)}
>
  <Picker.Item label="Calculator" value="calc" />
  <Picker.Item label="Converter Temp" value="temp" />
  <Picker.Item label="Converter Distance" value="distance" />
</Picker>
```

#### 5. Salvare Rezultate în AsyncStorage

```typescript
import AsyncStorage from "@react-native-async-storage/async-storage";

// Salvare:
await AsyncStorage.setItem("calculations", JSON.stringify(history));

// Recuperare:
const saved = await AsyncStorage.getItem("calculations");
```

#### 6. Adăugare Alarmă Sonore

```typescript
import { Audio } from "expo-av";

const playSound = async () => {
  const { sound } = await Audio.Sound.createAsync(
    require("@/assets/sounds/beep.mp3"),
  );
  await sound.playAsync();
};
```

### Best Practices pentru Extensie

1. **Menține Componentele Mici** - Extrage logică complexă în hooks custom
2. **Type Safety** - Folosește TypeScript pentru toate variabilele noi
3. **Performance** - Optimizează re-renders cu useMemo/useCallback
4. **Testing** - Adaugă unit tests pentru logica de calcul
5. **Accessibility** - Adaugă `accessibilityLabel` pentru butoane
6. **Documentation** - Documentează funciile complexe cu JSDoc

### Exemplu Hook Custom (useCalculatorLogic)

```typescript
// hooks/useCalculatorLogic.ts
export const useCalculatorLogic = () => {
  const [display, setDisplay] = useState("0");
  // ... toată logica calculatorului

  return {
    display,
    handleNumberPress,
    handleOperation,
    // ... export handlers
  };
};

// Dans Calculator.tsx:
const { display, handleNumberPress } = useCalculatorLogic();
```

---

## 📊 Flow Diagram - Inițializare Proiect

```
┌─────────────────────────────────┐
│ create-expo-app@latest .        │
└────────────┬────────────────────┘
             │
             ▼
┌─────────────────────────────────┐
│ Creare Structură Inițială       │
│ - app/                          │
│ - components/                   │
│ - assets/                       │
│ - app.json, tsconfig.json       │
└────────────┬────────────────────┘
             │
             ▼
┌─────────────────────────────────┐
│ npm install                     │
│ (943 pachete, ~3 minute)        │
└────────────┬────────────────────┘
             │
             ▼
┌─────────────────────────────────┐
│ Creare Components               │
│ - Calculator.tsx                │
│ - Update index.tsx              │
└────────────┬────────────────────┘
             │
             ▼
┌─────────────────────────────────┐
│ npm start (dev server ready)    │
│ Rulează pe web/mobile           │
└─────────────────────────────────┘
```

---

## 🔗 Referințe și Resurse

### Documentație Oficială

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Tutorials

- [Expo Tutorial](https://docs.expo.dev/tutorial/introduction/)
- [React Native Learn](https://reactnative.dev/docs/tutorial)
- [Expo Router Guide](https://docs.expo.dev/router/introduction/)

### Community

- [Expo Discord](https://chat.expo.dev)
- [React Native Community](https://reactnative.dev/help)
- [Stack Overflow Tag: react-native](https://stackoverflow.com/questions/tagged/react-native)

---

## 📝 Notăn Finale

- **Versiuni stabile**: Proiectul folosește versiuni stabile (54.0.33 Expo, 19.1.0 React)
- **File-based Routing**: Similar Next.js, rutele sunt în ./app
- **TypeScript First**: Toți fișierele sunt .tsx/.ts pentru type safety
- **Web Support Complet**: Functionează pe Android, iOS și Web cu același cod
- **Performance Optimizat**: React Compiler activat, animații Reanimated, navigation optimizat

---

_Ultima actualizare: Aprilie 14, 2026_
_Proiect: React Native Calculator App cu Expo_
