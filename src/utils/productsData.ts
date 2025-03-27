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
                description: 'La probabilidad de infección causada por el catéter venoso central ordinario es del 4,5%, el 80% de la infección es causada por bacterias en la superficie de la piel que ingresan a la sangre a través del sitio de punción del catéter. Las bacterias típicas son el estafilococo antitrombina, enterococo y cándida. El catéter venoso central antimicrobiano es eficaz para inhibir el crecimiento de bacterias, especialmente bacterias grampositivas, bacterias gramnegativas y hongos. La siguiente forma indica la tasa antibacteriana de bacterias típicas.\n\nEl tubo está hecho de poliuretano que se mezcla con circonio que contiene plata fosfato a nivel nanométrico, cuando el catéter se coloca en el cuerpo, Ag+ lo hará ser liberado para inhibir el crecimiento de bacterias.\n\nLa probabilidad de infección causada por el catéter venoso central ordinario es del 4,5%, 80% de la infección es causada por bacterias en la superficie de la piel que entran en la sangre a través del sitio de punción del catéter. Las bacterias típicas son el estafilococo antitrombina enterococos y cándida.'
            },
            {
                id: 103,
                name: 'Tubo Endotraqueal',
                image: '',
                description: '',
                specificationsTitle: 'Características',
                specifications: [
                    'El bisel del extremo del paciente es de ángulo estándar y se funde suavemente sin rebabas.',
                    'El borde del ojo de Murphy es liso y sin ángulo agudo.',
                    'El manguito es suave, largo y ancho. La característica de alto volumen y baja presión puede reducir el trauma a la mucosa.',
                    'La conexión entre el manguito y el tubo principal es lisa y sin un ángulo agudo, las posibilidades de traumatismo en la mucosa se pueden minimizar durante la inserción.',
                    'El tubo está hecho de material termosensible, se volverá suave después de ser insertado en la tráquea sin traumatismo en la tráquea. La dureza y elasticidad del tubo es moderada, por lo tanto, el tubo no es fácil de doblar.'
                ]
            },
            {
                id: 104,
                name: 'Catéter de Drenaje',
                image: '',
                description: 'El material especial de PUR con gran biocompatibilidad evita que el catéter se adhiera y bloquee; el catéter es suave con pequeña irritación y gran resistencia a la cresta. Puede suavizarse en el cuerpo hyuman para que los pacientes puedan sentirse más cómodos.\n\nEl tubo del catéter es radiopaco bajo radiografía y se marca la graduación, por lo que es fácil dominar la profundidad de la colocación del catéter.\n\nLa operación de colocación del catéter es más segura para reducir la posibilidad de infección durante la cirugía mínimamente invasiva con el uso de cables guía. El extremo frontal del alambre guía es naturalmente curvo, por lo que no es fácil lesionar las vísceras de la espláncocele.'
            },
            {
                id: 105,
                name: 'Transductor de Drenaje',
                image: '',
                description: 'El Transductor de presión desechable y sus accesorios consisten en material de polímero de alto grado médico y poseen compatibilidad biológica avanzada, su estructura y configuración únicas garantizan la seguridad y confiabilidad de los productos.',
                specificationsTitle: 'Características',
                specifications: [
                    'Chip sensible, transferencia de datos precisa.',
                    'Combina todo tipo de cables.',
                    'Presión venosa central y otros diversos controles de presión fisiológica.',
                    'Muestreo de sangre.',
                    'Monitoreo de presión neonatos',
                ]
            },
            {
                id: 106,
                name: 'Catéter Arterial',
                image: '',
                description: '',
                specificationsTitle: 'Características',
                specifications: [
                    'El tubo está hecho de poliuretano con buena biocompatibilidad y es conveniente para la colocación del catéter debido a un catéter rígido.',
                    'Técnica Estándar de Seldinger.',
                    'El catéter y el alambre guía están protegidos por la vaina.',
                    'Nitinol o alambre guía de acero inoxidable está disponible.',
                    'La configuración de la aguja introductora recta o en forma de Y está disponible.',
                ]
            },
            {
                id: 107,
                name: 'PICC (Catéter Central de Inserción Periférica)',
                image: '',
                description: '',
                specificationsTitle: 'Características',
                specifications: [
                    'El conector es redondo y liso con válvula PASV.',
                    'El catéter está hecho de silicona premium, que tiene excelente biocompatibilidad.',
                    'Longitud ajustable del catéter.',
                    'Detectable bajo rayos X, la punta final mejora la radiopacidad.',
                    'El estilete del catéter garantiza una colocación más conveniente y suave.',
                    'Variedad de configuración del kit, alambre guía de nitinol y positivo el conector innecesario de presión está disponible para elegir.'
                ]
            }
        ]
    },
    {
        id: 2,
        title: 'Purificación de sangre',
        image: purificacionImage,
        products: [
            {
                id: 108,
                name: 'Catéter de Hemodiálisis',
                image: '',
                description: '',
                specificationsTitle: 'Características',
                specifications: [
                    'Punta suave: la punta cónica facilita la inserción sin el uso de vaina desprendible. Reduce el trauma de los vasos durante la inserción.',
                    'Agujeros laterales: 2,5 cm lejos del orificio final reduce el recirculado y la succión de la pared. Minimiza el riesgo de formación de coágulos.',
                    'Radiopaco: facilita la visualización rápida bajo X-Ray.',
                    'Ala de Sutura Rotativa: Facilita la inspección de la piel, evita la succión de la pared del vaso sanguíneo, minimiza el riesgo de infecciones de salida, no se produjo ninguna torcedura.'
                ]
            },
            {
                id: 109,
                name: 'Catéter de Hemodiálisis a Largo Plazo',
                image: '',
                description: '',
                specificationsTitle: 'Características',
                specifications: [
                    'El catéter está hecho de silicona premium, que tiene excelente biocompatibilidad.',
                    'El manguito de dacrón puede proteger la inmigración de catéter y reducir la posibilidad de CRBI (Catheter Related Bloodstream Infections).',
                    'El material de silicona hace que el catéter sea más flexible, de ahí puede minimizar el trauma en la vena y reducir el incidente de coágulo.'
                ]
            },
            {
                id: 110,
                name: 'Líneas de Sangre',
                image: '',
                description: '',
                specificationsTitle: 'Características',
                specifications: [
                    'Tubo de bomba: con alta elasticidad y PVC de grado médico, la forma del tubo sigue siendo la misma después de un prensado continuo de 10 horas.',
                    'Cámara de goteo: varios tamaños de cámara de goteo disponibles.',
                    'Conector de diálisis: el conector de dializador de diseño extragrande es fácil de operar.',
                    'Abrazadera: la abrazadera está hecha de plástico duro y está diseñada más grande y gruesa para garantizar una parada suficiente.',
                    'Conjunto de infusión: es conveniente instalar y desinstalar, lo que garantiza una infusión de precisión y un cebado seguro.',
                    'Bolsa de drenaje: imprimación cerrada para cumplir con los requisitos de control de calidad, bolsa de drenaje de una sola vía y bolsa de drenaje de doble vía disponible.',
                    'Diseño personalizado: diferentes tamaños de tubo de bomba y cámara de goteo para cumplir con los requisitos del cliente.',
                ]
            },
            {
                id: 111,
                name: 'A.V. Aguja de Fístula y Aguja de Fístula de Seguridad',
                image: '',
                description: '',
                specificationsTitle: 'Características',
                specifications: [
                    'Aguja de fistula: Proceso de pulido fino en la cuchilla para perforar fácil y suavemente. La aguja siliconada reduce el dolor y la coagulación sanguínea. El ojo trasero y las paredes ultra delgadas aseguran un flujo sanguíneo alto. Ala giratoria y ala fija están disponibles.',
                    'Aguja de fístula de seguridad: 1. La aguja se aislará completamente del exterior, lo que puede proteger a los trabajadores médicos y los limpiadores de desechos médicos no se lesionan y evitan las enfermedades transmitidas por la sangre. La estructura simple, la operación fácil, la buena aceptación del mercado, pueden reemplazar los contenedores de objetos punzantes.',
                ]
            },
            {
                id: 112,
                name: 'Hemodializador de Bajo Flujo',
                image: '',
                description: '',
                specificationsTitle: 'Características',
                specifications: [
                    'Alta capacidad de eliminación tóxica.',
                    'Excelente biocompatibilidad.',
                    'Mayor rendimiento de la eliminación de tamaño pequeño y mediano.',
                    'Menor pérdida de albúmina.'
                ]
            },
            {
                id: 113,
                name: 'Cartucho de Hemoperfusión',
                image: '',
                description: ''
            },
            {
                id: 114,
                name: 'Columna de Absorción de Bilirrubina Altamente Específica',
                image: '',
                description: 'La columna de adsorción de bilirrubina de la serie DX está diseñada para el tratamiento de la hepatitis fulminante, insuficiencia hepática postoperatoria, cirrosis biliar primaria, hiperbilirrubinemia y síndrome de ácido biliar. La adsorción de bilirrubina y ácido biliar del plasma y es un enfoque eficaz y seguro para la hemopurificación de los pacientes que tienen hepatopatía como hepatitis fulminante, insuficiencia hepática postoperatoria, cirrosis biliar primaria e hiperbilirrubinemia.'
            }
        ],
    },
    {
        id: 3,
        title: 'Infusiones intravenosas',
        image: infusionImage,
        description: '',
        products: [
            {
                id: 115,
                name: 'Conector Sin Aguja',
                image: '',
                description: 'Un conector sin aguja se conecta al extremo de los catéteres vasculares y permite el acceso al catéter para infusión y aspiración.',
                specificationsTitle: 'Características',
                specifications: [
                    'Material de la carcasa transparente: Policarbonato o Copoliéster.',
                    'Sin metal y compatible con MRI.',
                    'Sin látex.',
                    'ISO 10993 compatible.',
                    'Volumen de cebado: 0.09ml.',
                    'Velocidad de flujo perfecta: 350 ml/min bajo presión de agua de un metro probada por el Equipo Técnico de Baihe.',
                    'Producido bajo GMP: Baihe Medical es un ISO9001, ISO13485 instalación de fabricación registrada.'
                ]
            },
            {
                id: 116,
                name: 'Válvulas de Puerto Y, Válvulas de Extremo de Sitio-Q y Tubo',
                image: '',
                description: '',
                specificationsTitle: 'Características',
                specifications: [
                    'Válvulas Y-Port.',
                    'Material: Policarbonato o Copoliéster.',
                    'Válvulas de Extremo de Tubo.',
                    'Material: Policarbonato o Copoliéster.',
                    'Tamaño: ID 2.0mm, 2.5mm, 2.7mm, 2.8mm, 3.7mm, 4.1mm.'
                ]
            },
            {
                id: 117,
                name: 'Conector Sin Aguja de Presión Positiva',
                image: '',
                description: '',
            },
            {
                id: 118,
                name: 'Conector Neutral Sin Aguja',
                image: '',
                description: 'Tecnología libre de agujas Plus El desplazamiento neutro del líquido diseñado ayuda a reducir las oclusiones relacionadas con el reflujo, el desplazamiento bajo y el reflujo sanguíneo.\n\nCuando se conecta a la punta luer de la jeringa, la válvula abre el parche para el fluido que fluye a través de la válvula, luego a través del mandril principal. Al desconectar la jeringa, el mandril retrocede y sella la trayectoria de la válvula, lo que evita que el líquido fluya hacia atrás',
            },
            {
                id: 119,
                name: 'Tubo de Extensión con Adaptadores de Sitio de Inyección',
                image: '',
                description: 'Este dispositivo está diseñado para satisfacer las necesidades de I.V general. Terapia, Anestesia Cardiovascular, UCI&CCU, Recuperación & Oncología. \nMedicamento seguro para infusión IV que incluye la mayoría de los antineoplásicos de alto riesgo o la aspiración de sangre sin riesgo de hemólisis.',
            },
            {
                id: 120,
                name: 'I.V. Cánula',
                image: '',
                description: 'Para todo tipo de pacientes con infusión venosa periférica y muestras de sangre recogidas. Especialmente para los grupos siguientes: Recién nacidos, bebés, niños pequeños, niños pequeños pubertad hombres, mujeres embarazadas, mujeres lactantes, mujeres pacientes con quimioterapia, pacientes con lípidos o alcohol terapia.',
            },
            {
                id: 121,
                name: 'Tubo de Tapón y Extensión de Tres Vías',
                image: '',
                description: '',
                specificationsTitle: 'Características',
                specifications: [
                    'Alta transparencia para una fácil observación y mayor seguridad.',
                    'La facilidad de uso y las flechas en el grifo giratorio indican la dirección del flujo.',
                    'No produce turbulencias y reduce los riesgos de trombosis.',
                    'Excelente resistencia a la presión y compatibilidad de soluciones.',
                    'CE certificado.',
                    '2000 PCS/cartón.',
                    'Tamaño del cartón: 46x54x72CM.'
                ]
            },
            {
                id: 122,
                name: 'Tapón Giratorio de Tres Vías',
                image: '',
                description: 'Nuestra nueva llave de paso giratoria permite múltiples conexiones flexibles, para orientar la llave de paso de una manera más flexible.',
                specificationsTitle: 'Características',
                specifications: [
                    'Múltiples canales para terapia de infusión múltiple.',
                    '360° rotación en sentido frontal.',
                    'Diseñado para soportar presiones de hasta 3 bares.',
                    'Totalmente giratorio grifo (360°).',
                    'El flujo se apaga cada 90°.',
                    '6% Luer Taper para compatibilidad con cualquier producto internacional.',
                    'Cantidad residual 0.017ml.',
                    'Volumen de cebado: aproximadamente 0,26 ml.',
                    'Canales de flujo continuo.',
                    'Marcas indicadoras de flecha en la parte superior para indicar la dirección del flujo.',
                    'Disponible en versiones resistentes a lípidos/no resistentes a lípidos.',
                    'Desechable, estéril y no pirogénico.',
                    'Embalaje de ampolla sellada.'
                ]
            },
            {
                id: 123,
                name: 'Tubo de Alimentación Nasogástrica',
                image: '',
                description: 'El tubo de alimentación nasogástrico desechable se compone de un tubo largo y un cable guía, el tubo largo comprende la parte de conexión y el tubo con ojos laterales y el cable guía comprende el conector y el cable guía.',
            },
            {
                id: 124,
                name: 'Tapa Protectora Desechable',
                image: '',
                description: 'Nuestra tapa protectora desechable se puede utilizar para conectar el conector de bloqueo interno del cono o el conector sin aguja, desinfectar sus superficies y actuar como una barrera física para evitar la contaminación.',
                specificationsTitle: 'Características',
                specifications: [
                    'Reduzca el riesgo de CRBSI y ahorre los gastos médicos.',
                    'Desinfectar continuamente durante 7 días (70% de isopropanol).',
                    'Operación simple, mejorar la eficiencia de las enfermeras.',
                    'Embalaje individual, cumplir con las especificaciones de operación del hospital.',
                ]
            },
            {
                id: 125,
                name: 'Foley de Silicona',
                image: '',
                description: 'Los catéteres Foley de silicona siguen siendo la opción preferida para el uso permanente a largo plazo. Estos catéteres de foley sin látex tienen una vida más larga y son de naturaleza más rígida, lo que se considera una ventaja. La silicona es típicamente resistente al ataque químico e insensible a los cambios de temperatura. Las características incluyen estabilidad química y térmica, baja tensión superficial e hidrofobicidad. La silicona es uno de los grupos de biomateriales más probados y reconocido por su inherente biocompatibilidad y biodurabilidad.',
                specificationsTitle: 'Características',
                specifications: [
                    'Está hecho de grado médico y material de silicona importado.',
                    'El catéter foley de silicona tiene un lumen interno más grande para un mejor drenaje que el mismo tamaño hecho de látex de PVC.',
                    'No se produce cristal de urato ni irritación durante la intubación, por lo que se puede evitar la infección uretral asociada al catéter.',
                    'El catéter foley de silicona es ampliamente aceptado debido a una mejor biocompatibilidad y el período de permanencia puede ser de 30 días, lo que puede reducir el trauma a la uretra causado por la intubación repetida.',
                ]
            }
        ]
    },
    {
        id: 4,
        title: 'Cuidado de heridas',
        image: cuidadoImage,
        description: '',
        products: [
            {
                id: 126,
                name: 'Vestido de Herida de Alginato',
                image: '',
                description: 'Vestido de Herida de Alginato es un apósito avanzado para heridas fabricado a partir de alginato de sodio extraído de algas marinas naturales. Cuando está en contacto con una herida, el calcio en el apósito se intercambia con el sodio del líquido de la herida, convirtiendo el apósito en un gel. Esto mantiene un ambiente húmedo de curación de heridas que es bueno para la recuperación de heridas exudantes y ayuda con el desbridamiento de heridas desprendidas.\n\nLa propiedad de formación de gel de un apósito de alginato protege contra la invasión bacteriana, una propiedad que hace que el alginato sea un apósito ideal para heridas para una regeneración y curación más rápida de los tejidos en heridas exudadas. La liberación de iones de calcio también puede acelerar el proceso de coagulación de la sangre, lo que ayuda aún más a la curación, lo que lleva a tiempos de tratamiento más cortos.'
            },
            {
                id: 127,
                name: 'Dispositivo de Cierre de Herida',
                image: '',
                description: 'El dispositivo de cierre de heridas consiste en un par de pinzas de polipropileno con dos paneles adhesivos.\nLos paneles adhesivos son tejidos no tejidos porosos recubiertos con un adhesivo hipoalergénico sensible a la presión.\nEs un dispositivo novedoso para el cierre rápido y fácil de la mayoría de las heridas agudas, por ejemplo, heridas laceradas y quirúrgicas.\nEl dispositivo está diseñado para permitir un cierre no invasivo de una herida y para fomentar un cierre apretado de la herida para una curación temprana y exitosa.La técnica no invasiva reduce el trauma tisular y mejora la comodidad del paciente, y posiblemente causa menos cicatrices después de la curación.'
            },
            {
                id: 128,
                name: 'Quitosano',
                image: '',
                description: 'El apósito para heridas de quitosano consiste en fibras de quitosano al 100%. El quitosano es un almidón (polímero) natural derivado de las conchas de los crustáceos. Es un apósito suave y altamente absorbente que gelifica cuando está en contacto con exudados de heridas y proporciona un ambiente húmedo para una curación óptima.\nEl apósito para heridas de quitosano tiene la absorbencia y las características gelificantes similares a la carboximetilcelulosa, pero con beneficios adicionales de ser hemostático y bacteriostático son importantes para el proceso de curación de heridas.'
            },
            {
                id: 129,
                name: 'Carboximetilcelulosa (CMC)',
                image: '',
                description: 'El apósito para heridas CMC es un almohadilla no tejida suave o apósito de cinta hecho de fibras 100% de carboximetilcelulosa (CMC), el apósito fibroso para heridas CMC es una tecnología probada para el apósito absorbente para heridas.\n\nEl apósito para heridas CMC forma un gel transparente cuando está en contacto con una solución acuosa. La gelificación permite el apósito para bloquear la humedad dentro del apósito proporcionar el ambiente húmedo para una curación óptima.'
            }
        ]
    },
    {
        id: 5,
        title: 'Urologia',
        image: urologiaImage,
        description: '',
        products: [
            {
                id: 130,
                name: 'Endoprótesis Ureteral',
                image: '',
                description: 'El stent ureteral desechable se usa para un solo uso durante la pielografía o drenaje retrógrado.\n\nLos stents se usan por varias razones en pacientes con cálculos renales. Se pueden colocar para ayudar a reducir el dolor agudo de una piedra o para permitir el drenaje cuando la infección está presente o cuando una piedra impide que un riñón funcione adecuadamente. Los stents se colocan comúnmente después de la cirugía para obtener piedras para permitir la curación y para garantizar que la hinchazón no bloquee el drenaje de la orina después del procedimiento.',
            },
            {
                id: 131,
                name: 'Bolsa de Drenaje Anti-Reflujo Desechable',
                image: '',
                description: 'Nuestra bolsa de drenaje antirreflujo desechable es adecuado para recolectar orina de pacientes con incontinencia urinaria, coma e incapacidades o para recolectar líquido de drenaje de heridas en cooperación con otros instrumentos.',
                specificationsTitle: 'Características',
                specifications: [
                    'El interruptor de límite puede controlar los líquidos.',
                    'El conector de pagoda en espiral es adecuado para diferentes especificaciones del catéter.',
                    'El conector convertidor se puede conectar a un tubo más delgado.',
                    'El dispositivo antirreflujo especial puede prevenir el reflujo líquido residual y reducir efectivamente el riesgo de infección.',
                    'El cuerpo de la bolsa es transparente, el valor de la escala es claro y fácil de leer; la línea de escala lateral es adecuada para medir menos líquido.',
                    'El tubo es transparente, elástico y no roscado.',
                    'Orificio urinario superior: gran diámetro, entrada rápida de orina. Valor de drenaje inferior tipo T: conveniente para la operación con una sola mano y puede prevenir salpicaduras de orina.',
                    'Con gancho de seguridad o vendaje, se puede fijar efectivamente en la posición adecuada.',
                ]
            }
        ]
    },
    {
        id: 6,
        title: 'Alambre guía y otros accesorios',
        image: alambreImage,
        description: '',
        products: [
            {
                id: 132,
                name: 'Alambre Guía de Nitinol',
                image: '',
                description: '',
                specificationsTitle: 'Características',
                specifications: [
                    'Material de núcleo de aleación de memoria de forma, excelente resistencia, resistencia a la torcedura.',
                    'Fuerza de ruptura de la punta del cable guía ABLE®: ≥40~50N, mientras que ISO 11070:1999.',
                    'Incluye y supera las principales características del alambre guía de acero inoxidable.',
                    'Tamaños: 0.018, 0.021, 0. 025, 0.028, 0.032, 0.035, 0.030.',
                ]
            },
            {
                id: 133,
                name: 'Alambre Guía de Césped Inoxidable',
                image: '',
                description: '',
                specificationsTitle: 'Características',
                specifications: [
                    'Cabezas de hemisferio lisas, reducen el daño de la pared vascular.',
                    'Cónico apropiado, combinación perfecta de punta.',
                    'Excelente fuerza de sujeción apoyada por el núcleo SS304.',
                    'Indicación clara de la escala para una mejor observación.',
                ]
            },
            {
                id: 134,
                name: 'Alambre Guía para Tubo de Alimentación Nasogástico',
                image: '',
                description: '',
                specificationsTitle: 'Características',
                specifications: [
                    'Control de par superior, colocación más fácil del tubo.',
                    'Disminuya el riesgo de bloqueo del tubo.',
                    'Superficie lisa, menos traumática en la mucosa y los vasos sanguíneos.',
                    'Operación conveniente y enfermería.',
                ]
            },
            {
                id: 135,
                name: 'Alambre Guía PTFE',
                image: '',
                description: '',
                specificationsTitle: 'Características',
                specifications: [
                    'Recubrimiento de PTFE.',
                    'Excelente compatibilidad con dispositivos.',
                    'Excelente biocompatibilidad.',
                    'Tener la capacidad antitrombótica.',
                    'Ambos extremos flexibles alcanzan una buena flexibilidad.',
                    'Diseño de retención de forma de punta, buena resistencia.',
                ]
            },
            {
                id: 136,
                name: 'Catéter Individual',
                image: '',
                description: '',
            },
            {
                id: 137,
                name: 'Cap de Heparina',
                image: '',
                description: '',
            },
            {
                id: 138,
                name: 'Alambre Guía Advancer',
                image: '',
                description: '',
            },
            {
                id: 139,
                name: 'Introductor Aguja',
                image: '',
                description: '',
            },
            {
                id: 140,
                name: 'Dilatador',
                image: '',
                description: '',
            },
            {
                id: 141,
                name: 'Introductor Jeringa',
                image: '',
                description: '',
            },
            {
                id: 142,
                name: 'Escalpelo',
                image: '',
                description: '',
            },
            {
                id: 143,
                name: 'Fijación con Alas',
                image: '',
                description: '',
            },
            {
                id: 144,
                name: 'Abrazadera de Diapostiva',
                image: '',
                description: '',
            }
        ]
    }
]