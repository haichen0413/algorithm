class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkNodeList {
  constructor() {
    // 链表相关的操作
    this.length = 0;
    this.head = null;
  }

  // 增删改查
  // 增加元素
  append(element) {
    let node = new Node(element);
    let cur;
    // 两种情况，1.链表是空的，2.不是空的
    if (this.head === null) {
      this.head = node;
    } else {
      // 遍历链表
      cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.length += 1;
  }

  print() {
    let cur = this.head;
    let ret = [];

    while (cur) {
      ret.push(cur.element);
      cur = cur.next;
    }
    console.log(ret.join("===>"));
    return ret.join("===>");
  }
}

let linkNode = new LinkNodeList();
linkNode.append("哈喽");
linkNode.append("哈喽你仇杀");
linkNode.append("嘿嘿");

linkNode.print();
