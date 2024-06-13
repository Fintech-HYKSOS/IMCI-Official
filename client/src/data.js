//import logo
import Folourgo_Logo from './assets/folourgo/Folourgo_Logo.jpg'
import Folourgo_Main from './assets/folourgo/Image site 6-01.jpg'
import KERLAU_Logo from './assets/Kerlau/Kerlau_Logo.jpeg'
import CinabreLogo from './assets/Cinabre/CinabreLogo.jpg'
import Cinabre_1 from './assets/Cinabre/Cinabre_1.jpeg'
import Folourgo_4 from './assets/folourgo/Folourgo_4.jpeg'
import AgenceSucces_Logo from './assets/AgenceSucces/AgenceSucces_Logo.png'

import Kerlau_1 from './assets/Kerlau/Kerlau_1.jpeg'
import Kerlau_2 from './assets/Kerlau/Kerlau_2.jpg'
import Kerlau_3 from './assets/Kerlau/Kerlau_3.jpeg'
import Kerlau_4 from './assets/Kerlau/Kerlau_4.jpeg'
import Kerlau_5 from './assets/Kerlau/Kerlau_5.jpeg'
import Kerlau_6 from './assets/Kerlau/Kerlau_6.jpeg'
import Kerlau_7 from './assets/Kerlau/Kerlau_7.jpeg'

// import house images small for HouseList
import Icon from "./assets/img/icons/Icon.jpeg"
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';

// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';
import CardSucces from './assets/AgenceSucces/CardAgenceSucces.jpg';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';


// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'Villa Basse',
    name: 'Maison 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: CardSucces,
    imageLg: House1Lg,
    town: 'Bassam',
    address: 'Secteur Francais',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    logoSociety: AgenceSucces_Logo,
    price: '110000',
    
    country: "Côte d'Ivoire",
    colourCountry: 'bg-gradient-to-r from-orange-300 via-gray-200 to-green-600',
    type_society: 'Entreprise',
    society: 'AGENCE SUCCÈS',
    href : '/SocietyProperties/Agence_Succes',

    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  },
  {
    id: 2,
    type: 'Villa Duplex',
    name: 'Maison 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',


    image: Folourgo_Main,
    imageLg: House2Lg,
    town: 'Abidjan',
    address: 'Marcory Zone 4',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',

    logoSociety: Folourgo_Logo,
    country: "Côte d'Ivoire",
    colourCountry: 'bg-gradient-to-r from-orange-300 via-gray-200 to-green-600',
    type_society: 'Entreprise',
    society: 'FOLOURGO CONSTRUCTION',
    href : '/SocietyProperties/Folourgo',

    price: '140000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 3,
    type: 'Appartement',
    name: 'Appartement 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',


    image: Folourgo_Main,
    imageLg: House3Lg,
    town: 'Abidjan',
    address: '2 Glen Creek St. Alexandria',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',

    logoSociety: Folourgo_Logo,
    country: "Côte d'Ivoire",
    colourCountry: 'bg-gradient-to-r from-orange-300 via-gray-200 to-green-600',
    type_society: 'Entreprise',
    society: 'FOLOURGO CONSTRUCTION',
    href : '/SocietyProperties/Folourgo',

    price: '170000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
  },
  {
    id: 4,
    type: 'Villa Duplex',
    name: 'Apartament 18',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',


    image: Folourgo_4,
    imageLg: Folourgo_4,
    town: 'Bassam',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2010',

    logoSociety: Folourgo_Logo,
    country: "Côte d'Ivoire",
    colourCountry: 'bg-gradient-to-r from-orange-300 via-gray-200 to-green-600',
    type_society: 'Entreprise',
    society: 'FOLOURGO CONSTRUCTION',
    href : '/SocietyProperties/Folourgo',

    price: '38000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
  {
    id: 5,
    type: 'Villa',
    name: 'Maison 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: CardSucces,
    imageLg: House5Lg,
    town: 'Abidjan',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2015',
    logoSociety: AgenceSucces_Logo,
    
    country: "Côte d'Ivoire",
    colourCountry: 'bg-gradient-to-r from-orange-300 via-gray-200 to-green-600',
    type_society: 'Entreprise',
    society: 'AGENCE SUCCÈS',
    href : '/SocietyProperties/Agence_Succes',

    price: '210000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 6,
    type: 'Villa',
    name: 'Maison 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Kerlau_1,
    imageLg: House6Lg,
    town: 'Bassam',
    address: '32 Pawnee Street Butte',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2014',
    
    logoSociety: KERLAU_Logo,
    country: "Côte d'Ivoire",
    colourCountry: 'bg-gradient-to-r from-orange-300 via-gray-200 to-green-600',
    type_society: 'Entreprise',
    society: 'SCI KERLAU',
    href : '/SocietyProperties/SCI_Kerlau',

    price: '220000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
  {
    id: 7,
    type: 'Magasin',
    name: 'Apartament 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Kerlau_7,
    imageLg: Apartment1Lg,
    town: 'Basssam',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2012',
    
    logoSociety: KERLAU_Logo,
    country: "Côte d'Ivoire",
    colourCountry: 'bg-gradient-to-r from-orange-300 via-gray-200 to-green-600',
    type_society: 'Entreprise',
    society: 'SCI KERLAU',
    href : '/SocietyProperties/SCI_Kerlau',

    price: '20000',
    agent: {
      image: Agent7,
      name: 'Jawhar Shamil Naser',
      phone: '0123 456 78910',
    },
  },
  {
    id: 8,
    type: 'Magasin',
    name: 'Apartament 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Kerlau_5,
    imageLg: Apartment2Lg,
    town: 'Abidjan',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2011',
    
    logoSociety: KERLAU_Logo,
    country: "Côte d'Ivoire",
    colourCountry: 'bg-gradient-to-r from-orange-300 via-gray-200 to-green-600',
    type_society: 'Entreprise',
    society: 'SCI KERLAU',
    href : '/SocietyProperties/SCI_Kerlau',

    price: '30000',
    agent: {
      image: Agent8,
      name: 'Juana Douglass',
      phone: '0123 456 78910',
    },
  },
  {
    id: 9,
    type: 'Magasin',
    name: 'Apartament 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Kerlau_3,
    imageLg: Apartment3Lg,
    town: 'Abidjan',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2011',
    
    logoSociety: KERLAU_Logo,
    country: "Côte d'Ivoire",
    colourCountry: 'bg-gradient-to-r from-orange-300 via-gray-200 to-green-600',
    type_society: 'Entreprise',
    society: 'SCI KERLAU',
    href : '/SocietyProperties/SCI_Kerlau',

    price: '40000',
    agent: {
      image: Agent9,
      name: 'Jerry Schenck',
      phone: '0123 456 78910',
    },
  },
  {
    id: 10,
    type: 'Villa',
    name: 'Maison 7',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Kerlau_2,
    imageLg: House7Lg,
    town: 'Bassam',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2015',
    
    logoSociety: KERLAU_Logo,
    country: "Côte d'Ivoire",
    colourCountry: 'bg-gradient-to-r from-orange-300 via-gray-200 to-green-600',
    type_society: 'Entreprise',
    society: 'SCI KERLAU',
    href : '/SocietyProperties/SCI_Kerlau',

    price: '117000',
    agent: {
      image: Agent10,
      name: 'Vera Levesque',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    type: 'Villa Duplex',
    name: 'Maison 8',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Kerlau_6,
    imageLg: House8Lg,
    town: 'Bassam',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    
    logoSociety: KERLAU_Logo,
    country: "Côte d'Ivoire",
    colourCountry: 'bg-gradient-to-r from-orange-300 via-gray-200 to-green-600',
    type_society: 'Entreprise',
    society: 'SCI KERLAU',
    href : '/SocietyProperties/SCI_Kerlau',

    price: '145000',
    agent: {
      image: Agent11,
      name: 'Sofia Gomes',
      phone: '0123 456 78910',
    },
  },
  {
    id: 12,
    type: 'Villa Duplex',
    name: 'Maison 9',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Kerlau_4,
    imageLg: House9Lg,
    town: 'Abidjan',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2015',
    
    logoSociety: KERLAU_Logo,
    country: "Côte d'Ivoire",
    colourCountry: 'bg-gradient-to-r from-orange-300 via-gray-200 to-green-600',
    type_society: 'Entreprise',
    society: 'SCI KERLAU',
    href : '/SocietyProperties/SCI_Kerlau',

    price: '139000',
    agent: {
      image: Agent12,
      name: 'Raymond Hood',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    type: 'Villa Basse',
    name: 'Maison 10',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Kerlau_2,
    imageLg: House10Lg,
    town: 'Bassam',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '5',
    bathrooms: '2',
    surface: '5200 sq ft',
    year: '2014',
    
    logoSociety: KERLAU_Logo,
    country: "Côte d'Ivoire",
    colourCountry: 'bg-gradient-to-r from-orange-300 via-gray-200 to-green-600',
    type_society: 'Entreprise',
    society: 'SCI KERLAU',
    href : '/SocietyProperties/SCI_Kerlau',

    price: '180000',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    type: 'Villa Duplex',
    name: 'Apartament 18',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',


    image: Folourgo_4,
    imageLg: Folourgo_4,
    town: 'Bassam',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2010',

    logoSociety: Folourgo_Logo,
    country: "Côte d'Ivoire",
    colourCountry: 'bg-gradient-to-r from-orange-300 via-gray-200 to-green-600',
    type_society: 'Entreprise',
    society: 'FOLOURGO CONSTRUCTION',
    href : '/SocietyProperties/Folourgo',

    price: '38000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
  {
    id: 15,
    type: 'Villa Basse',
    name: 'Maison 12',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',


    image: Folourgo_Main,
    imageLg: House12Lg,
    town: 'Bassam',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 sq ft',
    year: '2013',

    logoSociety: Folourgo_Logo,
    country: "Côte d'Ivoire",
    colourCountry: 'bg-gradient-to-r from-orange-300 via-gray-200 to-green-600',
    type_society: 'Entreprise',
    society: 'FOLOURGO CONSTRUCTION',
    href : '/SocietyProperties/Folourgo',

    price: '221000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
  },
  {
    id: 16,
    type: 'Magasin',
    name: 'Apartament 16',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',


    image: Folourgo_Main,
    imageLg: Apartment4Lg,
    town: 'Bassam',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1300 sq ft',
    year: '2011',

    logoSociety: Folourgo_Logo,
    country: "Côte d'Ivoire",
    colourCountry: 'bg-gradient-to-r from-orange-300 via-gray-200 to-green-600',
    type_society: 'Entreprise',
    society: 'FOLOURGO CONSTRUCTION',
    href : '/SocietyProperties/Folourgo',

    price: '21000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
  },
  {
    id: 17,
    type: 'Villa Duplex',
    name: 'Apartament 18',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',


    image: Folourgo_4,
    imageLg: Folourgo_4,
    town: 'Bassam',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2010',

    logoSociety: Folourgo_Logo,
    country: "Côte d'Ivoire",
    colourCountry: 'bg-gradient-to-r from-orange-300 via-gray-200 to-green-600',
    type_society: 'Entreprise',
    society: 'FOLOURGO CONSTRUCTION',
    href : '/SocietyProperties/Folourgo',

    price: '38000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
  {
    id: 18,
    type: 'Terrain',
    name: 'Apartament 18',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',


    image: Folourgo_Main,
    imageLg: Apartment6Lg,
    town: 'Bassam',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2010',

    logoSociety: Folourgo_Logo,
    country: "Côte d'Ivoire",
    colourCountry: 'bg-gradient-to-r from-orange-300 via-gray-200 to-green-600',
    type_society: 'Entreprise',
    society: 'FOLOURGO CONSTRUCTION',
    href : '/SocietyProperties/Folourgo',

    price: '38000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
  {
    id: 19,
    type: 'Appartement',
    name: 'Maison 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',


    image: Cinabre_1,
    imageLg: House2Lg,
    town: 'Abidjan',
    address: 'Marcory Zone 4',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',

    logoSociety: CinabreLogo,
    country: "Côte d'Ivoire",
    colourCountry: 'bg-gradient-to-r from-orange-300 via-gray-200 to-green-600',
    type_society: 'Entreprise',
    society: 'CINABRE IMMOBILIER',
    href : '/SocietyProperties/Cinabre',

    price: '140000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 20,
    type: 'Villa Duplex',
    name: 'Apartament 18',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',


    image: Folourgo_4,
    imageLg: Folourgo_4,
    town: 'Bassam',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2010',

    logoSociety: Folourgo_Logo,
    country: "Côte d'Ivoire",
    colourCountry: 'bg-gradient-to-r from-orange-300 via-gray-200 to-green-600',
    type_society: 'Entreprise',
    society: 'FOLOURGO CONSTRUCTION',
    href : '/SocietyProperties/Folourgo',

    price: '38000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
];

//Bouton Souscrire a l'offre
//Voir details de l'offre
//Avancer sur le filtre de recherche
//Avancer sur les donnees de folourgo 
//API Ajout fournisseur