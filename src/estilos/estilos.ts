// ==================== FONDO GENERAL DE LA PANTALLA ====================
export const pantalla = {
  fondo: '#111111ff', // gris muy claro
  margen: 16, // espacio entre el borde de la pantalla y el contenido
};

// ==================== ESPACIOS ====================
// Separaciones entre elementos (se usan en <Espacio tamano="..." /> y en los gap)
export const espacios = {
  muyChico: 4,
  chico: 8,
  mediano: 16,
  grande: 24,
  muyGrande: 32,
};

// ==================== TÍTULOS Y TEXTOS ====================
export const textos = {
  colorTitulo: '#1F2937', // gris casi negro
  tamanoTitulo: 24,
  colorSubtitulo: '#1F2937', // gris casi negro
  tamanoSubtitulo: 18,
  colorNormal: '#1F2937', // gris casi negro
  tamanoNormal: 16,
  colorPequeno: '#6B7280', // gris medio
  tamanoPequeno: 12,
  grosorNormal: '400', // letra normal
  grosorMedio: '500', // letra semi negrita
  grosorNegrita: '700', // letra negrita
} as const;

// ==================== ICONOS ====================
export const iconos = {
  tamano: 24, // tamaño normal
  tamanoChico: 18, // tamaño dentro de botones, buscador y filas
  colorPorDefecto: '#1F2937', // gris casi negro
};

// ==================== IMÁGENES ====================
export const imagenes = {
  altoPorDefecto: 150,
  fondoMientrasCarga: '#E5E7EB', // gris claro
};

// ==================== ENCABEZADO ====================
export const encabezado = {
  fondo: '#111111ff', // igual que el fondo de la pantalla
  colorTitulo: '#FFFFFF', // blanco
  tamanoTitulo: 20,
  alto: 56,
  grosorLinea: 1, // 0 = sin línea abajo
  colorLinea: '#222222', // gris oscuro
};

// ==================== CAMPO DE TEXTO ====================
// Campo con título arriba y mensaje de error abajo (formularios)
export const campoTexto = {
  fondo: '#FFFFFF', // blanco
  colorBorde: '#E5E7EB', // gris claro
  colorBordeError: '#DC2626', // rojo
  grosorBorde: 1,
  bordeRedondeado: 12,
  colorTitulo: '#1F2937', // gris casi negro
  colorTexto: '#1F2937', // gris casi negro
  colorPlaceholder: '#6B7280', // gris medio
  colorIcono: '#6B7280', // gris medio
  colorError: '#DC2626', // rojo
  tamanoTexto: 16,
  alto: 48,
};

// ==================== BOTÓN PRINCIPAL ====================
export const botonPrincipal = {
  fondo: '#8580d8ff',
  colorTexto: '#FFFFFF', // blanco
  colorBorde: '#8580d8ff',
  grosorBorde: 0,
  bordeRedondeado: 12,
  alto: 48,
};

// ==================== TARJETA DE PRODUCTO ====================
export const tarjetaProducto = {
  fondo: '#000000ff', // blanco
  colorBorde: '#000000ff', // gris claro
  grosorBorde: 0, // 0 = sin borde; pon 1 para ver el borde
  bordeRedondeado: 12,
  colorSombra: '#000000', // negro
  opacidadSombra: 0.08, // 0 = sin sombra, 1 = sombra fuerte
  radioSombra: 6, // qué tan difuminada es la sombra
  desplazamientoSombra: 2, // cuánto baja la sombra
  elevacion: 2, // sombra en Android
  altoImagen: 150,
  colorTitulo: '#ffffffff', // gris casi negro
  tamanoTitulo: 16,
  colorDescripcion: '#ffffffff', // gris medio
  tamanoDescripcion: 12,
};

