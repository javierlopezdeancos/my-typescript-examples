export type NodeType<V> = {
  value: V;
  left?: NodeType<V>;
  right?: NodeType<V>;
};
