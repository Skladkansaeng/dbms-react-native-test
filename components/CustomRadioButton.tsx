import { TextStyle, TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomRadioButton = ({
  label,
  selected,
  onSelect,
  textStyles,
  textFontSize,
  fontWeight,
  disabled
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
  textStyles?: TextStyle;
  textFontSize?: number;
  disabled?: boolean;
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
}) => (
  <TouchableOpacity
    disabled={disabled}
    style={[
      styles.radioButton,
      {
        backgroundColor: disabled ? "grey" : selected ? "#007BFF" : "#FFF",
        borderColor: disabled ? "grey" : "#007BFF"
      },
      textStyles
    ]}
    onPress={onSelect}
  >
    <Text
      style={[
        styles.radioButtonText,
        {
          color: selected ? "#FFF" : "#000",
          fontSize: textFontSize ?? 16,
          fontWeight: fontWeight ?? "400"
        }
      ]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  radioButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 8,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
  },
  radioButtonText: {
    fontSize: 16
  }
});

export default CustomRadioButton;
