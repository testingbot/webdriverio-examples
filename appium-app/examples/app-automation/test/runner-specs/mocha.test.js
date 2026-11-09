const assert = require('assert')

// On iOS the accessibility id also matches the label next to each field,
// so select the text fields explicitly there.
const field = (name) => driver.isIOS
    ? $(`-ios predicate string:name == '${name}' AND type == 'XCUIElementTypeTextField'`)
    : $(`~${name}`)

describe('calculator', function() {
        it('should calculate a sum', async () => {
            const inputA = await field('inputA')
            await inputA.waitForDisplayed({ timeout: 10000 })
            await inputA.setValue('10') // setValue clears the field first (it starts with "0" on iOS)

            const inputB = await field('inputB')
            await inputB.waitForDisplayed({ timeout: 10000 })
            await inputB.setValue('5')

            const sumElement = await field('sum')
            await sumElement.waitUntil(async () => (await sumElement.getText()) === '15', {
                timeout: 10000,
                timeoutMsg: 'sum did not become 15'
            })
            assert.equal(await sumElement.getText(), '15') // 10 + 5
        })
})
