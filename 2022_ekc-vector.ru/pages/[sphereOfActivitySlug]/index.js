import SphereLayout from '@/layouts/sphere-layout'

import { fetchSphereOfActivityPageData,
  fetchMainNavData,
  fetchFooterMenuData,
  fetchFooterOfferData,
  fetchFooterLicenseData } from '@/lib/fetch-data'
import { getData } from '@/lib/transorm-data'


export async function getStaticPaths() {
  const data = await getData(fetchSphereOfActivityPageData)
  const paths = data.map(i => {
    return {
      params: {
        sphereOfActivitySlug: `${i.head.sphereOfActivityID}`
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const res = await getData(fetchSphereOfActivityPageData)
  const specificData = res.find(i => i.head.sphereOfActivityID === params.sphereOfActivitySlug)

  const footerMenuData = await fetchFooterMenuData()
  const footerOfferData = await fetchFooterOfferData()
  const footerLicenseData = await fetchFooterLicenseData()
  const mainNavData = await fetchMainNavData()

  return {
    props: {
      specificData,
      footerMenuData,
      footerOfferData,
      footerLicenseData,
      mainNavData
    }
  }
}


export default function Page(props) {
  return (
    <SphereLayout {...props} />
  )
}
