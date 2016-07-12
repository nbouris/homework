/**
 * Execute `arrived` 500ms after executin `commuting`
 *
 * Expected output:
 *
 * > On my way.
 * > I made it!
 */

function commuting() {
  console.log('On my way.')
}

function arrived() {
  console.log('I made it!')
}

setTimeout(arrived, 500)


// Use `arrived` here


commuting()
