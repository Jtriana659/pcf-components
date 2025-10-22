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

<img width="655" height="383" alt="image" src="https://github.com/user-attachments/assets/142e8576-1939-4de2-8eff-1a465cddbbea" />

Diseño y estilo:
El botón cuenta con estilos definidos en un archivo CSS personalizado , que ajusta su color, tamaño, márgenes y otros aspectos visuales para mantener una apariencia consistente con la interfaz de Dynamics.
Estructura general del código:

Archivo ControlManifest.Input.xml:
Defina las propiedades del componente, incluyendo el campo de entrada ( input) que se mostrará en el formulario.

Archivo index.ts(o main.ts):
Contiene la lógica funcional:

Manejador del evento onClick.
Llamada al contexto para obtener la información del usuario.
Ejecución del alert()para mostrar los datos.

Archivo style.css:
Defina el estilo visual del botón, incluyendo colores, bordes y espaciado.

Ejemplo visual:

📍 En el formulario de una cuenta (“Cuenta”) :
El campo "responsable" muestra el botón “Click Me” .
Al hacer clic, aparece un cuadro de diálogo que muestra:
<img width="276" height="285" alt="image" src="https://github.com/user-attachments/assets/37daf303-34a6-425a-bdd8-b92d59246789" />
<img width="267" height="132" alt="image" src="https://github.com/user-attachments/assets/1d9dc126-ea70-4048-900c-8533ec787456" />

User Name: jeisson Triana
User ID: {C970A9B5-5107-EE11-8F6D-00224803D65E}

Propósito del componente:
Este componente es útil para mostrar información contextual del usuario o para probar la conexión y lectura de datos del contexto de Dynamics en desarrollos PCF. También puede adaptarse para funcionalidades más avanzadas como registro de auditorías o validaciones basadas en el usuario actual.
