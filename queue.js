function Queue() {
    this.data = [];
}

Queue.prototype.add = function(item) {
    return this.data.unshift(item);
}

Queue.prototype.remove = function() {
    return this.data.pop();
}

Queue.prototype.size = function() {
    return this.data.length;
}

Queue.prototype.first = function() {
    return this.data[0];
}

module.exports = Queue;