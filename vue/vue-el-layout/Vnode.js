const tree = {
  tag: 'tbody',
  children: {
    tag: 'tr',
    parent: tree,
    children: {
      tag: 'id',
      parent: tree.children
    }
  }
}