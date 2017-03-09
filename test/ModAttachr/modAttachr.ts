import { EventNames } from "../../src/EventNames";
import { IMod } from "../../src/IModAttachr";
import { ModAttachr } from "../../src/ModAttachr";
import { mochaLoader } from "../main";
import { CustomEventNames } from "../utils/fakes";

mochaLoader.it("Testing to ensure onModEnable is fired properly", (): void => {
    // Arrange
    const eventNames: EventNames = new EventNames();
    const dummyMod: IMod = {
        name: "Dummy Mod",
        events: {
            onModEnable: (): string => {
                return "success";
            }
        },
        enabled: false
    };
    const modAttachr: ModAttachr = new ModAttachr({
        mods: [dummyMod],
        storeLocally: false,
        eventNames: eventNames
    });

    // Assert
    chai.expect(modAttachr.fireModEvent(modAttachr.eventNames.onModEnable, "Dummy Mod")).to.be.equal("success");
});

mochaLoader.it("Testing to ensure onModDisable is fired properly", (): void => {
    // Arrange
    const eventNames: EventNames = new EventNames();
    const dummyMod: IMod = {
        name: "Dummy Mod",
        events: {
            onModDisable: (): string => {
                return "success";
            }
        },
        enabled: false
    };
    const modAttachr: ModAttachr = new ModAttachr({
        mods: [dummyMod],
        storeLocally: false,
        eventNames: eventNames
    });

    // Assert
    chai.expect(modAttachr.fireModEvent(modAttachr.eventNames.onModDisable, "Dummy Mod")).to.be.equal("success");
});

mochaLoader.it("Testing to ensure a custom event is fired properly", (): void => {
    // Arrange
    const eventNames: CustomEventNames = new CustomEventNames();
    const dummyMod: IMod = {
        name: "Dummy Custom Mod",
        events: {
            customEvent: (): number => {
                return 42;
            }
        },
        enabled: false
    };
    const modAttachr: ModAttachr = new ModAttachr({
        mods: [dummyMod],
        storeLocally: false,
        eventNames: eventNames
    });

    // Assert
    chai.expect(modAttachr.fireModEvent((modAttachr.eventNames as CustomEventNames).customEvent, "Dummy Custom Mod")).to.be.equal(42);
});
