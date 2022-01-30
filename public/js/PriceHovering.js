const hovering = (event) => {
  for(var i=0; i<=2; i++) {
    document.querySelectorAll('.singlePlan')[i].classList.add('not')
    event.target.closest('.singlePlan').classList.remove('not')
  }
}

const leaveHovering = (event) => {
  for(var i=0; i<=2; i++) {
    document.querySelectorAll('.singlePlan')[i].classList.remove('not')
  }
}

export default {
  hovering,
  leaveHovering
}