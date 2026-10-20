import { Pressable, StyleSheet, Text } from 'react-native';

import { botonPrincipal, espacios, textos } from '@/estilos/estilos';

const bloques = {
  principal: botonPrincipal,
};

type BotonProps = {
  texto: string;
  alPresionar?: () => void;
  tipo?: 'principal';
  anchoCompleto?: boolean;
  desactivado?: boolean;
  colorFondo?: string;
  colorTexto?: string;
  colorBorde?: string;
};

export function Boton({
  texto,
  alPresionar,
  tipo = 'principal',
  anchoCompleto = false,
  desactivado = false,
  colorFondo,
  colorTexto,
  colorBorde,
}: BotonProps) {
  const bloque = bloques[tipo];
  // Si no se pasa un color propio, se usa el del bloque de estilos.ts
  const fondo = colorFondo ?? bloque.fondo;
  const textoColor = colorTexto ?? bloque.colorTexto;
  const borde = colorBorde ?? bloque.colorBorde;

  return (
    <Pressable
      onPress={alPresionar}
      disabled={desactivado}
      style={({ pressed }) => [
        styles.boton,
        {
          backgroundColor: fondo, // color de fondo
          borderColor: borde, // color del borde
          borderWidth: bloque.grosorBorde, // grosor del borde
          borderRadius: bloque.bordeRedondeado, // borde redondeado
          height: bloque.alto, // alto
        },
        anchoCompleto && styles.anchoCompleto,
        (pressed || desactivado) && styles.presionado,
      ]}>
      <Text style={[styles.texto, { color: textoColor }]}>{texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boton: {
    paddingHorizontal: espacios.grande,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    gap: espacios.chico,
  },
  texto: {
    fontSize: textos.tamanoNormal, // tamaño de letra
    fontWeight: textos.grosorMedio, // grosor de letra
  },
  anchoCompleto: {
    alignSelf: 'stretch',
  },
  presionado: {
    opacity: 0.6,
  },
});
