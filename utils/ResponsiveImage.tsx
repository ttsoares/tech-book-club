import React, { memo, useMemo } from 'react';
import {
  View,
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  useWindowDimensions,
} from 'react-native';

const LG_size = 1440;
const MD_size = 768;

type ResponsiveImageProps = {
  mobileSource: ImageSourcePropType;
  tabletSource: ImageSourcePropType;
  desktopSource: ImageSourcePropType;
  className?: string;
  imageStyle?: StyleProp<ImageStyle>;
};

const ResponsiveImageComponent: React.FC<ResponsiveImageProps> = ({
  mobileSource,
  tabletSource,
  desktopSource,
  className = '',
  imageStyle,
}) => {
  const { width } = useWindowDimensions();

  // Memoize the image source selection
  const imageSource = useMemo(() => {
    if (width >= LG_size) return desktopSource;
    if (width >= MD_size) return tabletSource;
    return mobileSource;
  }, [width, mobileSource, tabletSource, desktopSource]);

  return (
    <View className={className}>
      <Image source={imageSource} style={imageStyle} resizeMode="contain" />
    </View>
  );
};

export const ResponsiveImageAlt = memo(ResponsiveImageComponent);
