import { Pressable, StyleSheet, View } from 'react-native';

import { Imagen, Texto, type FuenteImagen } from '@/componentes/atomos';
import { espacios, tarjetaProducto } from '@/estilos/estilos';

type TarjetaProductoProps = {
  titulo: string;
  descripcion?: string;
  imagen: FuenteImagen;
  alPresionar?: () => void;
  colorFondo?: string;
  colorTexto?: string;
};

export function TarjetaProducto({
  titulo,
  descripcion,
  imagen,
  alPresionar,
  colorFondo = tarjetaProducto.fondo,
  colorTexto = tarjetaProducto.colorTitulo,
}: TarjetaProductoProps) {
  return (
    // Capa de afuera: fondo, borde y sombra
    <Pressable
      onPress={alPresionar}
      style={({ pressed }) => [styles.tarjeta, { backgroundColor: colorFondo }, pressed && styles.presionado]}>
      {/* Capa de adentro: recorta la imagen con las esquinas redondeadas */}
      <View style={styles.recorte}>
        <Imagen imagen={imagen} alto={tarjetaProducto.altoImagen} />
        <View style={styles.cuerpo}>

          <Texto color={colorTexto} tamano={tarjetaProducto.tamanoTitulo} negrita lineas={1}>
            {titulo}
          </Texto>
          {descripcion && (
            <Texto color={tarjetaProducto.colorDescripcion} tamano={tarjetaProducto.tamanoDescripcion} lineas={2}>
              {descripcion}
            </Texto>
          )}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    flex: 1,
    // el color de fondo viene de la prop colorFondo (por defecto estilos.ts -> TARJETA DE PRODUCTO)
    borderRadius: tarjetaProducto.bordeRedondeado, // borde redondeado
    borderWidth: tarjetaProducto.grosorBorde, // grosor del borde
    borderColor: tarjetaProducto.colorBorde, // color del borde
    shadowColor: tarjetaProducto.colorSombra, // color de la sombra (iOS)
    shadowOpacity: tarjetaProducto.opacidadSombra, // intensidad de la sombra (iOS)
    shadowRadius: tarjetaProducto.radioSombra, // difuminado de la sombra (iOS)
    shadowOffset: { width: 0, height: tarjetaProducto.desplazamientoSombra }, // posición de la sombra (iOS)
    elevation: tarjetaProducto.elevacion, // sombra (Android)
  },
  presionado: {
    opacity: 0.8, // transparencia al tocar
  },
  recorte: {
    borderRadius: tarjetaProducto.bordeRedondeado, // mismas esquinas que la tarjeta
    overflow: 'hidden', // recorta la imagen
  },
  cuerpo: {
    padding: espacios.chico, // espacio interno debajo de la imagen
    gap: espacios.muyChico, // espacio entre etiqueta, título y descripción
  },
});
