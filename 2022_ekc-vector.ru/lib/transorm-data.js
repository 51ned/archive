// DONT FORGET RESTRUCTURE 'PRICES' (REMOVE ID'S)

// get all data from contentfull
export async function getData(f) {
  const res = await f()
  const data = res?.data?.pages?.sections
  
  return data
}

// get & transfrom data 4 'article' component
export function getArticleData(articleData) {
  const data = Object.values(articleData)
  const step = 2

  function getTitles() {
    let arr = []
    for (let i = 0; i < data.length; i += step) {
      arr.push(data[i])
    }
    return arr
  }

  function a() {
    let arr = []
    for (let i = 1; i < data.length; i += step) {
      arr.push(data[i])
    }
    return Object.values(arr)
  }

  function b() {
    let arr = []
    for (let item of a()) {
      arr.push(item.json.content)
    }
    return arr
  }

  function c() {
    let lengths = []
    let paragraphs = []
    for (const arr of b()) {
      lengths.push(arr.length)
      for (let obj of arr) {
        obj = (Object.values(obj)[1])[0]
        paragraphs.push(obj.value)
      }
    }
    return [lengths, paragraphs]
  }

  const lengthsOfTextArr = c()[0]
  const paragraphsOfTextArr = c()[1]
  
  function getTexts() {
    let textArr = []
    let textsArr = []
    for (let i = 0; i < lengthsOfTextArr.length; i++) {
      let length = lengthsOfTextArr[i]
      textArr = paragraphsOfTextArr.splice(0, length)
      textsArr.push(textArr)
    }
    return textsArr
  }

  const texts = getTexts()

  function getArticle() {
    let arr = []
    for (let i = 0; i < 5; i++) {
      arr.push([getTitles()[i], texts[i]])
    }
    return arr
  }

  const article = getArticle()
  
  return article
}

// get & transfrom data 4 'prices' component
export function getPricesData(pricesData) {
  const data = Object.values(pricesData)

  const accordionServiceTitle = data[0]
  const accordionPriceTitle = data[1]

  const buttonObj = data[2].items
  const contentObj = data[3].items
  
  function getData(obj) {
    let arr = []
    for (let i = 0; i < obj.length; i++) {
      arr.push(...Object.values(obj[i]))
    }
    return arr
  } 
  
  const buttonData = getData(buttonObj)
  const contentData = getData(contentObj)
  
  function getItems(startFrom, step, iterableArr) {
    let arr = []
    for (let i = startFrom; i < iterableArr.length; i += step) {
      arr.push(iterableArr[i])
    }
    return arr
  }

  const buttonIDs = getItems(0, 3, buttonData)
  const buttonTexts = getItems(1, 3, buttonData)
  const buttonTitles = getItems(2, 3, buttonData)
  
  function extractTexts(iterableArr) {
    let subArr = []
    let texts = []
    let arr = []
    for (let i = 0; i < iterableArr.length; i++) {
      for (let j = 0; j < iterableArr[i].items.length; j++) {
        subArr.push(...Object.values(iterableArr[i].items[j]))
      }
      texts = subArr.splice(0, iterableArr[i].items.length)
      arr.push(texts)
    }
    return arr
  }
  
  function extractTimings(iterableArr) {
    let arr =[]
    for (let i = 0; i < iterableArr.length; i++) {
      arr.push([...Object.values(iterableArr[i])])
    }
    return arr
  }
  
  const contentIDs = getItems(0, 10, contentData)
  const contentQuestionTitles = getItems(1, 10, contentData)
  const contentQuestionsArr = getItems(2, 10, contentData)
  const contentQuestions = extractTexts(contentQuestionsArr)
  const contentMaterialTitles = getItems(3, 10, contentData)
  const contentMaterialsArr = getItems(4, 10, contentData)
  const contentMaterials = extractTexts(contentMaterialsArr)
  const contentTimingTitles = getItems(5, 10, contentData)
  const contentTimingsArr = getItems(6, 10, contentData)
  const contentTimings = extractTimings(contentTimingsArr)
  // const contentResultTitles = getItems(6, 10, contentData)
  const contentDescs = getItems(8, 10, contentData)
  const contentPrices = getItems(9, 10, contentData)

  function getPrices() {
    let arr = []
    for (let i = 0; i < buttonTexts.length; i++) {
      arr.push([
        buttonTexts[i],
        buttonIDs[i],
        buttonTitles[i],
        contentIDs[i],
        contentDescs[i],
        contentQuestionTitles[i],
        contentQuestions[i],
        contentMaterialTitles[i],
        contentMaterials[i],
        contentTimingTitles[i],
        contentTimings[i],
        contentPrices[i]
      ])
    }
    return arr
  }

  const prices = getPrices()
  
  return {accordionServiceTitle, accordionPriceTitle, prices}
}

// get & transform data 4 'pricesFeats' component
export function getPricesFeatsData(props) {
  const data = Object.values(props.data.pricesFeautersCollection)[0]

  function getArrs() {
    return data.map(i => (
      Object.values(i)
    ))
  }

  function transformArrs() {
    let arr = []
    for (let i = 0; i < getArrs().length; i++) {
      let j = getArrs()[i]
      arr.push(j[0], ...Object.values(j[1]))
    }
    return arr
  }

  function extractItems(startFrom) {
    let arr = []
    for (let i = startFrom; i < transformArrs().length; i += 2) {
      arr.push(transformArrs()[i])
    }
    return arr
  }
  const titles = extractItems(0)
  const arrsWithObjs = extractItems(1)

  function getLengths() {
    let arr = []
    for (let arrWithObjs of arrsWithObjs) {
      arr.push(arrWithObjs.length)
    }
    return arr
  }
  const lengths = getLengths()
  const numOfCards = lengths.length

  const getSentences = () => {
    let arr = []
    for (let arrWithObjs of arrsWithObjs) {
      for (let objs of arrWithObjs) {
        arr.push(...Object.values(objs))
      }
    }
    return arr
  }
  const sentences = getSentences()

  function getParagraphs() {
    let subArr = []
    let arr = []
    for (let i = 0; i < lengths.length; i++) {
      let length = lengths[i]
      subArr = sentences.splice(0, length)
      arr.push(subArr)
    }
    return arr
  }
  const paragraphs = getParagraphs()
  
  function getCards() {
    let arr = []
    for (let i = 0; i < numOfCards; i++) {
      arr.push([titles[i], paragraphs[i]])
    }
    return arr
  }
  const cards = getCards()

  return {numOfCards, cards}
}