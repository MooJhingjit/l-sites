
const propertyCardData = [
  {
    title: '3 Bedroom House',
    location: 'Oxford Street, London',
    project: 'Oxford Street',
    priceSale: '฿3,200,000',
    priceRent: '5,000',
    beds: 3,
    baths: 2,
    area: '1,500',
    image: "property-1.webp"
  },
  {
    title: '2 Bedroom Apartment',
    location: 'Kensington, London',
    project: 'Kensington',
    priceSale: '฿1,800,000',
    priceRent: '฿22,500',
    beds: 2,
    baths: 2,
    area: '1,200',
    image: "property-2.webp"
  },
  {
    title: '4 Bedroom House',
    project: 'Baker Street',
    location: 'Baker Street, London',
    priceSale: '฿6,500,000',
    priceRent: '฿23,000',
    beds: 4,
    baths: 3,
    area: '2,500',
    image: "property-3.webp"
  },
  {
    title: '3 Bedroom House',
    location: 'Oxford Street, London',
    priceSale: '฿1,200,000',
    priceRent: '฿8,500',
    project: 'Oxford Street',
    beds: 3,
    baths: 2,
    area: '1,500',
    image: "property-1.webp"
  },
  
]

const projectCardData = [
  {
    title: 'Andara Resort & Villas',
    location: 'Kamala, Phuket',
    startingPrice: '฿12,500,000',
    company: 'The Andara Group',
    beds: '3-4 Beds',
    baths: '2-3 Baths',
    units: '120 Units',
    image: "project-1.webp"
  },
  {
    title: 'Siamese Sukhumvit 48',
    location: 'Wichit, Mueang, Phuket',
    startingPrice: '฿8,500,000',
    company: 'The Sheraton Group',
    beds: '2-3 Beds',
    baths: '1-2 Baths',
    units: '80 Units',
    image: "project-2.webp"
  },
  {
    title: 'NOON Village Tower Westgate',
    location: 'Chalong, Mueang Phuket',
    startingPrice: '฿5,000,000',
    company: 'The Sheraton Group',
    beds: '2-3 Beds',
    baths: '1-2 Baths',
    units: '80 Units',
    image: "project-3.webp"
  },
  {
    title: 'Andara Resort & Villas',
    location: 'Kamala, Phuket',
    startingPrice: '฿12,500,000',
    company: 'The Andara Group',
    beds: '3-4 Beds',
    baths: '2-3 Baths',
    units: '120 Units',
    image: "project-1.webp"
  },

 
  
]

const loadMessages = async (domain: string, locale: string) => {

  // apply the cache here


  // if not in cache, fetch the data from the server

  const [siteMessages, globalMessages] = await Promise.all([
    import(`../app/sites/${domain}/_components/_messages/${locale}.json`),
    import(`../app/sites/_components/_messages/${locale}.json`),
  ]);
  const messages = { ...siteMessages.default, ...globalMessages.default };
  return messages
}

export default loadMessages 

export { propertyCardData, projectCardData }
