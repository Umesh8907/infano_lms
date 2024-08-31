// src/providers/google.ts
import { OAuthConfig, OAuthUserConfig } from 'next-auth/providers';

export default function GoogleProviderConfigured<P>(options: OAuthUserConfig<P>): OAuthConfig<P> {
  return {
    id: 'google',
    name: 'Google',
    type: 'oauth',
    version: '2.0',
    scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
    params: { grant_type: 'authorization_code' },
    accessTokenUrl: 'https://oauth2.googleapis.com/token',
    requestTokenUrl: 'https://oauth2.googleapis.com/token',
    authorizationUrl: 'https://accounts.google.com/o/oauth2/auth?response_type=code',
    profileUrl: 'https://www.googleapis.com/oauth2/v3/userinfo',
    ...options,
    profile(profile) {
      return {
        id: profile.sub,
        name: profile.name,
        email: profile.email,
        image: profile.picture,
      };
    },
  };
}
