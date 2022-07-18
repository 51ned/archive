import ActivityLayout from '@/layouts/activity-layout'

import { fetchActivityPageData,
  fetchMainNavData,
  fetchPricesFeautersData,
  fetchFooterMenuData,
  fetchFooterOfferData,
  fetchFooterLicenseData,
  fetchPageNavData } from '@/lib/fetch-data'
import { getData } from '@/lib/transorm-data'


export async function getStaticPaths() {
  const specificData = await getData(fetchActivityPageData)
  const paths = specificData.map(i => {
    return {
      params: {
        sphereOfActivitySlug: `${i.head.sphereOfActivityID}`,
        kindOfActivitySlug: `${i.head.kindOfActivityID}`,
        activitySlug: `${i.head.activitySlug}`
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const res = await getData(fetchActivityPageData)
  const specificData = res.find(i => i.head.activitySlug === params.activitySlug)
  
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
