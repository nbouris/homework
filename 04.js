/**
 * Execute `goSurfing` after `warmUp` has completed.
 *
 * The expected output:
 *
 * > Big waves today
 * > I'm ready
 * > Riding the waves!
 */


 function bigWaves(done) {
   setTimeout(() => {
     done('Big waves today')
   }, 3000)
 }

 function warmUp(done) {
   setTimeout(() => {
     done("I'm ready")
   }, 6000)
 }

function goSurfing(done) {
  setTimeout(() => {
    done('Riding the waves!')
  }, 9000)
}

bigWaves((wavesMessage) => {
  console.log(wavesMessage)
});

warmUp((warmUpMessage) => {
  console.log(warmUpMessage)
});

goSurfing((message1) => {
  console.log(message1)
});
