export type CountryCode = 'PERÚ' | 'COLOMBIA' | 'VENEZUELA' | 'CHILE' | 'ECUADOR' | 'ARGENTINA' | 'URUGUAY' | 'PARAGUAY' | 'BOLIVIA';

export interface CountryCoordinates {
    lat: number;
    lng: number;
}

export const countryInfo: Record<CountryCode, { name: string; nameRegional?: string; emailRegional?: string; description: string; coordinates?: CountryCoordinates }> = {
    'PERÚ': {
        name: 'Perú',
        nameRegional: 'Angella Tipiani',
        emailRegional: 'angella@baihemedical.com',
        description: '',
        coordinates: {
            lat: -9.189967,
            lng: -75.015152
        }
    },
    'COLOMBIA': {
        name: 'Colombia',
        nameRegional: 'Juan Mesa',
        emailRegional: 'juan@baihemedical.com',
        description: '',
        coordinates: {
            lat: 4.570868,
            lng: -74.297333
        }
    },
    'VENEZUELA': {
        name: "Venezuela",
        nameRegional: "Yumaira Rojas",
        emailRegional: "yumaira@baihemedical.com",
        description: "",
        coordinates: {
            lat: 6.42375,
            lng: -66.58973
        }
    },
    'CHILE': {
        name: "Chile",
        nameRegional: "Magdalena Vargas",
        emailRegional: "chile@baihemedical.com",
        description: "",
        coordinates: {
            lat: -35.675147,
            lng: -71.542969
        }
    },
    'ECUADOR': {
        name: "Ecuador",
        nameRegional: "Katerina Mymrykova",
        emailRegional: "katerina@baihemedical.com",
        description: "",
        coordinates: {
            lat: -1.831239,
            lng: -78.183406
        }
    },
    'ARGENTINA': {
        name: "Argentina",
        nameRegional: "Joel Ferreira",
        emailRegional: "joel@baihemedical.com",
        description: "",
        coordinates: {
            lat: -38.416097,
            lng: -63.616672
        }
    },
    'URUGUAY': {
        name: "Uruguay",
        nameRegional: "Joel Ferreira",
        emailRegional: "joel@baihemedical.com",
        description: "",
        coordinates: {
            lat: -32.522779,
            lng: -55.765835
        }
    },
    'PARAGUAY': {
        name: "Paraguay",
        nameRegional: "Joel Ferreira",
        emailRegional: "joel@baihemedical.com",
        description: "",
        coordinates: {
            lat: -23.442503,
            lng: -58.443832
        }
    },
    'BOLIVIA': {
        name: "Bolivia",
        nameRegional: "Joel Ferreira",
        emailRegional: "joel@baihemedical.com",
        description: "",
        coordinates: {
            lat: -16.290154,
            lng: -63.588653
        }
    }
};