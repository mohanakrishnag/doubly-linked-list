const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data, null, null);
        if (this.length == 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this.length++;
        return node;
    }

    head() {
        if (this.length == 0) {
            return null;
        }
        return this._head.data;
    }

    tail() {
        if (this.length == 0) {
            return null;
        }
        return this._tail.data;
    }

    at(index) {
        var position = 0;
        var node = this._head;
        while (position < index) {
            node = node.next;
            position++;
        }
        return node.data;
    }

    insertAt(index, data) {
        if (index > this.length - 1 || index < 0) {
            return null;
        }

        var current = this._head;
        for (var i = 0; i < index; i++) {
            current = current.next;
        }

        var node = new Node(data);
        var previous = current.prev;
        node.prev = previous;
        node.next = current;
        current.prev = node;

        if (previous != null) {
            previous.next = node;
        }

        this.length++;
        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        var node = this._head;
        var position = 1;
        while (position < index) {
            node = node.next;
            position++;
        }
        node.prev.next = node.next;
    }

    reverse() {
        var start = this._head;
        var end = this._tail;

        for (var i = 0; i < Math.floor(this.length / 2); i++) {
            var data = start.data;
            start.data = end.data;
            end.data = data;
            start = start.next;
            end = end.prev;
        }
        return this;
    }

    indexOf(data) {
        var position = 0;
        var node = this._head;
        while (position < this.length) {
            if (node.data === data) {
                return position;
            } else {
                node = node.next;
            }
            position++;
        }
        return -1;
    }
}

module.exports = LinkedList;
