import { View, Text, Image } from 'react-native';

import { ResponsiveImageAlt } from '../utils/ResponsiveImage';

export default function SectionTwo() {
  return (
    <View className="mb-10 flex">
      <View className="flex w-full flex-col justify-center p-4 md:p-10 lg:flex-row">
        {/* ---------- */}
        {/* Lefth Section */}
        <View className="order-2 flex w-full flex-col justify-center lg:order-1 lg:w-1/2  lg:flex-row">
          <ResponsiveImageAlt
            mobileSource={require('../assets/images/image-read-together-mobile.webp')}
            tabletSource={require('../assets/images/image-read-together-tablet.webp')}
            desktopSource={require('../assets/images/image-read-together-desktop.webp')}
            className=" h-[319] w-[343] items-center justify-center overflow-hidden rounded-xl md:h-[654px] md:w-[704px] lg:h-[520px] lg:w-[560px]"
            imageStyle={{ transform: [{ scale: 0.5 }] }}
          />
        </View>
        {/* ---------- */}
        {/* Right Section */}
        <View className="order-1 flex w-full flex-col justify-center lg:order-2  lg:w-1/2 lg:flex-row ">
          <View className="flex w-full flex-col items-center justify-start lg:w-[80%] lg:justify-center lg:space-y-10">
            <Text className="w-full py-5 font-Martian text-p2m font-bold md:py-10 md:text-p2">
              Read together, grow together
            </Text>
            <View className="flex w-full flex-col space-y-6 px-4 py-8">
              {/* Step 1 */}
              <View className="flex flex-row">
                <Image
                  source={require('../assets/images/icon-check.svg')}
                  className="mr-3 h-6 w-6"
                />
                <Text className=" font-Martian text-p6m md:text-p6">
                  Monthly curated tech reads selected by industry experts
                </Text>
              </View>
              {/* Step 2 */}
              <View className="flex flex-row">
                <Image
                  source={require('../assets/images/icon-check.svg')}
                  className="mr-3 h-6 w-6"
                />
                <Text className=" font-Martian text-p6m md:text-p6">
                  Virtual and in-person meetups for deep-dive discussions
                </Text>
              </View>
              {/* Step 3 */}
              <View className="flex flex-row">
                <Image
                  source={require('../assets/images/icon-check.svg')}
                  className="mr-3 h-6 w-6"
                />
                <Text className=" font-Martian text-p6m md:text-p6">
                  Early access to new tech book releases
                </Text>
              </View>
              {/* Step 4 */}
              <View className="flex flex-row">
                <Image
                  source={require('../assets/images/icon-check.svg')}
                  className="mr-3 h-6 w-6"
                />
                <Text className=" font-Martian text-p6m md:text-p6">
                  Author Q&A sessions with tech thought leaders
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
