import { useEffect, useState } from "react";

export default function useDebounce(keyword: string, delay: number = 700) {
  const [debounced, setDebounced] = useState(keyword);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(keyword), delay);
    return () => clearTimeout(handler);
  }, [keyword, delay]);

  return debounced;
}
