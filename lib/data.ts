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