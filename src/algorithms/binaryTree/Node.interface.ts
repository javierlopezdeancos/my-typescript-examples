export interface NodeInterface<V> {
  value: V;
  left?: NodeInterface<V>;
  right?: NodeInterface<V>;
}
