import { ModAttachr } from "../../src/ModAttachr";

import { mochaLoader } from "../main";

import { EventNames } from "../../src/EventNames";

import {
    IMod
} from "../../src/IModAttachr";

mochaLoader.it("Creates a mod and fires the contained events", (): void => {
    // Arrange
    const eventNames: EventNames = new EventNames();
    const dummyMod: IMod[] = [{
        name: "Dummy Mod",
        events: {
            onModDisable: (): string => {
                return "success";
            },
            onModEnable: (): string => {
                return "success";
            }
        },
        enabled: false
    }];
    const modAttachr: ModAttachr = new ModAttachr({
        mods: dummyMod,
        storeLocally: true,
        transformModName: undefined,
        eventNames: eventNames
    });

    // Assert
    chai.expect(modAttachr.fireModEvent("onModEnable", "Dummy Mod")).to.be.equal("success");
    chai.expect(modAttachr.fireModEvent("onModDisable", "Dummy Mod")).to.be.equal("success");
});
