import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function NotFount() {
  return (
    <View className='flex justify-center items-center bg-yellow-200'>
      <Text className='text-3xl text-red-800 font-bold'>Not Fount Route</Text>
      <Link href="/">Home</Link>
    </View>
  )
}
