import { fetcher } from '@/lib/fetcher'

import { queries } from '@/lib/queries'


const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/?access_token=${process.env.CONTENTFUL_ACCESS_ID}`


// specific page's data
export async function fetchSphereOfActivityPageData() {
  return (
    await fetcher(endpoint, queries.SPHERE_OF_ACTIVITY_PAGE_DATA)
  )
}

export async function fetchKindOfActivityPageData() {
  return (
    await fetcher(endpoint, queries.KIND_OF_ACTIVITY_PAGE_DATA)
  )
}

export async function fetchActivityPageData() {
  return (
    await fetcher(endpoint, queries.ACTIVITY_PAGE_DATA)
  )
}

// common page's data
export async function fetchFooterMenuData() {
  return (
    await fetcher(endpoint, queries.FOOTER_MENU_DATA)
  )
}

export async function fetchFooterOfferData() {
  return (
    await fetcher(endpoint, queries.FOOTER_OFFER_DATA)
  )
}

export async function fetchFooterLicenseData() {
  return (
    await fetcher(endpoint, queries.FOOTER_LICENSE_DATA)
  )
}

//
export async function fetchMainNavData() {
  return (
    await fetcher(endpoint, queries.MAIN_NAV)
  )
}

export async function fetchKindOfExpertiseMenu() {
  return (
    await fetcher(endpoint, queries.KIND_OF_EXPERTISE_MENU)
  )
}

export async function fetchServicesArticle() {
  return (
    await fetcher(endpoint, queries.SERVICES_ARTICLE)
  )
}

export async function fetchPricesAccordionData() {
  return (
    await fetcher(endpoint, queries.PRICES_ACCORDION)
  )
}

export async function fetchPricesFeautersData() {
  return (
    await fetcher(endpoint, queries.PRICES_FEAUTERS)
  )
}

export async function fetchBreadcrumbsData() {
  return (
    await fetcher(endpoint, queries.BREADCRUMBS)
  )
}

export async function fetchPageNavData() {
  return (
    await fetcher(endpoint, queries.PAGE_NAV)
  )
}
