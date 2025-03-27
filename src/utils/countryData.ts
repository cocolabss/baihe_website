export type CountryCode = 'PERÚ' | 'COLOMBIA' | 'VENEZUELA' | 'CHILE' | 'ECUADOR' | 'ARGENTINA' | 'URUGUAY' | 'PARAGUAY' | 'BOLIVIA';

export interface CountryCoordinates {
    lat: number;
    lng: number;
}

export const countryInfo: Record<CountryCode, { name: string; description: string; coordinates?: CountryCoordinates }> = {
    'PERÚ': {
        name: 'Perú',
        description: '',
        coordinates: {
            lat: -9.189967,
            lng: -75.015152
        }
    },
    'COLOMBIA': {
        name: 'Colombia',
        description: '',
        coordinates: {
            lat: 4.570868,
            lng: -74.297333
        }
    },
    'VENEZUELA': {
        name: "Venezuela",
        description: "",
        coordinates: {
            lat: 6.42375,
            lng: -66.58973
        }
    },
    'CHILE': {
        name: "Chile",
        description: "",
        coordinates: {
            lat: -35.675147,
            lng: -71.542969
        }
    },
    'ECUADOR': {
        name: "Ecuador",
        description: "",
        coordinates: {
            lat: -1.831239,
            lng: -78.183406
        }
    },
    'ARGENTINA': {
        name: "Argentina",
        description: "",
        coordinates: {
            lat: -38.416097,
            lng: -63.616672
        }
    },
    'URUGUAY': {
        name: "Uruguay",
        description: "",
        coordinates: {
            lat: -32.522779,
            lng: -55.765835
        }
    },
    'PARAGUAY': {
        name: "Paraguay",
        description: "",
        coordinates: {
            lat: -23.442503,
            lng: -58.443832
        }
    },
    'BOLIVIA': {
        name: "Bolivia",
        description: "",
        coordinates: {
            lat: -16.290154,
            lng: -63.588653
        }
    }
};