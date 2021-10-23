let last = 0
window.addEventListener('scroll', () => {
  // console.log(window.pageYOffset)
  // console.log(document.documentElement.scrollTop)
  const cur = window.pageYOffset;
  const t = cur < last
  console.log(t)
  if ( cur < last) { console.log('up')}
  last = cur
})