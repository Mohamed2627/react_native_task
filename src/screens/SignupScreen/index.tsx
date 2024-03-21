import { ScrollView, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CustomButton, CustomInput, ScreenContainer, ScreenHeader } from '../../components'
import { GLOBAL_STYLES } from '../../style'
import { signupValidationSchema } from '../../utils'
import { useFormik } from 'formik'
import CheckBox from '@react-native-community/checkbox';
import { COLORS, hp } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, setAuthError, userSignUp } from '../../redux'
import { ROUTES, navigateTo } from '../../navigation'

const SignupScreen = () => {

  const dispatch = useDispatch<any>();

  const { authLoading, authError } = useSelector((state: RootState) => state.userAuth)

  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const { handleChange, isValid, handleSubmit, values, errors, setFieldValue, handleBlur, touched } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      checkbox: false
    },
    validationSchema: signupValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      if (!isValid || !checkAllValues()) return;
      try {
        const res = await dispatch(userSignUp(values)).unwrap();
        if (res == true) {
          resetForm();
          navigateTo(ROUTES.Login)
        }
      } catch (err) {
        return
      }
    },
  });

  const checkAllValues = () => {
    for (let value of Object.values(values)) {
      if (value == '' || value == false) {
        return false
      }
    }
    return true
  }

  useEffect(() => {
    dispatch(setAuthError(null))
  }, [values.email, values.password])

  return (
    <ScreenContainer>
      <ScreenHeader title={'Sign up to your account'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[GLOBAL_STYLES.generalMargin, GLOBAL_STYLES.contentScroll]}
      >
        <View style={{ paddingBottom: hp(4) }}>
          {authError && <Text style={GLOBAL_STYLES.textError}>{authError}</Text>}
          <CustomInput
            label={'User name'}
            placeholder={'Enter your name'}
            isPassword={false}
            hasShowPassword={false}
            icon={''}
            value={values.username}
            setValue={handleChange('username')}
            error={errors.username}
            onBlur={handleBlur('username')}
            touched={touched.username}
          />
          <CustomInput
            label={'Email'}
            placeholder={'Enter your email'}
            isPassword={false}
            hasShowPassword={false}
            icon={''}
            value={values.email}
            setValue={handleChange('email')}
            error={errors.email}
            onBlur={handleBlur('email')}
            touched={touched.email}
          />
          <CustomInput
            label={'Password'}
            placeholder={'Enter your password'}
            isPassword={true}
            hasShowPassword={true}
            icon={''}
            value={values.password}
            setValue={handleChange('password')}
            error={errors.password}
            onBlur={handleBlur('password')}
            touched={touched.password}
          />
          <CustomInput
            label={'Confirm Password'}
            placeholder={'Enter your password'}
            isPassword={true}
            hasShowPassword={true}
            icon={''}
            value={values.confirmPassword}
            setValue={handleChange('confirmPassword')}
            error={errors.confirmPassword}
            onBlur={handleBlur('confirmPassword')}
            touched={touched.confirmPassword}
          />
          <View style={[GLOBAL_STYLES.centerRow, { justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: hp(1) }]}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              tintColors={{
                true: COLORS.primaryColor,
                false: COLORS.grey,
              }}
              onValueChange={(newValue) => {
                setToggleCheckBox(newValue);
                setFieldValue('checkbox', newValue);
              }}
            />
            <Text style={GLOBAL_STYLES.textPolicy}>I accept & agree terms conditions & privacy policy</Text>
          </View>
          {errors.checkbox && <Text style={GLOBAL_STYLES.textError}>{errors.checkbox}</Text>}
          <CustomButton
            disabled={!isValid}
            text={'Sign Up'}
            onPress={handleSubmit}
            containerStyle={{ marginBottom: 0 }}
            loading={authLoading}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  )
}

export default SignupScreen

