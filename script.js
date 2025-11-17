document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('clickMe')
  const out = document.getElementById('result')
  let count = 0
  btn.addEventListener('click', ()=>{
    count += 1
    out.textContent = `Button clicked ${count} time${count===1?'':'s'}.`
  })
  console.log('Simple HTML Project ready')
})