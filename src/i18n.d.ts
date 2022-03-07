import 'react-i18next';

import ns from '../public/i18n/en-gb.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      ns: typeof ns,
    }
  }
}