# ⚡ PCF Control: Botón de Alerta de Información de Usuario (`testBtn2`)

Este es un componente básico construido con Power Apps Component Framework (PCF) para incrustar un botón interactivo en formularios y cuadros de mandos de Power Apps (Model-Driven Apps). Su función principal es mostrar una alerta modal con información clave del usuario actual.

## 🌟 Funcionalidad del Componente

El control `testBtn2` añade un botón personalizado con el estilo de Microsoft/Dynamics. Al hacer clic, el control invoca una función nativa de la API de Power Apps para:

1.  Obtener los detalles del usuario actual a través del `context.userSettings`.
2.  Desplegar un **Diálogo de Alerta (Alert Dialog)** en la aplicación anfitriona.
3.  Mostrar el **Nombre de Usuario** y el **ID de Usuario** dentro del diálogo.

### Caso de Uso Principal

Este componente es ideal como plantilla de inicio para PCF, demostrando cómo:
* Integrar un elemento UI simple (`<button>`) en el *host* de Power Apps.
* Acceder a utilidades del entorno (como `context.navigation.openAlertDialog`).
* Acceder a la información de la sesión (`context.userSettings`).

## 🛠️ Tecnologías y Estructura

* **Framework:** Power Apps Component Framework (PCF)
* **Lenguaje:** TypeScript (`index.ts`)
* **Estilos:** CSS3 (`Style.css`)
* **Target:** Aplicaciones basadas en modelos (Model-Driven Apps) y Power Apps en general.

### Archivos Clave

| Archivo | Descripción |
| :--- | :--- |
| `index.ts` | **Lógica principal del componente.** Implementa la interfaz `StandardControl`. Contiene el código para crear el botón, adjuntar el *event listener* y llamar a `context.navigation.openAlertDialog`. |
| `Style.css` | Define el estilo del botón (`.MyButton`), utilizando colores corporativos (`#0078D4`) y efectos hover. |
| `manifest.xml` | El manifiesto del PCF. Define el nombre del control (`testBtn2`), la versión (`0.0.1`), las rutas de los recursos (TS y CSS) y una propiedad de ejemplo requerida (`sampleProperty`). |

## ⚙️ Configuración y Uso

### Propiedades (Manifest)

El control requiere que se le asigne una propiedad en el *Manifest*, aunque el valor no se utiliza directamente en la lógica del botón:

| Nombre | Tipo | Uso | Requerido |
| :--- | :--- | :--- | :--- |
| `sampleProperty` | `SingleLine.Text` | Bound (Enlazada) | Sí |

### Pasos para Implementar en Power Apps

1.  Construir el proyecto PCF (usando `npm run build` y luego `pac pcf push`).
2.  Importar la solución que contiene el control en el entorno de Power Apps/Dynamics 365.
3.  Agregar el control `testBtn2` a un campo de un formulario o a una cuadrícula en el *Customizer* de la aplicación.

## 💻 Desarrollo Local (CLI)

Para desarrollar y probar este control, es necesario tener las herramientas de Power Platform (PAC CLI) instaladas.

1.  Instalar las dependencias de Node.js:
    ```bash
    npm install
    ```
2.  Iniciar el servidor de pruebas local (requiere autenticación PAC CLI):
    ```bash
    npm start
    ```
    (Esto abrirá la herramienta de prueba local para Power Apps Component Framework).

---


# pcf-components
Control PCF (PowerApps Component Framework) fue desarrollado en TypeScript y Javascript

📘 Descripción del Componente PCF
Nombre del componente:

Botón de Información de Usuario

Resumen funcional:

Este componente PCF implementa un botón interactivo dentro de un formulario de Dynamics 365 o Model-Driven App.
Al hacer clic sobre el botón, el componente muestra una alerta (alert dialog) con información relevante del usuario actual del sistema (SystemUser) .

Características principales:

Interacción principal:

El componente contiene un botón “Click Me” .

Al presionarlo, se ejecuta una función que:
Obtiene el valor del campo vinculado (propiedad de entrada) al control.
Recupera información del contexto del usuario actual, incluyendo:
Nombre completo del usuario ( context.userSettings.userName)
Identificador único (GUID) ( context.userSettings.userId)

Visualización de resultados:

Muestra los datos obtenidos en una ventana de alerta (alert dialog) en el formato:

User Name: [Nombre del Usuario], 
User ID: [GUID del Usuario]

Diseño y estilo:
El botón cuenta con estilos definidos en un archivo CSS personalizado , que ajusta su color, tamaño, márgenes y otros aspectos visuales para mantener una apariencia consistente con la interfaz de Dynamics.
Estructura general del código:

Archivo ControlManifest.Input.xml:
Defina las propiedades del componente, incluyendo el campo de entrada ( input) que se mostrará en el formulario.

Archivo index.ts(o main.ts):
Contiene la lógica funcional:

<img width="655" height="383" alt="image" src="https://github.com/user-attachments/assets/142e8576-1939-4de2-8eff-1a465cddbbea" />

Manejador del evento onClick.
Llamada al contexto para obtener la información del usuario.
Ejecución del alert()para mostrar los datos.

Archivo style.css:
Defina el estilo visual del botón, incluyendo colores, bordes y espaciado.
<img width="506" height="290" alt="image" src="https://github.com/user-attachments/assets/8f1858db-9dcd-4b92-9877-dba634bf8ab9" />

Ejemplo visual:

📍 En el formulario de una cuenta (“Cuenta”) :
El campo "responsable" muestra el botón “Click Me” .
Al hacer clic, aparece un cuadro de diálogo que muestra:

User Name: jeisson Triana
User ID: {C970A9B5-5107-EE11-8F6D-00224803D65E}

<img width="276" height="285" alt="image" src="https://github.com/user-attachments/assets/37daf303-34a6-425a-bdd8-b92d59246789" />
<img width="267" height="132" alt="image" src="https://github.com/user-attachments/assets/1d9dc126-ea70-4048-900c-8533ec787456" />

Propósito del componente:
Este componente es útil para mostrar información contextual del usuario o para probar la conexión y lectura de datos del contexto de Dynamics en desarrollos PCF. También puede adaptarse para funcionalidades más avanzadas como registro de auditorías o validaciones basadas en el usuario actual.
