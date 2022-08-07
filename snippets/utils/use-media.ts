import React from 'react';

/**const isMobile = useMedia('(max-width: 575px)'); */

export function useMedia(query: string, initialState = false) {
  const [state, setState] = React.useState(initialState);
  React.useDebugValue(`\`${query}\` => ${state}`);

  React.useEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(query);
    if (!mql) return;
    function onChange() {
      if (!mounted) {
        return;
      }
      setState(Boolean(mql.matches));
    }

    mql.addEventListener ? mql.addEventListener('change', onChange) : mql.addListener(onChange);
    setState(mql.matches);

    return () => {
      mounted = false;
      mql.removeEventListener ? mql.removeEventListener('change', onChange) : mql.removeListener(onChange);
    };
  }, [query]);

  return state;
}
