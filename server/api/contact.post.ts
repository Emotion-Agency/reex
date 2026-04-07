export default defineEventHandler(async event => {
  const body = await readBody(event)
  const ip = getRequestHeader(event, 'x-forwarded-for') || event.node.req.socket.remoteAddress
  const userAgent = getRequestHeader(event, 'user-agent')

  console.log('[contact-form] incoming submission', {
    timestamp: new Date().toISOString(),
    ip,
    userAgent,
    body,
  })

  try {
    const response = await $fetch.raw('https://formspree.io/f/mkowabvp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body,
      ignoreResponseError: true,
    })

    console.log('[contact-form] formspree response', {
      status: response.status,
      ok: response.ok,
      body: response._data,
    })

    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        statusMessage: 'Failed to submit form',
      })
    }

    return { ok: true }
  } catch (err) {
    console.error('[contact-form] submission error', err)
    throw err
  }
})
