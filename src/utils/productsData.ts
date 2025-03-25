import anestesiaImage from '../assets/images/products/anestesia.png';
import purificacionImage from '../assets/images/products/purificacion_sangre.png';
import infusionImage from '../assets/images/products/infusion_intravenosa.png';
import cuidadoImage from '../assets/images/products/cuidado_heridas.png';
import urologiaImage from '../assets/images/products/urologia.png';
import alambreImage from '../assets/images/products/alambre_guia.png';

// Anestesia
import cateterVenosoCentralImage from '../assets/images/products/anestesia/cateterVenosoCentral.png';

export interface ProductItem {
    id: number;
    name: string;
    image: string;
    description?: string;
    specificationsTitle?: string;
    specifications?: string[];
    detailImages?: {
        image: string;
        subtitle?: string;
    }[];
}

export interface ProductCategory {
    id: number;
    title: string;
    image?: string;
    description?: string;
    products?: ProductItem[];
}

export const products: ProductCategory[] = [
    {
        id: 1,
        title: 'Anestesia',
        image: anestesiaImage,
        products: [
            {
                id: 101,
                name: 'Catéter Venoso Central',
                image: cateterVenosoCentralImage,
                description: 'La abrazadera móvil permite el anclaje en el sitio de punción independientemente de la profundidad del catéter, lo que minimiza el trauma y la irritación en el sitio de punción.El marcado de profundidad ayuda a la colocación precisa del catéter venoso central desde la vena subclavia o yugular derecha o izquierda. \n\nLa punta blanda reduce el trauma en el vaso, minimizando la erosión del vaso, el hemotórax y el taponamiento cardíaco.Lumen simple, doble, triple y cuádruple está disponible para su elección.',
                specificationsTitle: 'Material del catéter TPU(Poliuretano de grado médico)',
                specifications: [
                    'Flexibilidad: El catéter venoso central ABLE está hecho de poliuretano superior con excelente elasticidad, el caudal está asegurado en obstrucciones venosas.',
                    'Suave y elasticidad. Después de la inserción en el cuerpo, se volverá suave del 50% a temperatura corporal(37°C). Formándose de acuerdo con la forma del vaso sanguíneo, reduzca el trauma y anti - parpadeo.',
                    'Minimice la irritación de los vasos sanguíneos.',
                    'Interior y exterior del catéter es suave para proteger el vaso sanguíneo, y evitar la trombosis, reducir la resistencia de cateterismo.',
                    'Marcado del catéter para mostrar la longitud de inserción.',
                    'El tubo radiopaco y la punta facilitan la ubicación del catéter cuando se visualizan mediante X-Ray',
                    'El catéter es delgado y suave para minimizar el efecto sobre el flujo sanguíneo.',
                    'Lumen del catéter espaciado regularmente para mantener la sangre desbloqueada fluyendo.',
                    'Radiopaco, facilita la visualización rápida bajo X-Ray.'
                ],
                detailImages: []
            },
            {
                id: 102,
                name: 'Catéter Venoso Central Antimicrobiano',
                image: '',
                description: ''
            },
            {
                id: 103,
                name: 'Tubo Endotraqueal',
                image: '',
                description: ''
            },
            {
                id: 104,
                name: 'Catéter de Drenaje',
                image: '',
                description: ''
            },
            {
                id: 105,
                name: 'Transductor de Presión',
                image: '',
                description: ''
            },
            {
                id: 106,
                name: 'Catéter Arterial',
                image: '',
                description: ''
            },
            {
                id: 107,
                name: 'PICC (Catéter Central de Inserción Periférica)',
                image: '',
                description: ''
            }
        ]
    },
    {
        id: 2,
        title: 'Purificación de sangre',
        image: purificacionImage,
        products: [

        ],
    },
    {
        id: 3,
        title: 'Infusiones intravenosas',
        image: infusionImage,
        description: '',
    },
    {
        id: 4,
        title: 'Cuidado de heridas',
        image: cuidadoImage,
        description: '',
    },
    {
        id: 5,
        title: 'Urologia',
        image: urologiaImage,
        description: '',
    },
    {
        id: 6,
        title: 'Alambre guía y otros accesorios',
        image: alambreImage,
        description: '',
    }
]