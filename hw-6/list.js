class SimpleLinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SimpleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(value) {
    const newNode = new SimpleLinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    this.length++;
  }

  append(value) {
    const newNode = new SimpleLinkedListNode(value);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  remove(value) {
    if (!this.head) return false;

    if (this.head.value === value) {
      this.head = this.head.next;
      if (!this.head) this.tail = null;
      this.length--;
      return true;
    }

    let current = this.head;
    while (current.next !== null) {
      if (current.next.value === value) {
        current.next = current.next.next;
        if (!current.next) this.tail = current;
        this.length--;
        return true;
      }
      current = current.next;
    }

    return false;
  }

  find(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  size() {
    return this.length;
  }
}
