const tl = gsap.timeline({ defaults: { ease: 'back' } })
tl.from('.illus', {
    opacity: 0,
    duration: 3,
    delay: 1
}).to('#y-1', {
    x: '200px',
    repeat: -1,
    yoyo: true,
    duration: .8
}, '-=5').to('#y-2', {
    x: '150px',
    repeat: -1,
    yoyo: true,
    duration: .5
}, '-=5').to('#y-3', {
    x: '50px',
    repeat: -1,
    yoyo: true,
    duration: .6
}, '-=5').to('#r-1', {
    x: '100px',
    repeat: -1,
    yoyo: true,
    duration: .6
}, '-=5')
const timeline = gsap.timeline({default:{duration:0.5,opacity:0,ease:'Bounce.easeOut'}})
timeline.from('body',{
    opacity:0
 }).from('.self .img',{
     opacity:0,
     y:'50px',
 })