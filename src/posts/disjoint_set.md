---
title: '并查集详解'
date: '2021-01-23'
route: 'union-find'
author: 'hulalala'
---

# 并查集详解

## 基础知识

并查集是一种树型的数据结构。它的特点是由子结点找到父亲结点，用于处理一些不相交集合的合并及查询问题。由此可知，并查集主要有以下三个操作：

- 定义代表（make_set）：建立一个新的集合，并用一个代表来标识每个集合。
- 查询（find_set）：确定元素属于哪一个集合。
- 合并（union）：将两个集合合并成同一个集合。

并查集常常使用有根树来表示，树的每个节点包含一个成员，每棵数代表一个集合。相比于用链表表示，可以通过引入两种启发式策略（按秩合并和路径压缩），得到一个渐进最优的不相交集合数据结构。

## 两种启发式策略

无论是按秩合并还是路径压缩，其主要目的就是使树结构更加平衡，避免树泛化成链表，从而减少查询和合并操作的时间。通过两种启发式策略，我们可以获得一个几乎与操作数呈线性关系的运行时间。

### 按秩合并

按秩合并是在 union 操作中实现的。主要做法是：使具有较少节点的树的根指向具有较多节点的树的根。这里节点的数量可以通过维护一个秩来表示的，秩表示该节点高度的一个上界。在使用按秩合并的 union 操作中，我们可以让具有较小秩的树的根指向具有较大秩的树的根。按秩合并的优化主要是对查询的优化，可以减少查询次数。

### 路径压缩

路径压缩是在 find_set 操作中实现的。主要做法是：将所有节点指向根。路径压缩过程中不改变秩的大小。秩指的不是该节点的高度，而是该节点的高度的一个上界。在路径压缩过程中改变，便失去了代表节点数量的意义。

### 两种启发式策略的简单模拟

![两种启发式策略](../static/images/uf.svg)

## 代码实现

对于没有 GC 的语言，我选择了用数组来实现，减少自我引用造成的麻烦。

```rust
struct Node {
    rank: usize,
    p: usize,
}

struct UnionFindSet {
    value: Vec<Node>,
}

impl UnionFindSet {
    fn makeSet(n: usize) -> Self {
        let mut value = Vec::new();
        for x in 0..n {
            value.push(Node { rank: 0, p: x });
        }
        Self { value }
    }
    fn union(&mut self, x: usize, y: usize) {
        let xRoot = self.findSet(x);
        let yRoot = self.findSet(y);
        if self.value[xRoot].rank > self.value[yRoot].rank {
            self.value[yRoot].p = xRoot;
        } else {
            self.value[xRoot].p = yRoot;
            if self.value[xRoot].rank == self.value[yRoot].rank {
                self.value[yRoot].rank += 1;
            }
        }
    }
    fn findSet(&mut self, x: usize) -> usize {
        if self.value[x].p != x {
            self.value[x].p = self.findSet(self.value[x].p);
        }
        self.value[x].p
    }
}

```

## 应用场景

并查集的主要应用场景是确定无向图的联通分量。

如 [leetcode 547. 省份数量](https://leetcode-cn.com/problems/number-of-provinces/)

> 有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。
>**省份** 是一组直接或间接相连的城市，组内不含其他没有相连的城市。
>给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，而 isConnected[i][j] = 0 表示二者不直接相连。
>返回矩阵中 **省份** 的数量。

本题实际上就是计算连通分量。初始时，每个城市都属于不同的连通分量。遍历矩阵 isConnected，如果两个城市之间有相连关系，则它们属于同一个连通分量，对它们进行合并。遍历矩阵 isConnected 的全部元素之后，计算连通分量的总数，即为省份的总数。

代码如下：

```rust
impl Solution {
    pub fn find_circle_num(is_connected: Vec<Vec<i32>>) -> i32 {
        let n = is_connected.len();
        let mut res = 0;
        let mut uf = UnionFindSet::makeSet(n);
        for x in 0..n{
            for y in x+1..n{
                if(is_connected[x][y]==1){
                    uf.union(x,y);
                }
            }
        }
        for i in 0..uf.value.len(){
            if uf.value[i].p==i{
                res+=1;
            }
        }
        res
    }
}

```

## 算法复杂度分析

TODO
