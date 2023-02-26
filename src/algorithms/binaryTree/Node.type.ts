export type NodeType<NODE_VALUE> = {
  value: NODE_VALUE;
  left?: NodeType<NODE_VALUE>;
  right?: NodeType<NODE_VALUE>;
};
