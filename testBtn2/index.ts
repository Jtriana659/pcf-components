import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class testBtn2 implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    /**
     * Empty constructor.
     */

    private  _inputElement: HTMLInputElement;
    private  _buttonElement: HTMLButtonElement;
    constructor() {
        // Empty
    }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
     */
    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary,
        container: HTMLDivElement
    ): void {
        // Add control initialization code
        const button: HTMLButtonElement = document.createElement("button");
        button.innerText = "Click Me";
        button.className = "MyButton"; // Asegúrate de que esta clase esté definida en tu CSS
        
        button.addEventListener("click", () => {
           const displayvalue = `User Name: ${context.userSettings.userName}, User ID: ${context.userSettings.userId}`;
            const alertString = {confirmButtonLabel: "OK", text: displayvalue, title: "Alert"};
            const aleroptions = { height: 200, width: 450 };
            context.navigation.openAlertDialog(alertString, aleroptions)
            .then(
                function success(result) {
                    console.log("Alert dialog closed");
                    // Opcional: Si no hay más then, no necesitas return, pero no está de más
                    return result; 
                }
            ) // Quité la función de error del .then para usar .catch() que es más limpio
            .catch(function error(e) {
                console.error("Error displaying alert dialog or processing result:", e);
                // Si el error debe ser propagado, podrías hacer throw e;
            });
    });
        container.appendChild(button);

    }


    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     */
    public updateView(context: ComponentFramework.Context<IInputs>): void {
        // Add code to update control view
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
     */
    public getOutputs(): IOutputs {
        return {};
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void {
        // Add code to cleanup control if necessary
    }
}
