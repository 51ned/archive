export const queries = {
  // specific page's data
  SPHERE_OF_ACTIVITY_PAGE_DATA: `{
    pages: servicesPageCollection {
      sections: items {
        head: meta {
          sphereOfActivityID: sphereId
          kindOfActivityID: kindId
          kindOfActivitySlug: slug
          sys {
            firstPublishedAt
            publishedAt
          }
          title
          description
          keywords
          ogtype
          ogtitle
          ogdescription
          ogimage
          ogimagesecureUrl
          ogurl
        }
        header {
          title
          phoneLink
          phoneCode: phone
          phoneNumber
        }
        articleDesc {
          mainUrl
          img
          imgAlt
          title
          pseudoTitle
          description
          author
          sys {
            firstPublishedAt
            publishedAt
          }
          logo
          name
          phone
          address
        }
        article {
          text {
            json
          }
        }
        contacts {
          adressTitle
          adressValue
          phoneTitle
          expertPhoneNumber
          commonPhoneNumber
          emailTitle
          emailValue
        }
        breadcrumbs {
          linksCollection(limit: 3) {
            items {
              ... on Link {
                url
                text
                title
                description
              }
            }
          }
        }
      }
    }
  }`,
  KIND_OF_ACTIVITY_PAGE_DATA: `{
    pages: servicesPageKindCollection {
      sections: items {
        head: meta {
          sphereOfActivityID: sphereId
          kindOfActivityID: kindId
          kindOfActivitySlug: slug
          sys {
            firstPublishedAt
            publishedAt
          }
          title
          description
          keywords
          ogtype
          ogtitle
          ogdescription
          ogimage
          ogimagesecureUrl
          ogurl
        }
        header {
          title
          phoneLink
          phoneCode: phone
          phoneNumber
        }
        articleDesc {
          mainUrl
          img
          imgAlt
          title
          pseudoTitle
          description
          author
          sys {
            firstPublishedAt
            publishedAt
          }
          logo
          name
          phone
          address
        }
        article {
          text {
            json
          }
        }
        contacts {
          adressTitle
          adressValue
          phoneTitle
          expertPhoneNumber
          commonPhoneNumber
          emailTitle
          emailValue
        }
        breadcrumbs {
          linksCollection(limit: 3) {
            items {
              ... on Link {
                url
                text
                title
                description
              }
            }
          }
        }
      }
    }
  }`,
  ACTIVITY_PAGE_DATA: `{
    pages: pageCollection(limit: 20) {
      sections: items {
        head: meta {
          sphereOfActivityID: sphereId
          kindOfActivityID: kindId
          activitySlug: slug
          sys {
            firstPublishedAt
            publishedAt
          }
          title
          description
          keywords
          ogtype
          ogtitle
          ogdescription
          ogimage
          ogimagesecureUrl
          ogurl
        }
        header {
          phoneLink
          phoneCode: phone
          phoneNumber
          preTitle1stLine: preTitle
          preTitle2ndLine: preTitle2ndStr
          preTitle3rdLine: preTitle3rdStr
          title
          desc: descriptionCollection(limit: 4) {
            items {
              onDesktopLine
              onDesktop2ndLine
              onDesktop3rdLine
              onMobileLine
            }
          }
          personAlt
          personImg: person
          personHeight
          personWidth
          copyright {
            text
          }
        }
        headerFeats: headersFeautersCollection(limit: 2) {
          items {
            title
            text
            buttonTitle
            contextValue
            content {
              docsCollection {
                items {
                  src
                  alt
                  height
                  width
                }
              }
            }
          }
        }
        articleDesc: articlesDescription {
          sys {
            firstPublishedAt
            publishedAt
          }
          title
          pseudoTitle
          imgAlt
          img
          description
          author
          logoAlt
          logo
          name
          mainUrl
          phone
          address
        }
        articleText: article {
          firstTitle: aboutTitle
          firstText: aboutText {
            json
          }
          secondTitle: questionsTitle
          secondText: questionsText {
            json
          }
          thirdTitle: conclusionTitle
          thirdText: conclusionText {
            json
          }
          fourthTitle: orderTitle
          fourthText: orderText {
            json
          }
          fifthTitle: trialTitle
          fifthText: trialText {
            json
          }
        }
        articleFeats: articlesFeauters {
          sys {
            id
          }
        }
        pricesDescription {
          title
          pseudoTitle
          description
        }
        pricesPreFeats: pricesFeauters {
          sys {
            id
          }
        }
        prices {
          servisesTitle
          pricesTitle
          pricesButton: buttonsCollection(limit: 5) {
            items {
              id
              title
              text
            }
          }
          pricesContent: contentsCollection(limit: 5) {
            items {
              id
              questionsTitle
              questionsCollection(limit: 5) {
                items {
                  question
                }
              }
              materialsTitle
              materialsCollection(limit: 5) {
                items {
                  materials
                }
              }
              timingsTitle
              timings {
                timing
              }
              resultsTitle
              results {
                sys {
                  id
                }
              }
              priceValue
            }
          }
        }
        contacts {
          adressTitle
          adressValue
          phoneTitle
          expertPhoneNumber
          commonPhoneNumber
          emailTitle
          emailValue
        }
        breadcrumbs {
          linksCollection(limit: 3) {
            items {
              ... on Link {
                url
                text
                title
                description
              }
            }
          }
        }
      }
    }
  }`,
  // common page's data
  FOOTER_MENU_DATA: `{
    title: shortText(id: "7uEoF5WqPmomKAAWvlF3sQ") {
      text
    }
    description: shortText(id: "jZUx8KPaxhzxlHE651UE5") {
      text
    }
    list: listWithCaptionCollection {
      items {
        title
        sys {
          id
        }
        link: listCollection {
          items {
            ... on Link {
              sys {
                id
              }
              url
              text
              title
            }
          }
        }
      }
    }
  }`,
  FOOTER_OFFER_DATA: `{
    offer: footerOffer(id: "DZlaO7kRLkMbXscGYo9S8") {
      intro
      link {
        ... on Link {
          url
          title
          text
        }
      }
      outro
    }
  }`,
  FOOTER_LICENSE_DATA: `{
    license: footerLicense(id: "4rt47ZX91vZAjfmYzskcXM") {
      yearsOfWork
      organizationName
      number: license
      streetAddress
      postalCode
      addressLocality
      telephoneType
      telephoneNumber
      emailType
      emailAddress
    }
  }`,
  KIND_OF_EXPERTISE_MENU: `{
    list(id: "1F0GBB4KN60ORyTQIJISG9") {
      link: listCollection {
        items {
          ... on Link {
            sys {
              id
            }
            url
            title
            text
          }
        }
      }
    }
  }`,
  MAIN_NAV: `{
    list(id: "6lrQkVMMH6ihE7aE87aRCI") {
      link: listCollection {
        items {
          ... on Link {
            sys {
              id
            }
            url
            text
            title
            description
          }
        }
      }
    }
  }`,
  SERVICES_ARTICLE: `{
    items: servicesArcticle(id: "5TIPAibh7WDKC7K6U8MgXq") {
      aboutTitle
      aboutTitleMeta
      aboutText {
        json
      }
      aboutTextMeta
      questionsTitle
      questionsTitleMeta
      questionsText {
        json
      }
      questionsTextMeta
      conclusionTitle
      conclusionTitleMeta
      conclusionText {
        json
      }
      conclusionTextMeta
      orderTitle
      orderTitleMeta
      orderText {
        json
      }
      orderTextMeta
      trialTitle
      trialTitleMeta
      trialText {
        json
      }
      trialTextMeta
    }
  }`,
  PRICES_ACCORDION: `{
    pricesAccordion (id: "5hNp5HnVB8RqXlThZufw0x") {
      servisesTitle
      pricesTitle
      buttonsCollection {
        items {
          text
          id
          title
        }
      }
      contentsCollection {
        items {
          id
          descriptionCollection(limit: 10) {
            items {
              description
            }
          }
          questionsTitle
          questionsCollection(limit: 10) {
            items {
              question
            }
          }
          materialsTitle
          materialsCollection(limit: 10) {
            items {
              materials
            }
          }
          timingsTitle
          timings {
            timing
          }
          priceValue
        }
      }
    }
  }`,
  PRICES_FEAUTERS: `{
    pricesFeautersCollection {
      items {
        title
        feautersCollection {
          items {
            ... on PricesFeatureText {
              text
            }
          }
        }
      }
    }
  }`,
  BREADCRUMBS: `{
    breadcrumbs(id: "5eHSlNDXUyITVK8p7270KG") {
      linksCollection {
        items {
          ... on Link {
            text
            url
            title
          }
        }
      }
    }
  }`,
  PAGE_NAV: `{
    pageNav (id: "6CbNdJvcPFBje4NkMldW1a") {
      linksCollection {
        items {
          ... on Link {
            text
            hash: url
            title
          }
        }
      }
    }
  }`
}
