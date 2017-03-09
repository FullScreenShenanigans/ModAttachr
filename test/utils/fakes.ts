import { EventNames } from "../../src/EventNames";
import { IModAttachr, IModAttachrSettings } from "../../src/IModAttachr";
import { ModAttachr } from "../../src/ModAttachr";

/**
 * @param settings   Settings for the ModAttachr.
 * @returns An ModAttachr instance.
 */
export function mockModAttachr(settings?: IModAttachrSettings): IModAttachr {
    return new ModAttachr(settings);
}

/**
 * Holds keys for custom mod events.
 */
export class CustomEventNames extends EventNames {
    /*
     * Key for some arbitrary custom event.
     */
    public readonly customEvent: string = "customEvent";
}
