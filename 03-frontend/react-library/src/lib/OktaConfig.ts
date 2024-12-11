export const oktaConfig = {
    clientId: '0oag1rbxzs71uNyMd5d7',
    issuer: 'https://dev-50980631.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}