import KindLayout from '@/layouts/kind-layout'

import { fetchKindOfActivityPageData,
  fetchMainNavData,
  fetchFooterMenuData,
  fetchFooterOfferData,
  fetchFooterLicenseData } from '@/lib/fetch-data'
import { getData } from '@/lib/transorm-data'


export async function getStaticPaths() {
  const data = await getData(fetchKindOfActivityPageData)
  const paths = data.map(i => {
    return {
      params: {
        sphereOfActivitySlug:  `${i.head.sphereOfActivityID}`,
        kindOfActivitySlug:  `${i.head.kindOfActivitySlug}`
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const res = await getData(fetchKindOfActivityPageData)
  const specificData = res.find(i => i.head.kindOfActivitySlug === params.kindOfActivitySlug)

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
    <KindLayout {...props} />
  )
}
