
import { Boton, Texto, Titulo } from '@/componentes/atomos';
import { ListaProductos } from '@/componentes/organismos';
import { PlantillaPantalla } from '@/componentes/plantillas';
import { productos } from '@/datos/ejemplo';

export default function PantallaInicio() {
  return (
    <PlantillaPantalla>
      {/* ===== BLOQUE: Saludo ===== */}
      {/* QUITAR: para quitar este bloque borra desde aquí hasta "FIN BLOQUE" */}
      {/* TEXTO: cambia "Cryptx" por lo que quieras */}
      {/* COLOR: cambia color="..." (por defecto '#ffffff22') */}
      <Titulo texto="Cryptx" color="#FFFFFF" />
      {/* TEXTO: cambia "Bienvenido de nuevo" por lo que quieras */}
      {/* COLOR: estilos.ts -> TÍTULOS Y TEXTOS (texto pequeño) */}

      {/* ===== BLOQUE: Productos (tarjetas en 2 columnas) ===== */}
      {/* QUITAR: para quitar este bloque borra desde aquí hasta "FIN BLOQUE" */}
      {/* TEXTO: cambia "Productos" por lo que quieras */}
      {/* COLOR: estilos.ts -> TÍTULOS Y TEXTOS (subtítulo) */}
      <Texto tipo="subtitulo">Productos</Texto>
      {/* IMAGEN / TEXTO: las tarjetas salen de "productos" en src/datos/ejemplo.ts */}
      {/* COLOR: estilos.ts -> TARJETA DE PRODUCTO */}
      {/* ACCION: qué pasa al tocar una tarjeta: agrega alPresionarProducto={(producto) => {}} */}
      <ListaProductos productos={productos} />
      {/* ===== FIN BLOQUE ===== */}

      {/* ===== BLOQUE: Botón ===== */}
      {/* QUITAR: para quitar este bloque borra desde aquí hasta "FIN BLOQUE" */}
      {/* TEXTO: cambia "Principal" por lo que quieras */}
      {/* COLOR: estilos.ts -> BOTÓN PRINCIPAL */}
      {/* ACCION: qué pasa al tocar (ahora no hace nada) */}
      <Boton texto="Get startdf" tipo="principal" alPresionar={() => { }} />
      {/* ===== FIN BLOQUE ===== */}
    </PlantillaPantalla>
  );
}
