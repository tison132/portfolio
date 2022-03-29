const scrollbutton = document.querySelector('.scrollbutton')
scrollbutton.addEventListener('click',()=> {
    document.body.scrollTop=0
    document.documentElement.scrollTop=0
})
const timeline = gsap.timeline({default:{duration:0.5,opacity:0,ease:'Bounce.easeOut'}})
 timeline.from('body',{
    opacity:0
 }).from('.navbar',{
     y: "-100%",
 }).from('.logo', {
    opacity: 0
}).from('.navbar .navLinks', {
        opacity: 0,
        stagger: 0.3
 })
   .from('.hero .title', {
        y: '50px',
        opacity: 0
}).from('.hero .text', {
        y: '50px',
        opacity: 0
 }).from('.hero .button', {
        y: '50px',
        opacity: 0
 }).from('.hero .btn', {
    y: '50px',
    opacity: 0
 }).from('.share .title',{
     y:'50px',
     opacity:0
 }).from('.share .icons',{
    y:'50px',
    opacity:0
})

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