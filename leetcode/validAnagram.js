const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const map_s = new Map();
  const map_t = new Map();

  for (let i = 0; i < s.length; i++) {
    map_s.set(s[i], !map_s.get(s[i]) ? 1 : map_s.get(s[i]) + 1);
    map_t.set(t[i], !map_t.get(t[i]) ? 1 : map_t.get(t[i]) + 1);
  }

  for (let [key, val] of map_s) {
    if (!map_t.has(key) || map_t.get(key) !== val) {
      return false;
    }
  }

  return true;
};

const s = "racecar";
const t = "carrace";
const result = isAnagram(s, t);

console.log(result);
