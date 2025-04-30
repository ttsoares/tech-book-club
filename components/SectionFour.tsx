import React from 'react';
import { View, Text, Image } from 'react-native';

import LightButton from './LightButton';

export default function SectionFour() {
  return (
    <View className="mb-10 flex">
      <View className="flex w-full flex-col  items-center justify-center space-y-10  py-10">
        <Text className="w-full text-center font-Martian text-p2m font-bold md:text-p2">
          Membership options
        </Text>
        {/* Wrapper */}
        <View className="flex w-full flex-row flex-wrap items-center gap-5 px-10 lg:justify-center">
          {/* Starter */}
          <View
            className="flex h-[358px] w-[286px] transform flex-col justify-center space-y-6
             rounded-lg border-2 border-c_n_2 p-5
             shadow-lg
             ">
            <Text className="font-Martian text-p4 font-bold">Starter</Text>
            <Text className="font-Martian text-p3 font-bold">
              $19 <Text className="-ml-3 font-Inter text-p5 text-c_n_7">/month</Text>
            </Text>
            <View className="h-1 w-[90%] border-b-2 border-c_n_2" />
            <View className="flex flex-col space-y-2">
              <View className="flex flex-row">
                <Image source={require('../assets/images/icon-check.svg')} />
                <Text className="ml-3 font-Inter text-p5">1 book/month</Text>
              </View>
              <View className="flex flex-row">
                <Image source={require('../assets/images/icon-check.svg')} />
                <Text className="ml-3 font-Inter text-p5">Online foruns</Text>
              </View>
            </View>
            <LightButton text="Subscribe Now" />
          </View>
          {/* Pro */}
          <View
            className="relative flex h-[358px] w-[286px] transform flex-col justify-center
            space-y-6 overflow-hidden rounded-lg border-c_n_2 bg-c_n_1 p-5 shadow-xl transition
            duration-500 hover:scale-110 md:h-[390px] md:w-[350px]
            ">
            <Image
              source={require('../assets/images/pattern-glow.png')}
              className="absolute -left-[250px] -top-[150px] scale-[0.7] "
            />
            <Text className="font-Martian text-p4 font-bold">Pro</Text>
            <Text className="font-Martian text-p3 font-bold">
              $29 <Text className="-ml-3 font-Inter text-p5 text-c_n_7">/month</Text>
            </Text>
            <View className="h-1 w-[90%] border-b-2 border-c_n_2" />
            <View className="flex flex-col space-y-2">
              <View className="flex flex-row">
                <Image source={require('../assets/images/icon-check.svg')} />
                <Text className="ml-3 font-Inter text-p5">2 book/month</Text>
              </View>
              <View className="flex flex-row">
                <Image source={require('../assets/images/icon-check.svg')} />
                <Text className="ml-3 font-Inter text-p5">Virtual meetups</Text>
              </View>
            </View>
            <LightButton text="Subscribe Now" />
          </View>
          {/* Enterprise */}
          <View
            className="flex h-[358px] w-[286px] transform flex-col justify-center
             space-y-6 rounded-lg border-2 border-c_n_2 p-5
             shadow-lg
             ">
            <Text className="font-Martian text-p4 font-bold">Enterprise</Text>
            <Text className="font-Martian text-p3 font-bold">Custom</Text>
            <View className="h-1 w-[90%] border-b-2 border-c_n_2" />
            <View className="flex flex-col space-y-2">
              <View className="flex flex-row">
                <Image source={require('../assets/images/icon-check.svg')} />
                <Text className="ml-3 font-Inter text-p5">Team access</Text>
              </View>
              <View className="flex flex-row">
                <Image source={require('../assets/images/icon-check.svg')} />
                <Text className="ml-3 font-Inter text-p5">Private sessions</Text>
              </View>
            </View>
            <LightButton text="Talk to us" />
          </View>
        </View>
      </View>
      <View className="lg:blockmy-20 mx-auto hidden h-1 w-5 border-b-2 border-red-500" />
      <View className="mx-8 flex-row lg:mx-auto">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <Image
            key={index}
            source={require('../assets/images/icon-star.svg')}
            className="h-5 w-5"
          />
        ))}
      </View>
      <View className="mx-8 mt-5 max-w-[70%]  lg:mx-auto">
        <Text className="w-full font-Martian text-p3m font-bold text-c_n_9 md:text-p3 lg:text-center">
          "This book club transformed my technical reading from a solitary activity into an
          enriching community experience. The discussions are gold!"
        </Text>
        <Text className=" text-p5 lg:mx-auto">Sarah Chen, Software Architect</Text>
      </View>
    </View>
  );
}
