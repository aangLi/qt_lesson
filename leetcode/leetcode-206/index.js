function ListNode(val) {
  this.val = val;
  this.next = null; // 指向下一个节点
}

var reverseList = function(head) {
  if (!head || !head.next) return head; // 空链表 或者 其本身
  let cur = head; // 当前节点
  let pre = null; // 前驱节点
  while(cur) { // 循环的方式
    const next = cur.next; // 获取当前节点的后继节点
    cur.next = pre; // 当前节点的后继节点变为前驱节点
    pre = cur; // 前驱节点变成当前节点
    cur = next; // 当前节点变为后继节点
  }
  return pre;
}

var reverseList1 = function(head) {
  if (head === null || head.next === null) return head; // 头节点
  else {
    let newHead = reverseList1(head.next)
    
    head.next.next = head;
    head.next = null;
    
    return newHead;
  }
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;



console.log(reverseList1(n1))

