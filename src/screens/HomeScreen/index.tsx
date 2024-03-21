import { ScrollView, Text } from 'react-native'
import React, { useState } from 'react'
import { CityComponent, CustomButton, CustomInput, ScreenContainer, ScreenTitle } from '../../components'
import { GLOBAL_STYLES } from '../../style'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, getCurrentTemp, setTempError } from '../../redux'
import { removeToken } from '../../utils'
import { ROUTES, replace } from '../../navigation'

const HomeScreen = () => {

  const [cityName, setCityName] = useState('');

  const dispatch = useDispatch<any>();

  const { city, temp, tempError, tempLoading } = useSelector((state: RootState) => state.tempReducer)

  const getTempData = async () => {
    setCityName('')
    try {
      const res = await dispatch(getCurrentTemp(cityName)).unwrap();
    } catch (error) {
      return
    }
  }

  const handleLogout = () => {
    removeToken().then(() => replace(ROUTES.Login)).catch(() => dispatch(setTempError('Somethin went wrong')))
  }

  return (
    <ScreenContainer>
      <ScreenTitle title={'App Weather'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[GLOBAL_STYLES.generalMargin, GLOBAL_STYLES.contentScroll]}
      >
        <CustomInput
          label={'City Name'}
          placeholder={'Enter your city'}
          isPassword={false}
          hasShowPassword={false}
          icon={'select-place'}
          value={cityName}
          setValue={setCityName}
        />
        <CustomButton
          text={'Get Temperature'}
          onPress={getTempData}
          containerStyle={{ marginBottom: 0, width: '70%', alignSelf: 'center', }}
          loading={tempLoading}
        />
        {city ? (
          <CityComponent city={city} temp={temp} />
        ) : tempError ? (
          <Text style={GLOBAL_STYLES.textError}>Something went wrong</Text>
        ) : (
          <></>
        )}
        <CustomButton
          text={'Log out'}
          onPress={handleLogout}
          containerStyle={{ marginBottom: 0, width: '50%', alignSelf: 'center', }}
        />
      </ScrollView>
    </ScreenContainer>
  )
}

export default HomeScreen
