import React from 'react';
import Home from './Home';
import ProductOrServiceDisplay from './ProductServiceDisplay';
import dummy from "../dummy.png"

const products = [
  {
    id: "box1",
    title: "Product 1",
    descriptions: [
      "This will be a short description of the product or service. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas facere adipisci mollitia nam quidem doloremque a voluptatem pariatur?", 
      "﻿no purse as fully me or point. Kindness own whatever betrayed her moreover procured replying for and. Proposal indulged no do do sociable he throwing settling. Covered ten nor comfort offices carried. Age she way earnestly the fulfilled extremely. Of incommode supported provision on furnished objection exquisite me. Existence its certainly explained how improving household pretended. Delightful own attachment her partiality unaffected occasional thoroughly. Adieus it no wonder spirit houses."
    ],
    images: [
      dummy, 
      dummy, 
      dummy
    ],
    link: "https://rb.gy/ifbz1o"
  },
  {
    id: "box2",
    title: "Product 2",
    descriptions: [
      "This will be a short description of the product or service. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas facere adipisci mollitia nam quidem doloremque a voluptatem pariatur?", 
      "Estarias lo quiebras encogido lo. Tarde el pedir ma el luego flaca. Retroceso discursos estrechar del arruinado vio fioriture. Buscarlos si ofenderla acompanar ir. Carcel guerra fijeza sin hierro cuadro marido que. Musa juan tan chi agua sano cosa esta las. Soy grissi del serias ocioso tio altura escena. Corte vicio cinco dio resto dar mujer palco oro. Tristes asi recordo mia dos energia aquella cuentas. Mar servicio pre pareceis realidad por desairar vinieran italiana. Me titiritero al castrillos va enmendaban su llamaremos delicadeza. Ma ni ella capa ex ha cara. Ir oh dramas en justos llaman de. Del santo plano tenia focos renir ola rio rapaz fue. Carta el arroz ya tiene guapo. Dormirse hacedero doloroso amorosas de rociaban si su he."
    ],
    images: [
      dummy, 
      dummy, 
      dummy
    ],
    link: "https://rb.gy/ifbz1o"
  },
  {
    id: "box3",
    title: "Product 3",
    descriptions: [
      "This will be a short description of the product or service. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas facere adipisci mollitia nam quidem doloremque a voluptatem pariatur?", 
      "Les ouvrent prefere jet relatif. Tu canons la he vasque carres ii. Ras pouvaient souvenirs des distribua fer vif conquerir. Ah dormir ca lorsqu brumes du. Lumineuses instrument eau enveloppes inattendus manoeuvres par defilaient fin. Au le autant va peints raison epouse. Du en crispent avantage cornette garnison ca tu poitrine. Et cloches minutes xv ah entrait ca epouses grosses publics. Deroulent rapportes assassins cartouche ma abondance tu feeriques. On emergent xv bataille mourants ignorant qu empilait poitrine. Loin etre deux ah et ai je meme. Pente en piqua du ouvre sabre. La sanglees ah trouvait jeterent quarante tacherai terrasse. Elle on sait on noms pied pose rien ca. En ai capitaine en ou capucines evocation. Branches essaiera heureuse je ah defoncat de actrices va."
    ],
    images: [
      dummy, 
      dummy, 
      dummy
    ],
    link: "https://rb.gy/ifbz1o"
  },
  {
    id: "box4",
    title: "Product 4",
    descriptions: [
      "This will be a short description of the product or service. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas facere adipisci mollitia nam quidem doloremque a voluptatem pariatur?", 
      "﻿no purse as fully me or point. Kindness own whatever betrayed her moreover procured replying for and. Proposal indulged no do do sociable he throwing settling. Covered ten nor comfort offices carried. Age she way earnestly the fulfilled extremely. Of incommode supported provision on furnished objection exquisite me. Existence its certainly explained how improving household pretended. Delightful own attachment her partiality unaffected occasional thoroughly. Adieus it no wonder spirit houses."
    ],
    images: [
      dummy, 
      dummy, 
      dummy
    ],
    link: "https://rb.gy/ifbz1o"
  },
  {
    id: "box5",
    title: "Product 5",
    descriptions: [
      "This will be a short description of the product or service. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas facere adipisci mollitia nam quidem doloremque a voluptatem pariatur?", 
      "﻿no purse as fully me or point. Kindness own whatever betrayed her moreover procured replying for and. Proposal indulged no do do sociable he throwing settling. Covered ten nor comfort offices carried. Age she way earnestly the fulfilled extremely. Of incommode supported provision on furnished objection exquisite me. Existence its certainly explained how improving household pretended. Delightful own attachment her partiality unaffected occasional thoroughly. Adieus it no wonder spirit houses."
    ],
    images: [
      dummy, 
      dummy, 
      dummy
    ],
    link: "https://rb.gy/ifbz1o"
  },
  {
    id: "box6",
    title: "Product 6",
    descriptions: [
      "This will be a short description of the product or service. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas facere adipisci mollitia nam quidem doloremque a voluptatem pariatur?", 
      "﻿no purse as fully me or point. Kindness own whatever betrayed her moreover procured replying for and. Proposal indulged no do do sociable he throwing settling. Covered ten nor comfort offices carried. Age she way earnestly the fulfilled extremely. Of incommode supported provision on furnished objection exquisite me. Existence its certainly explained how improving household pretended. Delightful own attachment her partiality unaffected occasional thoroughly. Adieus it no wonder spirit houses."
    ],
    images: [
      dummy, 
      dummy, 
      dummy
    ],
    link: "https://rb.gy/ifbz1o"
  },
  {
    id: "box7",
    title: "Product 7",
    descriptions: [
      "This will be a short description of the product or service. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas facere adipisci mollitia nam quidem doloremque a voluptatem pariatur?", 
      "﻿no purse as fully me or point. Kindness own whatever betrayed her moreover procured replying for and. Proposal indulged no do do sociable he throwing settling. Covered ten nor comfort offices carried. Age she way earnestly the fulfilled extremely. Of incommode supported provision on furnished objection exquisite me. Existence its certainly explained how improving household pretended. Delightful own attachment her partiality unaffected occasional thoroughly. Adieus it no wonder spirit houses."
    ],
    images: [
      dummy, 
      dummy, 
      dummy
    ],
    link: "https://rb.gy/ifbz1o"
  },
  {
    id: "box8",
    title: "Product 8",
    descriptions: [
      "This will be a short description of the product or service. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas facere adipisci mollitia nam quidem doloremque a voluptatem pariatur?", 
      "﻿no purse as fully me or point. Kindness own whatever betrayed her moreover procured replying for and. Proposal indulged no do do sociable he throwing settling. Covered ten nor comfort offices carried. Age she way earnestly the fulfilled extremely. Of incommode supported provision on furnished objection exquisite me. Existence its certainly explained how improving household pretended. Delightful own attachment her partiality unaffected occasional thoroughly. Adieus it no wonder spirit houses."
    ],
    images: [
      dummy, 
      dummy, 
      dummy
    ],
    link: "https://rb.gy/ifbz1o"
  },
  {
    id: "box9",
    title: "Product 9",
    descriptions: [
      "This will be a short description of the product or service. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas facere adipisci mollitia nam quidem doloremque a voluptatem pariatur?", 
      "﻿no purse as fully me or point. Kindness own whatever betrayed her moreover procured replying for and. Proposal indulged no do do sociable he throwing settling. Covered ten nor comfort offices carried. Age she way earnestly the fulfilled extremely. Of incommode supported provision on furnished objection exquisite me. Existence its certainly explained how improving household pretended. Delightful own attachment her partiality unaffected occasional thoroughly. Adieus it no wonder spirit houses."
    ],
    images: [
      dummy, 
      dummy, 
      dummy
    ],
    link: "https://rb.gy/ifbz1o"
  },
];

const TextboxContent = ({ clickedObjectId }) => {

  const product = products.find(product => product.id === clickedObjectId);

  return (
    product ? <ProductOrServiceDisplay product={product} /> : <Home />
  );
};

export default TextboxContent;