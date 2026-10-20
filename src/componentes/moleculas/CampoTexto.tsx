import { campoTexto, espacios } from '@/estilos/estilos';
import { StyleSheet, Text, TextInput, View, type KeyboardTypeOptions } from 'react-native';

type CampoTextoProps = {
  titulo?: string;
  valor?: string;
  alCambiar?: (texto: string) => void;
  placeholder?: string;
  ocultarTexto?: boolean;
  teclado?: KeyboardTypeOptions;
  error?: string;
  colorFondo?: string;
  colorBorde?: string;
  colorTexto?: string;
};

export function CampoTexto({
  titulo,
  valor,
  alCambiar,
  placeholder = '',
  ocultarTexto = false,
  teclado = 'default',
  error,
  colorFondo = campoTexto.fondo,
  colorBorde = campoTexto.colorBorde,
  colorTexto = campoTexto.colorTexto,
}: CampoTextoProps) {
  return (
    <View style={styles.contenedor}>
      {titulo && <Text style={styles.titulo}>{titulo}</Text>}
      <View style={[styles.caja, { backgroundColor: colorFondo, borderColor: colorBorde }, !!error && styles.cajaError]}>
        <TextInput
          value={valor}
          onChangeText={alCambiar}
          placeholder={placeholder}
          placeholderTextColor={campoTexto.colorPlaceholder}
          secureTextEntry={ocultarTexto}
          keyboardType={teclado}
          style={[styles.entrada, { color: colorTexto }]}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    gap: espacios.muyChico, // espacio entre título, caja y error
  },
  caja: {
    height: campoTexto.alto, // alto de la caja
    flexDirection: 'row', // icono y texto en fila
    alignItems: 'center',
    gap: espacios.chico, // espacio entre icono y texto
    paddingHorizontal: espacios.mediano, // espacio interno a los lados
    borderWidth: campoTexto.grosorBorde, // grosor del borde
    borderRadius: campoTexto.bordeRedondeado, // borde redondeado
    // el color de fondo y de borde vienen de las props colorFondo y colorBorde
  },
  cajaError: {
    borderColor: campoTexto.colorBordeError, // color del borde cuando hay error
  },
  titulo: {
    color: campoTexto.colorTitulo, // color del título
  },
  entrada: {
    flex: 1, // ocupa todo el ancho de la caja
    fontSize: campoTexto.tamanoTexto, // tamaño de letra
  },
  error: {
    color: campoTexto.colorError, // color del mensaje de error
  },
});
