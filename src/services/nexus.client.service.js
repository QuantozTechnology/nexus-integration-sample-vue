
import ClientOAuth2 from 'client-oauth2'

const tokenUrl = process.env.NEXUS_IDENTITY_URL + '/connect/token'
const scopes = ['api1']

const NexusClientService = {
  createNewToken (clientId, clientSecret) {
    const client = new ClientOAuth2({
      accessTokenUri: tokenUrl,
      clientId: clientId,
      clientSecret: clientSecret,
      scopes: scopes
    })
    return client.credentials.getToken()
  }
}

export { NexusClientService }
