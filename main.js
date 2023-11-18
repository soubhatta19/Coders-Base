const tl = gsap.timeline();

// dicussforum
  tl.from(".main-heading",{
    y:-400,
    opacity:0,
    duration:0.5,
    delay:0.2
  })
  tl.from(".Google, .Geeks, .IEEE, .Microsoft",{
    y:1000,
    duration:0.7,
    stagger:0.5,
    opacity:0
  })
//   placementPreparation
tl.from(".APTITUDE, .CODING, .COMMUNICATION, .TECHNICAL, .HR, .TIPS",{
    y:1000,
    duration:0.7,
    stagger:0.2,
    opacity:0
})
// codingJourney
tl.from(".codechef, .hackerrank, .leetcode, .kaggle, .codewars, .topcoder, .codeforces, .codestudio, .coderbyte, .codingame, .hackerearth, .geekforgeeks",{
    y:1000,
    duration:0.7,
    stagger:0.2,
    opacity:0
})
// contests
tl.from(".Devfolio, .Devpost, .Unstop, .Hackclub, .HackerEarth, .Major",{
    y:1000,
    duration:0.5,
    stagger:0.2,
    opacity:0
})
