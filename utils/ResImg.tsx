// Not used as it do some strange things with the images
// Keeped here for future reference

import React, { memo } from 'react';
import { View, Image, ImageSourcePropType, ImageStyle, StyleProp } from 'react-native';

type ResponsiveImageProps = {
  mobileSource: ImageSourcePropType;
  tabletSource: ImageSourcePropType;
  desktopSource: ImageSourcePropType;
  className?: string;
  imageStyle?: StyleProp<ImageStyle>;
};

const ResImgComp: React.FC<ResponsiveImageProps> = ({
  mobileSource,
  tabletSource,
  desktopSource,
  className = '',
  imageStyle,
}) => {
  return (
    <View className={className}>
      <Image
        source={mobileSource}
        style={imageStyle}
        resizeMode="contain"
        className="block md:hidden lg:hidden"
      />
      <Image
        source={tabletSource}
        style={imageStyle}
        resizeMode="contain"
        className="hidden md:block lg:hidden"
      />
      <Image
        source={desktopSource}
        style={imageStyle}
        resizeMode="contain"
        className="hidden lg:block"
      />
    </View>
  );
};
export const ResImg = memo(ResImgComp);
