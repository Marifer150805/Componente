import { View, Image, Text } from 'react-native';
import { styles } from '../css/style';
import Botao from '../components/botao';
import InputTexto from '../components/inputTexto';
import { useState } from 'react';


export default function App() {
  const [valida, setValida] = useState();
  const atualizaTexto = (newText) =>{
    console.log(newText);
  }
  return (
    <View style={styles.container}>
      <Image
      style={{width: '80%', height: 80, marginBottom: 30}}
      resizeMode="contain"
      source={require('../../assets/facebook.png')}
      />

      <InputTexto valor={atualizaTexto} label="" dica="Número de celular ou email"/>
      <InputTexto label="" dica="Senha" seguranca={true}/>

      <Botao btn="Entrar" cor='#1577F2' src='home' />

      <View style={styles.const}>
        <View style={styles.line}/>
        <Text style={styles.text}>ou</Text>
        <View style={styles.line}/>
      </View>

      <Botao btn="Criar nova conta" cor='#fff' src='cadastrar' />
    </View>
  );
}

