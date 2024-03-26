import { StyleSheet, View, Text, TextInput } from "react-native";
import { useField } from "formik";
import { Feather } from "@expo/vector-icons";

const CustomTextInput = ({
  label,
  name,
  placeholder,
  icon,
  borderColor = "black",
  secureTextEntry = false,
}) => {
  const [, meta, helpers] = useField(name);

  const handleChange = (new_text) => {
    helpers.setValue(new_text);
  };

  const inputContainerStyles = [
    styles.inputContainer,
    { borderColor: borderColor },
  ];

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={inputContainerStyles}>
        {icon && (
          <Feather
            color={borderColor}
            name={icon}
            size={24}
            style={styles.icon}
          />
        )}
        <TextInput
          secureTextEntry={secureTextEntry}
          style={styles.input}
          onChangeText={handleChange}
          onBlur={() => helpers.setTouched(true)}
          value={meta.value}
          placeholder={placeholder}
          selectionColor={borderColor ?? "#000000"}
        />
      </View>

      {meta.touched && meta.error && (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{meta.error}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 20,
  },
  icon: {
    marginRight: 10,
  },
  label: {
    fontSize: 14,
    color: "#a8a8a8",
  },
  errorContainer: {
    marginLeft: 12,
  },
  error: {
    fontSize: 12,
    color: "red",
    fontFamily: "MontserratMedium",
  },
  input: {
    fontFamily: "MontserratMedium",
    height: 40,
    width: "100%",
  },
});

export default CustomTextInput;
