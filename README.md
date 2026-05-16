# Travel Agency Landing Page

---
# Instalación del proyecto

## 1. Clonar el repositorio

```bash
git clone https://github.com/AndreaMedinaRico/travel-agency.git
```

---

## 2. Entrar al directorio del proyecto

```bash
cd travel-agency
```

---

## 3. Instalar dependencias

```bash
npm install
```

---

## 4. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

---

## 5. Abrir en navegador

```txt
http://localhost:5173
```

---

# Librerías utilizadas y motivo de uso

## React
Se utilizó React para construir una interfaz modular y reutilizable mediante componentes, permitiendo una estructura más organizada y escalable.

## Vite
Vite fue utilizado como entorno de desarrollo y bundler debido a:
- rapidez de compilación
- hot reload instantáneo
- configuración sencilla
- excelente integración con React

## Tailwind CSS
Tailwind permitió desarrollar una interfaz moderna y responsive de forma rápida mediante utility classes.  
Se eligió por:
- velocidad de desarrollo
- facilidad para prototipar diseños
- consistencia visual
- diseño responsive integrado

## Swiper.js
Swiper se utilizó para implementar carruseles interactivos en la sección de destinos turísticos.  
Fue elegido por:
- facilidad de integración con React
- soporte responsive
- navegación táctil
- buena experiencia de usuario en dispositivos móviles

---

# Decisiones técnicas y de diseño

## Diseño visual
Se eligió una estética limpia y moderna utilizando colores suaves relacionados con viajes y tranquilidad. Las imágenes son grandes y atractivas acompañadas por una tipografía clara y legible. El espacio amplio permite mejorar la experiencia visual

---

## Arquitectura basada en componentes
El proyecto fue dividido en componentes reutilizables para facilitar:
- mantenimiento
- escalabilidad
- reutilización de código

Ejemplos:
- PackageCard
- DestinationItem
- ReviewCard
- SectionHeader
- Navbar
- Footer
---

# Estructura general del proyecto

```txt
src/
│
├── components/
│   ├── common/
│   └── layout/
│
├── sections/
│
├── data/
│
├── assets/
│
└── App.jsx
```

---



# Mejoras futuras

Si hubiera más tiempo, se implementarían las siguientes mejoras:

## Funcionalidad real de reservas
- formularios
- integración con backend
- envío de solicitudes

## Animaciones avanzadas
- transiciones suaves
- animaciones on-scroll
- microinteracciones

## Dark mode
Agregar soporte para modo oscuro.

## Optimización de imágenes
- lazy loading
- compresión automática
- imágenes optimizadas para rendimiento

## Accesibilidad
Mejorar:
- navegación por teclado
- atributos ARIA
- contraste visual

## SEO
Agregar:
- meta tags
- Open Graph
- optimización para buscadores

---

# Propuesta para una siguiente fase

En una segunda fase del proyecto se podría desarrollar una plataforma completa de viajes incluyendo:

- autenticación de usuarios
- panel administrativo
- sistema de reservas
- pasarela de pagos
- favoritos
- reseñas reales
- integración con APIs de vuelos y hoteles
- chat de soporte
- recomendaciones personalizadas

También podría evolucionar hacia una Progressive Web App (PWA) para mejorar la experiencia móvil.

---