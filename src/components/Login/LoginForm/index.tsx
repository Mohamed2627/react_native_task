import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { CustomButton, CustomInput, TextButton } from '../..'
import { useFormik } from 'formik';
import { RootState, setAuthError, userLogin } from '../../../redux';
import { useDispatch, useSelector } from 'react-redux';
import { GLOBAL_STYLES } from '../../../style';
import { AUTH_STATUS, loginValidationSchema } from '../../../utils';
import { ROUTES, replace } from '../../../navigation';


const LoginForm = () => {

  const dispatch = useDispatch<any>();
  const { authLoading, authError } = useSelector((state: RootState) => state.userAuth)

  const { handleChange, handleSubmit, isValid, values, errors, handleBlur, touched } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: loginValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      if (!isValid || !values.email || !values.password) return;
      try {
        const res = await dispatch(userLogin(values)).unwrap();
        if (res == AUTH_STATUS.AUTHENTICATED) {
          resetForm();
          replace(ROUTES.Home)
        }
      } catch (err) {
        return
      }
    },
  });


  useEffect(() => {
    dispatch(setAuthError(null))
  }, [values.email, values.password])

  return (
    <View >
      {authError && <Text style={GLOBAL_STYLES.textError}>{authError}</Text>}
      <CustomInput
        label={'Email'}
        placeholder={'Enter your email'}
        isPassword={false}
        hasShowPassword={false}
        icon={'email-outline'}
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
        hasShowPassword={false}
        icon={'lock-outline'}
        value={values.password}
        setValue={handleChange('password')}
        error={errors.password}
        onBlur={handleBlur('password')}
        touched={touched.password}
      />
      <TextButton text={'Forgot password?'} onPress={() => { }} />
      <CustomButton
        disabled={!isValid}
        text={'Sign In'}
        onPress={handleSubmit}
        containerStyle={{ marginBottom: 0 }}
        loading={authLoading}
      />
    </View>
  )
}

export default LoginForm

