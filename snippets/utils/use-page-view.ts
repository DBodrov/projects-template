import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {auditService} from 'services';

export function usePageView(path?: string) {
  const location = useLocation();
  const pathName = path ?? location.pathname;
  useEffect(() => {
    if (pathName === '/anketa') {
      return;
    } else {
      auditService.pageView(pathName, {toBE: true});
    }
  }, [pathName]);
}

export const userEvents = auditService.userEvent;
