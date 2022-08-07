export const isStaging = process.env.ENV === 'staging';
export const isProduction = process.env.NODE_ENV === 'production' && !isStaging;
