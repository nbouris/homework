/**
 * Execute `learnJS` first and output the result passed to your callback. Once
 * it is completed, execute `buildAWebsite`, outputting its result also.
 *
 * Expected output:
 *
 * > I signed up for JS1
 * > I know JS!
 * > I am a pro :D
 */

function learnJS(done) {
  setTimeout(() => {
    done('I know JS!')
  }, 2000)
}

function buildAWebsite(done) {
  setTimeout(() => {
    done('I am a pro :D')
  }, 4000)
}

learnJS((message) => {
  console.log(message)
});

buildAWebsite((message2) => {
  console.log(message2)
});

console.log('I signed up for JS1')
