import React, { useState } from 'react';
import { Pressable, View, Text, Image, ImageSourcePropType, PressableProps } from 'react-native';

type MyButtonProps = {
  text: string;
  icon?: ImageSourcePropType;
} & PressableProps;

export default function DarkButton({ text, icon, ...pressableProps }: MyButtonProps) {
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
        {isHovered && <View className="absolute -inset-[4px] rounded-lg border border-c_n_0" />}
        <View className={`rounded-md p-[3px] ${isHovered ? 'bg-transparent' : ''}`}>
          <View className="flex flex-row items-center justify-center rounded border-2 border-c_n_0 bg-transparent px-4 py-2 hover:bg-dark-grad">
            <Text className="px-4 py-3 font-Inter text-p6m font-bold tracking-wide text-c_n_0  md:text-p4">
              {text}
            </Text>
            {icon && <Image className="group-hover:animate-bounce" source={icon} />}
          </View>
        </View>
      </View>
    </Pressable>
  );
}
