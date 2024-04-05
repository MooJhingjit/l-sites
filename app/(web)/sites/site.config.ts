
export type SiteKeys = 'sorasak.com' | 'gps.com' | 'invalid';

type SiteMetaData = {
  title: string;
  description: string;
};

type SitesObject = {
  [key in SiteKeys]: {
    metaData: {
      [key: string]: SiteMetaData;
    };
  };
};

export const sites: SitesObject = {
  'sorasak.com': {
    metaData: {
      home: {
        title: 'Sorarak',
        description: 'Sorarak',
      },
      blog: {
        title: 'Sorarak Blog',
        description: 'Sorarak Blog'
      }
    },
  },
  'gps.com': {
    metaData: {
      home: {
        title: 'GPS',
        description: 'GPS',
      }
    },
  },
  'invalid': {
    metaData: {
      home: {
        title: 'invalid',
        description: 'invalid'
      }
    }
  }
}