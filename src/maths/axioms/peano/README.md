## Peano axioms
- Also known as Dedekind-peano axioms or the Peano postulates are axioms for natural numbers presented by the 19th century italian mathematician Guiseppe Peano.
- They are used to define and reason about the properties and operations of natural numbers.
- There are different variations of these axioms which include:

1. `Axiom of zero`:
    - There exists a natural number denoted as 0
2. `Axiom of successor`:
    - For every natural number, n, there exists a unique natural number called its successor S(n)
3. `Axiom of induction`:
   - The principle of maths induction is usually expressed in terms of equality as follows
     - If a property P holds 0, then 0 has that property
     - If P holds for a natural number K, then it holds for its successor, S(K)
4. `Axiom of reflexivity`:
    - A relation is reflexive if every element in the set is related to itself.
      - For every natural number x, x = x
    
5. `Axiom of symmetry`:
    - A relation is symmetric if whenever x is related to y, y is also related to x
      - For all natural numbers x and y, if x = y, then y = x
6. `Axiom of transitivity`
    - For every triplet of elements(x, y, z) in R, if x is related to y and y is related to z then x is related to z.
    - If x = y and y = z, then x = z
7. `Addition Axioms`:
      - For all natural numbers n, n + 0 = n
      - For all natural numbers n and m, n + S(m) = S(n + m)

8. `Multiplication Axioms`:
      - For all natural numbers n, n * 0 = 0
      - For all natural numbers n and m, n * S(m) = (n * m) + n

9. `Division Axioms`:
    - For all natural numbers n, n/1 = n
    - For all natural numbers n and m, if n > = m, then n / S(m) = S (n / m)

10. `Ordering Axioms`:
    - Trichotomy axiom: 
      - For any natural numbers n and m, exactly one of the following holds:
        - n < m, n > m, n > m
      - Transitivity Axiom: 
        - If n < m and m < p, then n < p.

11. `Subtraction Axioms`:
    - For all natural numbers n, n - 0 = n
    - For all natural numbers n and m, if n > m, then n - S(m) = S(n - m)
