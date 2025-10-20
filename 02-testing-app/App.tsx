import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  // Function to handle incrementing the count
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Function to handle decrementing the count
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  // Function to reset the count to zero
  const reset = () => {
    setCount(0);
  };

  // Determine the color of the count based on its value
  const countStyle = {
    fontSize: 100,
    color: count > 0 ? '#10B981' : count < 0 ? '#EF4444' : '#1F2937',
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.card}>
        
        <Text style={styles.title}>Contador</Text>
        <Text style={styles.subtitle}>Presiona los botones para cambiar el valor.</Text>

        {/* Counter Display */}
        <View style={styles.counterContainer}>
            <Text style={countStyle}>
              {count}
            </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonsContainer}>
          {/* Decrement Button */}
          <TouchableOpacity
            onPress={decrement}
            style={[styles.button, styles.decrementButton]}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          
          {/* Increment Button */}
          <TouchableOpacity
            onPress={increment}
            style={[styles.button, styles.incrementButton]}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Reset Button */}
        <View style={styles.resetButtonContainer}>
             <TouchableOpacity
                onPress={reset}
                style={[styles.resetButton, { opacity: count === 0 ? 0.6 : 1 }]}
                disabled={count === 0}
                activeOpacity={0.7}
            >
                <Text style={styles.resetButtonText}>hjj</Text>
            </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.footerText}>Hecho con React!</Text>
    </View>
  );
};

// StyleSheet for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6', // gray-100
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    // Shadow for Android
    elevation: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2937', // gray-800
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280', // gray-500
    marginBottom: 32,
    textAlign: 'center',
  },
  counterContainer: {
    marginBottom: 40,
    minHeight: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    // Shadow for Android
    elevation: 8,
  },
  decrementButton: {
    backgroundColor: '#EF4444', // red-500
  },
  incrementButton: {
    backgroundColor: '#10B981', // green-500
  },
  buttonText: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    lineHeight: 40,
  },
  resetButtonContainer: {
    marginTop: 24,
    width: '100%',
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#6B7280', // gray-500
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  footerText: {
    marginTop: 32,
    color: '#6B7280', // gray-500
    fontSize: 14,
  }
});