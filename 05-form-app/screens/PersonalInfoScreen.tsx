import { StyleSheet, Text, View } from "react-native"
import { FormInput } from "../components/FormInput"
import { Person } from "../models/person"
import { FromButton } from "../components/FromButton";


type PersonalInfoScreenProps = {
    person: Person,
    onChange: (field: keyof Person, value: string) => void,
    onNext: () => void;
}

export const PersonalInfoScreen = ({person, onChange, onNext}: PersonalInfoScreenProps) => {
  return (
    <View style = {styles.container}>
        <Text style = {styles.title}>Datos Personales</Text>
        <FormInput
            label="Nombre"
            placeholder= "Ingresa tu nombre"
            value={person.firstName}
            onChangeText={value => onChange('firstName', value)}
        />
        <FormInput
            label="Apellido"
            placeholder= "Ingresa tu apellido"
            value={person.lastName}
            onChangeText={value => onChange('lastName', value)}
        />
        <FromButton label="Siguiente"  onPress={onNext}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title:{
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16
  }
})
