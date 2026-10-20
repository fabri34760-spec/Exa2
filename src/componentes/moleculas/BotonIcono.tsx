import { espacios, iconos } from '@/estilos/estilos';
import { Pressable, StyleSheet } from 'react-native';

type BotonIconoProps = {
  alPresionar?: () => void;
  color?: string;
  tamano?: number;
};

export function BotonIcono({ alPresionar, color = iconos.colorPorDefecto, tamano = iconos.tamano }: BotonIconoProps) {
  return (
    <Pressable
      onPress={alPresionar}
      hitSlop={espacios.chico}
      style={({ pressed }) => [styles.boton, pressed && styles.presionado]}>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boton: {
    padding: espacios.chico, // espacio alrededor del icono (área para tocar)
    alignItems: 'center',
    justifyContent: 'center',
  },
  presionado: {
    opacity: 0.5, // transparencia al tocar
  },
});
