import React from 'react'
import { View, Text } from 'react-native'

const ChildrenExample = ({title,children}) => {
  return (
    <>
        <Text>{title}</Text>
        {children}
        <Text>Footer Content</Text>
    </>
  )
};


export default ChildrenExample;