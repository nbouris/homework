/**
 * Execute `goSurfing` after `warmUp` has completed.
 *
 * The expected output:
 *
 * > Big waves today
 * > I'm ready
 * > Riding the waves!
 */
 function goSurfing(done) {
   setTimeout(() => {
     done('Riding the waves!')
   }, Math.random() * 300)
 }

 function warmUp(done) {
   setTimeout(() => {
     done("I'm ready")
   }, Math.random() * 300)
 }

 warmUp((warmUpMessage) => {
   console.log(warmUpMessage)
     goSurfing((surfMessage) => {
       console.log(surfMessage)
     })
 })

 console.log('Big waves today')
