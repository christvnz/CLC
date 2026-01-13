// ISR revalidate duration in seconds
// 86400 seconds = 24 hours (significantly reduces Contentful API calls)
// Pages will refresh once per day unless manually revalidated
export const revalidateDuration = 86400;
