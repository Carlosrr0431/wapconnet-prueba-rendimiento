import { ServerOptions } from './types/ServerOptions';

export default {
  secretKey: 'THISISMYSECURETOKEN',
  host: 'https://mi-wppconnect.onrender.com',
  port: '10000',
  deviceName: 'WppConnect',
  poweredBy: 'WPPConnect-Server',
  startAllSession: false,
  tokenStoreType: 'file',
  maxListeners: 5, // Menos listeners para menor uso de memoria
  customUserDataDir: '/app/userDataDir/',
webhook: {
  url: null,
  autoDownload: false, // Desactivado para menor consumo
  readMessage: false,
  listenAcks: false,
  onPresenceChanged: false,
  onParticipantsChanged: false,
  onReactionMessage: false,
  onPollResponse: false,
  onRevokedMessage: false,
  onLabelUpdated: false,
  onSelfMessage: false,
  ignore: ['status@broadcast'],
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
    waitTime: 10,
    daysToArchive: 45,
  },
  log: {
    level: 'warn', // Before open a issue, change level to silly and retry a action
    logger: ['console'],
  },
  createOptions: {
    browserArgs: [
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
    ], // Solo los argumentos esenciales para bajo consumo
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
    mongoIsRemote: true,
    mongoURLRemote: '',
    mongodbPort: 27017,
    redisHost: 'localhost',
    redisPort: 6379,
    redisPassword: '',
    redisDb: 0,
    redisPrefix: 'docker',
  },
  aws_s3: {
    region: 'sa-east-1' as any,
    access_key_id: null,
    secret_key: null,
    defaultBucketName: null,
    endpoint: null,
    forcePathStyle: null,
  },
} as unknown as ServerOptions;
