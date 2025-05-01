import { View, Text, Image, ImageBackground } from 'react-native';

import DarkButton from './DarkButton';

export default function Footer() {
  return (
    <View className="flex-1 ">
      <ImageBackground
        source={require('../assets/images/pattern-dark-bg.png')}
        className="relative flex-1 items-center justify-center overflow-hidden"
        imageStyle={{ opacity: 1, width: '100%' }}
        resizeMode="cover">
        <View className="flex h-[660px] w-full items-center justify-center space-y-5">
          <Text className="mb-8 max-w-[700px] text-center font-Martian text-p2m font-bold text-c_n_0 md:text-p2">
            Ready to debug your reading list?
          </Text>
          <DarkButton
            text="REVIEW MEMBERSHIP OPTIONS"
            onPress={() => console.log('Custom handler')}
            icon={require('../assets/images/icon-arrow-up.svg')}
            accessibilityLabel="Membership options button"
          />
          {/* Social proof */}
          <View className="ml-10 flex  flex-row items-center justify-start">
            {/* Avatar stack */}
            <Image
              source={require('../assets/images/image-avatars.webp')}
              className="-ml-20 scale-[50%] lg:-ml-14"
            />
            <View className="-ml-10 flex flex-col justify-start">
              {/* Stars */}
              <View className="mr-2 flex-row">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <Image
                    key={index}
                    source={require('../assets/images/icon-star.svg')}
                    className="h-5 w-5"
                  />
                ))}
              </View>
              {/* Member count */}
              <Text className="w-[80%] font-Martian text-p7 text-c_n_0 md:w-full">
                200+ developers joined already
              </Text>
            </View>
          </View>
          <View className="h-1 w-[80%] border-b-2 border-c_n_7 pt-10" />
          <View className="flex w-[80%] flex-row items-center justify-between">
            <Text className="font-Inter text-p5 text-c_n_0">© 2024 Tech Book Club</Text>
            <View className="flex flex-row space-x-5 ">
              <Image className="h-6 w-6" source={require('../assets/images/logo-bluesky.svg')} />
              <Image className="h-6 w-6" source={require('../assets/images/logo-linkedin.svg')} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
