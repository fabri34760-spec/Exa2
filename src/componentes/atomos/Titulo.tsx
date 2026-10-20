import { StyleSheet, Text } from 'react-native';

import { textos } from '@/estilos/estilos';

type TituloProps = { texto: string; color?: string };

export function Titulo({ texto, color = '#ffffff22' }: TituloProps) {
  return <Text style={[styles.titulo, { color }]}>{texto}</Text>;
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: textos.tamanoTitulo, // tamaño de letra
    fontWeight: textos.grosorNegrita, // grosor de letra
  },
});
