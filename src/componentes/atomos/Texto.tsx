
import type { ReactNode } from 'react';
import { Text } from 'react-native';

import { textos } from '@/estilos/estilos';

export type TipoTexto = 'titulo' | 'subtitulo' | 'normal' | 'pequeno';

type TextoProps = {
  children?: ReactNode;
  tipo?: TipoTexto;
  color?: string;
  tamano?: number;
  alinear?: 'left' | 'center' | 'right';
  negrita?: boolean;
  lineas?: number;
};

// Color, tamaño y grosor de cada tipo (se cambian en estilos.ts -> TÍTULOS Y TEXTOS)
const porTipo = {
  titulo: { color: textos.colorTitulo, fontSize: textos.tamanoTitulo, fontWeight: textos.grosorNegrita },
  subtitulo: { color: textos.colorSubtitulo, fontSize: textos.tamanoSubtitulo, fontWeight: textos.grosorMedio },
  normal: { color: textos.colorNormal, fontSize: textos.tamanoNormal, fontWeight: textos.grosorNormal },
  pequeno: { color: textos.colorPequeno, fontSize: textos.tamanoPequeno, fontWeight: textos.grosorNormal },
};

export function Texto({
  children,
  tipo = 'normal',
  color,
  tamano,
  alinear = 'left',
  negrita = false,
  lineas,
}: TextoProps) {
  const base = porTipo[tipo];

  return (
    <Text
      numberOfLines={lineas}
      style={{
        color: color ?? base.color, // color del texto
        fontSize: tamano ?? base.fontSize, // tamaño de letra
        fontWeight: negrita ? textos.grosorNegrita : base.fontWeight, // grosor de letra
        textAlign: alinear, // alineación
      }}>
      {children}
    </Text>
  );
}
