import { StyleSheet, View } from 'react-native';

import type { FuenteImagen } from '@/componentes/atomos';
import { TarjetaProducto } from '@/componentes/moleculas';
import { espacios } from '@/estilos/estilos';

export type Producto = {
  id: string;
  titulo: string;
  descripcion?: string;
  imagen: FuenteImagen;
  colorFondo?: string; // (opcional) fondo solo de esta tarjeta
};

type ListaProductosProps = {
  productos: Producto[];
  alPresionarProducto?: (producto: Producto) => void;
  columnas?: number;
};

export function ListaProductos({ productos, alPresionarProducto, columnas = 2 }: ListaProductosProps) {
  // parte el arreglo en filas: [a, b, c] -> [[a, b], [c]]
  const filas: Producto[][] = [];
  for (let i = 0; i < productos.length; i += columnas) {
    filas.push(productos.slice(i, i + columnas));
  }

  return (
    <View style={styles.grilla}>
      {filas.map((fila, numeroFila) => (
        <View key={numeroFila} style={styles.fila}>
          {fila.map((producto) => (
            <TarjetaProducto
              key={producto.id}
              titulo={producto.titulo}
              descripcion={producto.descripcion}
              imagen={producto.imagen}
              colorFondo={producto.colorFondo}
              alPresionar={() => alPresionarProducto?.(producto)}
            />
          ))}
          {/* huecos vacíos para que la última fila no se estire */}
          {Array.from({ length: columnas - fila.length }).map((_, i) => (
            <View key={`hueco-${i}`} style={styles.hueco} />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grilla: {
    gap: espacios.mediano, // espacio vertical entre filas
  },
  fila: {
    flexDirection: 'row', // tarjetas una al lado de la otra
    gap: espacios.mediano, // espacio horizontal entre tarjetas
  },
  hueco: {
    flex: 1, // hueco del mismo ancho que una tarjeta
  },
});
