import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native'


type FromButtonProps = TouchableOpacityProps & {
    label: string;
}

export const FromButton = ({label, style, ...props}: FromButtonProps) => {
  return (
    <TouchableOpacity {...props} style={[style, styles.button]}>
        <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button:{
    width: '100%',
    borderRadius: 8,
    paddingVertical: 12,
    backgroundColor: '#2563eb',
    alignItems: 'center',
    marginTop: 24
  },
  text:{
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  }
})
