import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { Person } from '../models/person';

type ContactInfoScreenProps = {
  person: Person;
  onChange: (field: keyof Person, value: string) => void;
  onNext: () => void;
};

export const ContactInfoScreen = ({ person, onChange, onNext }: ContactInfoScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacto</Text>
      <FormInput
        label="Correo"
        placeholder="ana@mail.com"
        autoCapitalize="none"
        keyboardType="email-address"
        value={person.email}
        onChangeText={value => onChange('email', value)}
      />
      <FormInput
        label="Teléfono"
        placeholder="555 555 5555"
        keyboardType="phone-pad"
        value={person.phone}
        onChangeText={value => onChange('phone', value)}
      />
      <FormButton label="Next" onPress={onNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
});
