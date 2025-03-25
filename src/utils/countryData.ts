export type CountryCode = 'PERÚ' | 'COLOMBIA' | 'VENEZUELA' | 'CHILE' | 'ECUADOR' | 'ARGENTINA' | 'URUGUAY' | 'PARAGUAY' | 'BOLIVIA';

export const countryInfo: Record<CountryCode, { name: string; description: string }> = {
    'PERÚ': {
        name: 'Perú',
        description: '',
    },
    'COLOMBIA': {
        name: 'Colombia',
        description: '',
    },
    'VENEZUELA': {
        name: "Venezuela",
        description: ""
    },
    'CHILE': {
        name: "Chile",
        description: ""
    },
    'ECUADOR': {
        name: "Ecuador",
        description: ""
    },
    'ARGENTINA': {
        name: "Argentina",
        description: ""
    },
    'URUGUAY': {
        name: "Uruguay",
        description: ""
    },
    'PARAGUAY': {
        name: "Paraguay",
        description: ""
    },
    'BOLIVIA': {
        name: "Bolivia",
        description: ""
    }
};