import React, { useState } from 'react';
import { Pressable, View, Text, Image, ImageSourcePropType, PressableProps } from 'react-native';

type MyButtonProps = {
  text: string;
  icon?: ImageSourcePropType;
} & PressableProps;

export default function LightButton({ text, icon, ...pressableProps }: MyButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handlePress: PressableProps['onPress'] = (e) => {
    try {
      pressableProps.onPress?.(e);
      alert(`You pressed the button with text: ${text}`);
    } catch (error) {
      console.error('Error handling button press:', error);
      alert('An error occurred while handling the button press.');
    }
  };

  return (
    <Pressable
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      className="group active:opacity-75"
      onPress={handlePress}
      {...pressableProps}>
      <View className="relative">
        {isHovered && <View className="absolute -inset-[4px] rounded-lg border border-gray-400" />}
        <View className={`rounded-md p-[3px] ${isHovered ? 'bg-transparent' : ''}`}>
          <View className="hover:bg-light-grad flex flex-row items-center justify-center rounded border border-gray-400 bg-transparent px-4 py-2">
            <Text className="tracking-widerfont-bold px-6 py-3 font-Inter text-p6  text-gray-700">
              {text}
            </Text>
            {icon && <Image className="group-hover:animate-bounce" source={icon} />}
          </View>
        </View>
      </View>
    </Pressable>
  );
}
