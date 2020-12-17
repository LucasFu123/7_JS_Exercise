const { expect } = require("chai")
const {
    firstChar,
    upperCaseFirstChar,
    restOfName,
    capitalizedName
} = require("../index")

describe("Capitalize Name", () => {
    it("firstChar should be 'j'", () => {
        expect(firstChar).to.equal("j")
    })
    it("upperCaseFirstChar should be 'J'", () => {
        expect(upperCaseFirstChar).to.equal("J")
    })
    it("restOfName shoulbe be 'ake'", () => {
        expect(restOfName).to.equal("ake")
    })
    it("capitalizedName should be 'Jake'", () => {
        expect(capitalizedName).to.equal("Jake")
    })
})