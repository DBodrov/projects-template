import { useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { isEmptyString } from 'utils/string.utils';

type CampaignParams = {
  campaignName?: string;
  campaignDate?: string;
  campaignMedium?: string;
  campaignContent?: string;
  campaignSource?: string;
  clientSource?: string;
};

const utmMap = {
  utm_campaign: 'campaignName',
  utm_term: 'campaignDate',
  utm_medium: 'campaignMedium',
  utm_content: 'campaignContent',
  utm_source: 'campaignSource',
  camp_source: 'clientSource',
} as const;

const createCampaignParams = (queryString: string): CampaignParams => {
  const campainParams: CampaignParams = {};
  if (queryString) {
    new URLSearchParams(queryString).forEach((value: string, tag: string) => {
      const key = tag && utmMap[tag] ? utmMap[tag] : tag;
      campainParams[key] = value;
    });
  }
  return campainParams;
};

export function useCampaign() {
  const { search } = useLocation();
  const [campaignParams, setParams] = useState<CampaignParams>(null);

  useEffect(() => {
    if (!isEmptyString(search)) {
      localStorage.setItem('query', search);
      const params = createCampaignParams(search);
      setParams(params);
    } else if (isEmptyString(search)) {
      const query = localStorage.getItem('query');
      if (query) {
        const params = createCampaignParams(query);
        setParams(params);
      } else {
        setParams({});
      }
    }
  }, [search]);

  const campaign = useMemo(
    () => ({
      campaignParams,
      CURRENT_CAMPAIGN: 'a1',
      BLACKFRIDAY_CAMPAIGN: 'a2',
      PHOTO_AB_CAMPAIGN: 'quasi_photo_pilot',
      STAFF_CAMPAIGN: 'staff',
      FAP_CAMPAIGN: 'fapromorate',
    }),
    [campaignParams]
  );

  return campaign;
}
