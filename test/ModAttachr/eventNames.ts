import { ModAttachr } from "../../src/ModAttachr";
import { mochaLoader } from "../main";

mochaLoader.it("Creates an object with the onModEnable and onModDisable keys.", (): void => {
    // Arrange
    const modAttachr: ModAttachr = new ModAttachr();
    const enableString: string = "onModEnable";
    const disableString: string = "onModDisable";

    // Assert
    chai.expect(modAttachr.eventNames.onModEnable).to.be.equal(enableString);
    chai.expect(modAttachr.eventNames.onModDisable).to.be.equal(disableString);
});
