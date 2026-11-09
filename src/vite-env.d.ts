/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CORE_SERVICE_HOST?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
