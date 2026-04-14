import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleNumberPress = (num: string) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? String(num) : display + num);
    }
  };

  const handleDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  const handleOperation = (op: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const result = performCalculation(previousValue, inputValue, operation);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setOperation(op);
    setWaitingForOperand(true);
  };

  const performCalculation = (
    prev: number,
    current: number,
    op: string,
  ): number => {
    switch (op) {
      case "+":
        return prev + current;
      case "-":
        return prev - current;
      case "*":
        return prev * current;
      case "/":
        return prev / current;
      case "%":
        return prev % current;
      default:
        return current;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const result = performCalculation(previousValue, inputValue, operation);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const handleToggleSign = () => {
    const value = parseFloat(display);
    setDisplay(String(value * -1));
  };

  const handlePercentage = () => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  };

  const Button = ({
    label,
    onPress,
    style,
  }: {
    label: string;
    onPress: () => void;
    style?: any;
  }) => (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.display}>{display}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <Button
            label="C"
            onPress={handleClear}
            style={styles.operationButton}
          />
          <Button
            label="+/-"
            onPress={handleToggleSign}
            style={styles.operationButton}
          />
          <Button
            label="%"
            onPress={handlePercentage}
            style={styles.operationButton}
          />
          <Button
            label="÷"
            onPress={() => handleOperation("/")}
            style={styles.operationButton}
          />
        </View>

        <View style={styles.row}>
          <Button label="7" onPress={() => handleNumberPress("7")} />
          <Button label="8" onPress={() => handleNumberPress("8")} />
          <Button label="9" onPress={() => handleNumberPress("9")} />
          <Button
            label="×"
            onPress={() => handleOperation("*")}
            style={styles.operationButton}
          />
        </View>

        <View style={styles.row}>
          <Button label="4" onPress={() => handleNumberPress("4")} />
          <Button label="5" onPress={() => handleNumberPress("5")} />
          <Button label="6" onPress={() => handleNumberPress("6")} />
          <Button
            label="-"
            onPress={() => handleOperation("-")}
            style={styles.operationButton}
          />
        </View>

        <View style={styles.row}>
          <Button label="1" onPress={() => handleNumberPress("1")} />
          <Button label="2" onPress={() => handleNumberPress("2")} />
          <Button label="3" onPress={() => handleNumberPress("3")} />
          <Button
            label="+"
            onPress={() => handleOperation("+")}
            style={styles.operationButton}
          />
        </View>

        <View style={styles.row}>
          <Button
            label="0"
            onPress={() => handleNumberPress("0")}
            style={styles.zeroButton}
          />
          <Button label="." onPress={handleDecimal} />
          <Button
            label="="
            onPress={handleEquals}
            style={styles.equalsButton}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  displayContainer: {
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "flex-end",
    minHeight: 100,
  },
  display: {
    fontSize: 48,
    color: "#fff",
    fontWeight: "600",
  },
  buttonsContainer: {
    justifyContent: "flex-end",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    height: 70,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: "#505050",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "500",
  },
  operationButton: {
    backgroundColor: "#FF9500",
  },
  equalsButton: {
    backgroundColor: "#4CAF50",
  },
  zeroButton: {
    flex: 2,
  },
});
