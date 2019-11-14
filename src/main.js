const test = dom.find('#test>.red')[0]

dom.style(test,'color','red')

const nodeList = dom.find('.red')
dom.each(nodeList,(n)=>console.log(n))