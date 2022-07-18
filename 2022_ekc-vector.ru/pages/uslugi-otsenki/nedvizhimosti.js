import ActivityLayout from '@/layouts/activity-layout'

import { fetchActivityPageData,
  fetchMainNavData,
  fetchPricesFeautersData,
  fetchFooterMenuData,
  fetchFooterOfferData,
  fetchFooterLicenseData,
  fetchPageNavData } from '@/lib/fetch-data'
import { getData } from '@/lib/transorm-data'


export async function getStaticProps() {
  const res = await getData(fetchActivityPageData)
  const specificData = res.find(i => i.head.activitySlug === 'nedvizhimosti')
  
  const pricesFeautersData = await fetchPricesFeautersData()
  const footerMenuData = await fetchFooterMenuData()
  const footerOfferData = await fetchFooterOfferData()
  const footerLicenseData = await fetchFooterLicenseData()
  const mainNavData = await fetchMainNavData()
  const pageNavData = await fetchPageNavData()

  return {
    props: {
      specificData,
      pricesFeautersData,
      footerMenuData,
      footerOfferData,
      footerLicenseData,
      mainNavData,
      pageNavData
    }
  }
}


export default function Page(props) {
  return (
    <ActivityLayout { ...props } />
  )
}
