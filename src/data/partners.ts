export interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

export const partners: Partner[] = [
  {
    id: 'university-of-colombo',
    name: 'University of Colombo',
    logo: '/images/partners/colombo-university.png',
    website: 'https://www.cmb.ac.lk'
  },
  {
    id: 'university-of-peradeniya',
    name: 'University of Peradeniya',
    logo: '/images/partners/peradeniya-university.png',
    website: 'https://www.pdn.ac.lk'
  },
  {
    id: 'university-of-kelaniya',
    name: 'University of Kelaniya',
    logo: '/images/partners/kelaniya-university.png',
    website: 'https://www.kln.ac.lk'
  },
  {
    id: 'university-of-moratuwa',
    name: 'University of Moratuwa',
    logo: '/images/partners/moratuwa-university.png',
    website: 'https://www.mrt.ac.lk'
  },
  {
    id: 'university-of-jaffna',
    name: 'University of Jaffna',
    logo: '/images/partners/jaffna-university.png',
    website: 'https://www.jfn.ac.lk'
  },
  {
    id: 'university-of-ruhuna',
    name: 'University of Ruhuna',
    logo: '/images/partners/ruhuna-university.png',
    website: 'https://www.ruh.ac.lk'
  },
  {
    id: 'sri-jayewardenepura',
    name: 'University of Sri Jayewardenepura',
    logo: '/images/partners/sjp-university.png',
    website: 'https://www.sjp.ac.lk'
  },
  {
    id: 'open-university',
    name: 'Open University of Sri Lanka',
    logo: '/images/partners/open-university.png',
    website: 'https://www.ou.ac.lk'
  }
];
