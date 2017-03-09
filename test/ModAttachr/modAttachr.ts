import { EventNames } from "../../src/EventNames";
import { IMod } from "../../src/IModAttachr";
import { ModAttachr } from "../../src/ModAttachr";
import { mochaLoader } from "../main";
import { FakeEventNames } from "../utils/fakes";

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
        eventNames
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
        eventNames
    });

    // Assert
    chai.expect(modAttachr.fireModEvent(modAttachr.eventNames.onModDisable, "Dummy Mod")).to.be.equal("success");
});

mochaLoader.it("Testing to ensure an arbitrary fake event is fired properly", (): void => {
    // Arrange
    const eventNames: FakeEventNames = new FakeEventNames();
    const dummyMod: IMod = {
        name: "Dummy Fake Mod",
        events: {
            fakeEvent: (): number => {
                return 42;
            }
        },
        enabled: false
    };
    const modAttachr: ModAttachr = new ModAttachr({
        mods: [dummyMod],
        eventNames
    });

    // Assert
    chai.expect(modAttachr.fireModEvent((modAttachr.eventNames as FakeEventNames).fakeEvent, "Dummy Fake Mod")).to.be.equal(42);
});
