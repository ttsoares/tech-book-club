import { View, Text, Image, ImageBackground } from 'react-native';

import LightButton from './LightButton';
import { ResponsiveImageAlt } from '../utils/ResponsiveImage';

export default function SectionOne() {
  return (
    <View className="mb-16 flex">
      <ImageBackground
        source={require('../assets/images/pattern-light-bg.png')}
        className="relative h-full flex-1 items-center justify-center overflow-hidden md:p-10"
        resizeMode="cover"
        style={{ flex: 1, width: '100%', height: '100%' }}>
        <Image
          className="absolute -bottom-[540px] -right-[540px] "
          source={require('../assets/images/pattern-glow.png')}
        />
        {/* Header with logo */}
        <View className="flex w-full items-start  p-8 md:ml-24">
          <Image source={require('../assets/images/logo.svg')} className="h-8 w-12" />
        </View>
        {/* Main content */}
        <View className="flex w-full flex-col items-center justify-start space-y-2 px-5 md:items-start lg:flex-row lg:items-center lg:justify-center">
          <View className="flex w-full items-start justify-start space-y-5 md:mt-20 lg:w-1/2 lg:items-center lg:justify-center">
            {/* LEFT: Heading with gradient text */}
            <View className="lg:ml-10">
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
            <Text className="w-full text-p5 leading-relaxed text-gray-600 md:w-[75%] lg:ml-10">
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
            <View className="flex flex-row items-center  justify-start pb-8 lg:ml-10">
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
          <View className="flex w-full items-start justify-center lg:w-1/2 lg:items-center">
            <ResponsiveImageAlt
              mobileSource={require('../assets/images/image-hero-mobile.webp')}
              tabletSource={require('../assets/images/image-hero-tablet.webp')}
              desktopSource={require('../assets/images/image-hero-desktop.webp')}
              className="h-[384px] w-[343px] items-center justify-center overflow-hidden rounded-lg md:h-[530px] md:w-[500px]"
              imageStyle={{ transform: [{ scale: 0.48 }] }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
