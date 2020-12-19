<TestHomeTabNav.Screen
  name="Home"
  component={HomeScreen}
  options={{
    tabBarLabel: ({focused}) => {
      return SetTeabarLabel(focused, '홈');
    },
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      return SetTabbarIcon(
        focused,
        imagePath.TABBARHOMEON,
        imagePath.TABBARHOMEOFF,
      );
    },
  }}
/>;

function SetTeabarLabel(focused, name) {
  return (
    <Text
      style={{
        fontSize: 12,
        color: focused ? colors.main : colors.black,
        height: 0,
      }}></Text>
  );
}

function SetTabbarIcon(focused, onImg, offImg) {
  return (
    <View
      style={{
        width: Dimensions.get('window').width / 4,
        height: '100%',
        backgroundColor: '#525252',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        source={focused ? onImg : offImg}
        style={{
          width: '100%',
          height: '100%',
          tintColor: focused ? colors.main : colors.white,
        }}
        resizeMode="contain"
      />
      <View
        style={{
          width: 1,
          height: '80%',
          backgroundColor: '#212121',
          position: 'absolute',
        }}></View>
    </View>
  );
}
