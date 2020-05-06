function node(val) {
    this.val = val
    this.up = null
    this.down = null
    this.left = null
    this.right = null
    this.moveDown = function () {
        return this.down
    }
    this.moveUp = function () {
        return this.up
    }
}

var first = new node(9)
var second = new node(7)
var third = new node(100)



first.down = third
third.up = first
first.right = second
second.left = first

// console.log(first)

var runner = first
runner = runner.moveDown()
runner = runner.moveUp()

console.log(runner)