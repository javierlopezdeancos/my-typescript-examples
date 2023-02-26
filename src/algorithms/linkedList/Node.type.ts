export type NodeType<V> = {
  value: V;
  next?: NodeType<V>;
};
