import { Text, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Button from "../components/button";
import CustomTextInput from "../components/custom-text-input";

import globalStyles from "../core/global-styles";

import { COLORS, FORM_PADDING_HORIZONTAL } from "../constants";
import { StyleSheet } from "react-native";

const initialValues = {
  email: "",
  password: "",
  passwordConfirmation: "",
};

const Register = ({ navigation }) => {
  const handleSubmit = (values) => {
    navigation.navigate("Home");
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Почта введена некорректно")
      .required("Это поле обязательно для заполнения"),
    password: Yup.string()
      .required("Это поле обязательно для заполнения")
      .min(8, "Пароль слишком короткий - должен содержать минимум 8 символов."),
    passwordConfirmation: Yup.string()
      .required("Это поле обязательно для заполнения")
      .oneOf([Yup.ref("password")], "Пароли должны совпадать"),
  });

  return (
    <View style={styles.registerContainer}>
      <Text style={[globalStyles.textSemiBold, styles.title]}>Регистрация</Text>
      <Text style={[globalStyles.textRegular, styles.description]}>
        Введите, пожалуйста, свои персональные данные для дальнейшей
        персонализации. Это необходимо только один раз.
      </Text>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <View style={styles.form}>
            <CustomTextInput
              borderColor={COLORS.GREEN}
              name="email"
              placeholder="Email"
              icon="mail"
            />
            <CustomTextInput
              borderColor={COLORS.GREEN}
              name="password"
              placeholder="Пароль"
              icon="lock"
              secureTextEntry={true}
            />
            <CustomTextInput
              borderColor={COLORS.GREEN}
              name="passwordConfirmation"
              placeholder="Пароль ещё раз"
              icon="lock"
              secureTextEntry={true}
            />

            <Button
              title="Регистрация"
              onPress={() => {
                formik.submitForm();
              }}
              style={styles.button}
              textStyle={styles.buttonText}
              activeOpacity={0.8}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: FORM_PADDING_HORIZONTAL,
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
  },
  description: {
    textAlign: "center",
    marginBottom: 30,
  },
  form: {
    width: "100%",
    rowGap: 20,
  },
  button: {
    width: "100%",
    borderRadius: 30,
    backgroundColor: COLORS.GREEN,
  },
  buttonText: {
    fontFamily: "MontserratSemiBold",
  },
});

export default Register;
