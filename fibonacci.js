

export function fibs(n) {

    const sequence = [0]

    for (let i = 1; i <= n ; i++) {

        if(i <= 2) {
            sequence.push(1)
        } else {
            let result = sequence[i - 1] + sequence[i - 2];
            sequence.push(result)
        }


    }

    return sequence

}

export function fibsRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const prev = fibsRec(n - 1);
  const next = prev[prev.length - 1] + prev[prev.length - 2];

  return [...prev, next];
}

