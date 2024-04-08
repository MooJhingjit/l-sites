
export type SiteKeys = 'sorasak.com' | 'gps.com' | 'begis-law.com' | 'invalid';

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
  'begis-law.com': {
    metaData: {
      home: {
        title: "BEGI'S LAW OFFICES & CHAMBERS",
        description: "Begi’s Law Offices & Chambers (BLOC) is a law practice that is aimed at personalizing the practice of law in satisfying the needs of the client"
      },
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