import { View, Text, Image, ImageBackground } from 'react-native';

import LightButton from './LightButton';
import { ResponsiveImageAlt } from '../utils/ResponsiveImage';

export default function SectionOne() {
  return (
    <View className="mb-10 flex">
      <ImageBackground
        source={require('../assets/images/pattern-light-bg.png')}
        className="relative flex-1 items-center justify-center overflow-hidden md:p-10"
        resizeMode="cover">
        <Image
          className="absolute -bottom-[540px] -right-[540px] "
          source={require('../assets/images/pattern-glow.png')}
        />
        {/* Header with logo */}
        <View className="ml-24 flex w-full  items-start p-8">
          <Image source={require('../assets/images/logo.svg')} className="h-8 w-12" />
        </View>
        {/* Main content */}
        <View className="flex w-full flex-col items-center justify-center space-y-2 lg:flex-row">
          <View className="mt-20 flex w-full items-center justify-center space-y-5 lg:w-1/2">
            {/* LEFT: Heading with gradient text */}
            <View className="ml-10">
              <Text className="font-Martian text-p1m font-extrabold text-gradient-brand md:text-p1">
                Join the
              </Text>
              <Text className="font-Martian text-p1m font-extrabold text-gradient-brand md:text-p1">
                ultimate tech
              </Text>
              <Text className="font-Martian text-p1m font-extrabold text-gradient-brand md:text-p1">
                book club
              </Text>
            </View>
            {/* Description */}
            <Text className="ml-10 w-[75%] text-p5 leading-relaxed text-gray-600">
              Turn your reading time into learning time with fellow tech enthusiasts. Get curated
              recommendations, join vibrant discussions, and level up your skills one chapter at a
              time.
            </Text>
            {/* CTA Button */}
            <LightButton
              text="REVIEW MEMBERSHIP OPTIONS"
              icon={require('../assets/images/icon-arrow-down.svg')}
              accessibilityLabel="Get started button"
            />
            {/* Social proof */}
            <View className="ml-10 flex  flex-row items-center justify-start">
              {/* Avatar stack */}
              <Image
                source={require('../assets/images/image-avatars.webp')}
                style={{ width: 110, height: 40 }}
                className=""
              />
              <View className="ml-2 flex flex-col justify-start">
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
                <Text className="w-[80%] font-Martian text-p7 text-c_n_7 md:w-full">
                  200+ developers joined already
                </Text>
              </View>
            </View>
          </View>

          {/* RIGHT: Image */}
          <View className="flex w-full items-center justify-center lg:w-1/2">
            <ResponsiveImageAlt
              mobileSource={require('../assets/images/image-hero-mobile.webp')}
              tabletSource={require('../assets/images/image-hero-tablet.webp')}
              desktopSource={require('../assets/images/image-hero-desktop.webp')}
              className="h-[530px] w-[500px] items-center justify-center overflow-hidden rounded-lg"
              imageStyle={{ transform: [{ scale: 0.48 }] }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
