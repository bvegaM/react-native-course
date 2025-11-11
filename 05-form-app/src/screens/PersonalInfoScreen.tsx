import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { Person } from '../models/person';

type PersonalInfoScreenProps = {
  person: Person;
  onChange: (field: keyof Person, value: string) => void;
  onNext: () => void;
};

export const PersonalInfoScreen = ({ person, onChange, onNext }: PersonalInfoScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Datos personales</Text>
      <FormInput
        label="Nombre"
        placeholder="Ana"
        value={person.firstName}
        onChangeText={value => onChange('firstName', value)}
      />
      <FormInput
        label="Apellido"
        placeholder="Pérez"
        value={person.lastName}
        onChangeText={value => onChange('lastName', value)}
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
