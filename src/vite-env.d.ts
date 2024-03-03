/// <reference types='vite/client' />

interface ImportMetaEnv {
    readonly VITE_FIREBASE_API_KEY: string,
    readonly VITE_AUTH_DOMAIN: string,
    readonly VITE_PROJECT_ID: string,
    readonly VITE_STORATE_BUCKET: string,
    readonly VITE_MESSAGING_SENDER_ID: string,
    readonly VITE_APP_ID: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
  }