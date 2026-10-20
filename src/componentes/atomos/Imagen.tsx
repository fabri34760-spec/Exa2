import { Image, StyleSheet, type DimensionValue, type ImageSourcePropType } from 'react-native';

import { imagenes } from '@/estilos/estilos';

export type FuenteImagen = ImageSourcePropType | string;

type ImagenProps = {
  imagen: FuenteImagen;
  ancho?: DimensionValue;
  alto?: DimensionValue;
  bordeRedondeado?: number;
};

export function Imagen({ imagen, ancho = '100%', alto = imagenes.altoPorDefecto, bordeRedondeado = 0 }: ImagenProps) {
  // si es texto (URL), lo convertimos a { uri }
  const fuente = typeof imagen === 'string' ? { uri: imagen } : imagen;

  return (
    <Image
      source={fuente}
      style={[styles.imagen, { width: ancho, height: alto, borderRadius: bordeRedondeado }]}
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  imagen: {
    backgroundColor: imagenes.fondoMientrasCarga, // color de fondo mientras la imagen carga
  },
});
