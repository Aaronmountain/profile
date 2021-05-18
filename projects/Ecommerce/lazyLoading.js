export const option = {
  rootMargin: '700px 0px 700px 0px'
}

function onViewEntry(entries, observer) {
  entries.forEach(entry => {
    // 若沒有進入範圍就 return
    if (!entry.isIntersecting) return
    // 監視目標進入畫面
    const img = entry.target
    const src = img.getAttribute('data-src')
    img.setAttribute('src', src) // 把值塞回 src
    img.removeAttribute('data-src')
    observer.unobserve(img) // 取消監視
  })
}

export default onViewEntry
