# Undirected path

Write a function, `undirectedPath`, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between `nodeA` and `nodeB`.

```mermaid
flowchart LR
    i((i))-->j((j))
    j((j))-->i((i))
    i((i))-->k((k))
    k((k))-->i((i))
    l((l))-->k((k))
    k((k))-->l((l))
    k((k))-->m((m))
    m((m))-->k((k))
    o((o))-->n((n))
    n((n))-->o((o))
```
