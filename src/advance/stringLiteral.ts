// 字符串字面量类型


// 字符串字面量类型用来约束取值只能是某几个字符串中的一个



// 例子
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames): void {
    // do something
}
// handleEvent(document.getElementById('hello'), 'scroll');    // 没问题
// handleEvent(document.getElementById('world'), 'dbClick');    // // 报错，event 不能为 'dbclick'

// 上例中，我们使用 type 定义了一个字符串字面量类型 EventNames, 它只能取三种字符串中的一种
// ！！！注意：类型别名与字符串字面量类型都是使用type进行定义
