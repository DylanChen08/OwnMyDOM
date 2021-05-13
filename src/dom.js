//dom.js

window.dom = {
    create(element) {
        const container = document.createElement('template')
        container.innerHTML = element.trim()
        console.log(container)
        return container.content.firstChild
    },
    after(previousNode, afterNode) {
        previousNode.parentNode.insertBefore(afterNode, previousNode.nextSiblings)
    },
    before(previousNode, afterNode) {
        previousNode.parentNode.insertBefore(afterNode, previousNode)
    },
    append(parent, node) {
        parent.appendChild(node)
    },
    wrap(node, parent) {
        dom.before(node, parent)
        dom.append(parent, node)
    },
    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },
    empty(node) {
        // const {childNodes} = node // 相当于 const childNodes = node.childNodes
        const array = []
        let elementExist = node.firstChild
        while (elementExist) {
            array.push(dom.remove(node.firstChild))
            elementExist = node.firstChild
        }
        return array
    },
    attr(node, name, value) {//重载
        if (arguments.length === 3) {
            return node.setAttribute(name, value)
        } else if (arguments.length === 2) {
            return node.getAttribute(name)
        }
    },
    text(node, string) {
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = string //兼容IE
            } else {
                node.textContent = string //Chorome，EDGE 主流浏览器
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText
            } else { return node.textContent }

        }

    },
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string
        } else if (arguments.length === 1) {
            return node.innerHTML
        }
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                return node.style[name]
            } else if (name instanceof Object) {
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }

    },
    class: {
        add(node, className) { node.classList.add(className) },
        remove(node, className) { node.classList.remove(className) },
        has(node, className) { return node.classList.contains(className) }
    },
    on(node,eventname,fn){
        node.addEventListener(eventname,fn)
    },
    off(node,eventname,fn){
        node.removeEventListener(eventname,fn)
    },
    find(selector,scope){
        return (scope||document).querySelector(selector)
    },
    parent(node){
        return node.parentNode
    },
    children(node){
        return node.children
    },
    siblings(node){
        return Array.from(node.parentNode.children).filter(n=>n!==node)
    }
}