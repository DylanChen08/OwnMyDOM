//index.js

const div1 = dom.create(`<div>newdiv</div>`)
console.log(div1)
const test2 = dom.after(test, div1)
console.log(`test2 is ${test2}`)

const div3 = dom.create('<div id="parents"></div>')

const nodes = dom.empty(window.empty)
console.log(nodes)

dom.attr(test, 'title', 'hi here')
const title = dom.attr(test, 'title')
console.log(`Title is '${title}' `)

dom.text(test, '你好，xxx999')

dom.style(test, 'border', '1px solid red')

dom.class.add(test, 'red')
dom.class.add(test, 'blue')
dom.class.remove(test, 'blue')
console.log(dom.class.has(test, 'blue'))

const fn = () => {
    console.log('点击了')
}
dom.on(test, 'click', fn)
// dom.off(test,'click',fn)

const testDiv = dom.find('#test')[0]
console.log(`testDiv is ${testDiv}`)
// const test88 = dom.find('.red', testDiv)
// console.log(`test88 is ${test88}`)

console.log(`dom.find('#s2')[0] ${dom.find('#s2')[0]}`)