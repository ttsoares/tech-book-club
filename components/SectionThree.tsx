import { View, Text, Image, ImageBackground } from 'react-native';

import { ResponsiveImageAlt } from '../utils/ResponsiveImage';

export default function SectionThre() {
  return (
    <View className="flex">
      <View className="flex md:p-10">
        {/* Hero Section */}
        <View className="mb-16 flex-1 flex-col items-center justify-start lg:flex-row  lg:justify-center">
          {/* Left Section */}
          <View className="flex w-full flex-col items-center justify-start lg:w-1/2 lg:justify-center lg:space-y-10">
            <Text className="w-[90%] py-10 font-Martian text-p2m font-bold md:text-p2 lg:w-[80%]">
              Not your average book club
            </Text>
            {/* Orange circle for "club" */}
            <Image
              source={require('../assets/images/pattern-circle.png')}
              className="absolute -left-3 top-[7.2rem] z-[-1] scale-[0.7] md:left-[26%] md:top-[33%] md:h-20 md:w-20 md:scale-100 lg:left-[32%] lg:top-[18%]"
            />

            <Text className="p-5 font-Inter text-p5 text-c_n_7 lg:w-[77%]">
              Connect with a community that speaks your language - from Python to Typescriptand
              everything in between. Our discussions blend technical depth with practical
              applications
            </Text>
          </View>
          {/* Logos Techs */}
          <Image
            className="absolute bottom-6 right-20 z-10 hidden h-8 w-12 md:block lg:bottom-0 lg:right-[43%]"
            source={require('../assets/images/logos-tech.svg')}
          />

          {/* Right Section */}
          <View className="-z-10 flex w-full items-center  justify-center overflow-visible lg:w-1/2">
            <ResponsiveImageAlt
              mobileSource={require('../assets/images/image-not-average-mobile.webp')}
              tabletSource={require('../assets/images/image-not-average-tablet.webp')}
              desktopSource={require('../assets/images/image-not-average-desktop.webp')}
              className=" h-[319] w-[343] items-center justify-center overflow-hidden rounded-xl md:h-[654px] md:w-[704px] lg:h-[520px] lg:w-[560px]"
              imageStyle={{ transform: [{ scale: 0.5 }] }}
            />
          </View>
        </View>
        {/* Journey Section */}
        <View className="items-center justify-center lg:px-4 ">
          <View className="flex w-full flex-col items-center justify-center md:flex-col md:p-10">
            <ImageBackground
              source={require('../assets/images/pattern-light-bg.png')}
              className="relative flex w-full items-center justify-between overflow-hidden lg:p-10"
              resizeMode="cover">
              <Image
                className="absolute -bottom-[500px] -right-[500px] scale-[0.5] md:-bottom-[500px] md:-right-[400px] md:scale-[0.6] lg:-bottom-[500px] lg:-right-[400px]"
                source={require('../assets/images/pattern-glow.png')}
              />
              <View className="flex w-full flex-col items-center justify-center p-7 md:p-14">
                <Text className="mb-4 font-Martian text-p2m font-bold md:text-p2 lg:text-center">
                  Your tech reading journey
                </Text>

                {/* Steps */}
                <View className="flex w-full flex-col py-8 md:justify-between lg:flex-row lg:px-10">
                  {/* Step 1 */}
                  <View className="mr-8 flex w-full lg:w-1/4">
                    <View className="flex flex-row justify-between ">
                      <View className="mb-4 h-12 w-12 items-center justify-center rounded-lg border-2 border-[#0a2b3c]">
                        <Text className="font-Martian text-p6">1</Text>
                      </View>
                      <View className="hidden w-full flex-col items-center justify-start lg:flex ">
                        <Image
                          source={require('../assets/images/pattern-arrow.svg')}
                          className="absolute z-[-1] h-20 w-20 lg:left-[50%] lg:top-[12%]"
                        />
                      </View>
                    </View>
                    <Text className="mb-8 mr-12 font-Martian text-p6m md:text-p6">
                      Choose your membership tier
                    </Text>
                  </View>
                  {/* Step 2 */}
                  <View className="mr-8 flex w-full lg:w-1/4">
                    <View className="flex flex-row justify-between ">
                      <View className="mb-4 h-12 w-12 items-center justify-center rounded-lg border-2 border-[#0a2b3c]">
                        <Text className="font-Martian text-p6">2</Text>
                      </View>
                      <View className="hidden w-full flex-col items-center justify-start lg:flex ">
                        <Image
                          source={require('../assets/images/pattern-arrow.svg')}
                          className="absolute z-[-1] h-20 w-20 lg:left-[50%] lg:top-[12%]"
                        />
                      </View>
                    </View>
                    <Text className="mb-8 mr-12 font-Martian text-p6m md:text-p6">
                      Get your monthly book selection
                    </Text>
                  </View>
                  {/* Step 3 */}
                  <View className="mr-8 flex w-full lg:w-1/4">
                    <View className="flex flex-row justify-between ">
                      <View className="mb-4 h-12 w-12 items-center justify-center rounded-lg border-2 border-[#0a2b3c]">
                        <Text className="font-Martian text-p6">3</Text>
                      </View>
                      <View className="hidden w-full flex-col items-center justify-start lg:flex ">
                        <Image
                          source={require('../assets/images/pattern-arrow.svg')}
                          className="absolute z-[-1] h-20 w-20 lg:left-[50%] lg:top-[12%]"
                        />
                      </View>
                    </View>
                    <Text className="mb-8 mr-12 font-Martian text-p6m md:text-p6">
                      Join our discussion forums
                    </Text>
                  </View>
                  {/* Step 4 */}
                  <View className="mr-8 flex w-full lg:w-1/4">
                    <View className="flex flex-row justify-between ">
                      <View className="mb-4 h-12 w-12 items-center justify-center rounded-lg border-2 border-[#0a2b3c]">
                        <Text className="font-Martian text-p6">4</Text>
                      </View>
                    </View>
                    <Text className="mb-8mr-12 font-Martian text-p6m md:text-p6">
                      Attend exclusive meetups
                    </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    </View>
  );
}
