import { ServerOptions } from './types/ServerOptions';

export default {
  secretKey: 'THISISMYSECURETOKEN',
  host: 'https://servidor-13.onrender.com',
  port: '10000',
  deviceName: 'WppConnect',
  poweredBy: 'WPPConnect-Server',
  startAllSession: false,
  tokenStoreType: 'file',
  maxListeners: 5, // Menos listeners para menos consumo de memoria
  customUserDataDir: '/app/userDataDir/',
webhook: {
  url: null,                   // No hay URL de webhook configurada aún
  autoDownload: false,         // Solo descarga multimedia si es necesario
  readMessage: false,
  listenAcks: false,           // Desactiva confirmaciones para menos eventos
  onPresenceChanged: false,
  onParticipantsChanged: false,
  onReactionMessage: false,
  onPollResponse: false,
  onRevokedMessage: false,
  onLabelUpdated: false,
  onSelfMessage: false,
  ignore: ['status@broadcast']
},
  websocket: {
  autoDownload: false,
  uploadS3: false,
  },
  chatwoot: {
    sendQrCode: false,
    sendStatus: false,
  },
  archive: {
  enable: false,
  waitTime: 30, // Menos procesos de archivo
  daysToArchive: 90, // Archiva menos seguido
  },
  log: {
  level: 'error', // Solo errores para menos logs en memoria
  logger: ['console'],
  },
  createOptions: {
    browserArgs: [
      '--disable-web-security',
      '--no-sandbox',
      '--disable-cache',
      '--disable-application-cache',
      '--disk-cache-size=0',
      '--disable-background-networking',
      '--disable-extensions',
      '--disable-sync',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--mute-audio',
      '--no-first-run',
      '--ignore-certificate-errors',
    ],
    /**
     * Example of configuring the linkPreview generator
     * If you set this to 'null', it will use global servers; however, you have the option to define your own server
     * Clone the repository https://github.com/wppconnect-team/wa-js-api-server and host it on your server with ssl
     *
     * Configure the attribute as follows:
     * linkPreviewApiServers: [ 'https://www.yourserver.com/wa-js-api-server' ]
     */
    linkPreviewApiServers: null,
  },
  mapper: {
    enable: false,
    prefix: 'tagone-',
  },
  db: {
    mongodbDatabase: 'tokens',
    mongodbCollection: '',
    mongodbUser: '',
    mongodbPassword: '',
    mongodbHost: '',
  mongoIsRemote: false, // Solo remoto si es necesario
    mongoURLRemote: '',
    mongodbPort: 27017,
    redisHost: 'localhost',
    redisPort: 6379,
    redisPassword: '',
    redisDb: 0,
    redisPrefix: 'docker',
  },
  aws_s3: {
  region: '',
  access_key_id: '',
  secret_key: '',
  defaultBucketName: '',
  endpoint: '',
  forcePathStyle: false,
  },
} as unknown as ServerOptions;
