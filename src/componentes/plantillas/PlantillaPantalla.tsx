import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { pantalla } from '@/estilos/estilos';

type PlantillaPantallaProps = {
  encabezado?: ReactNode;
  pie?: ReactNode;
  scroll?: boolean;
  conMargen?: boolean;
  children?: ReactNode;
  colorFondo?: string;
};

export function PlantillaPantalla({
  encabezado,
  pie,
  scroll = true,
  conMargen = true,
  children,
  colorFondo = pantalla.fondo,
}: PlantillaPantallaProps) {
  const estiloContenido = [styles.contenido, conMargen && styles.margen];

  return (
    <SafeAreaView style={[styles.pantalla, { backgroundColor: colorFondo }]}>
      {encabezado}
      {scroll ? (
        <ScrollView contentContainerStyle={estiloContenido} keyboardShouldPersistTaps="handled">
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.llenar, estiloContenido]}>{children}</View>
      )}
      {pie}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1, // ocupa toda la pantalla
    // el color de fondo viene de la prop colorFondo (por defecto estilos.ts -> FONDO GENERAL)
  },
  llenar: {
    flex: 1,
  },
  contenido: {
    flexGrow: 1,
  },
  margen: {
    padding: pantalla.margen, // margen alrededor del contenido
  },
});
