 import chair1 from "../assets/Images/chair1.png"
import chair2 from "../assets/Images/chair2.png"
import chair3 from "../assets/Images/chair3.png"
import chair4 from "../assets/Images/chair4.png"
import chair5 from "../assets/Images/chair5.png"
import chair6 from "../assets/Images/chair6.png"
import chair7 from "../assets/Images/chair7.png"
import chair8 from "../assets/Images/chair8.png"
import chair9 from "../assets/Images/chair9.png"

import table1 from "../assets/Images/table1.png"
import table2 from "../assets/Images/table2.png"
import table3 from "../assets/Images/table3.png"
import table4 from "../assets/Images/table4.png"
import table5 from "../assets/Images/table5.png"
import table6 from "../assets/Images/table6.png"
import table7 from "../assets/Images/table7.png"
import table8 from "../assets/Images/table8.png"
import table9 from "../assets/Images/table9.png"



import sofa1 from "../assets/Images/sofa1.png"
import sofa2 from "../assets/Images/sofa2.png"
import sofa3 from "../assets/Images/sofa3.png"
import sofa4 from "../assets/Images/sofa4.png"
import sofa6 from "../assets/Images/sofa6.png"
import sofa7 from "../assets/Images/sofa7.png"
import sofa8 from "../assets/Images/sofa8.png"
import sofa9 from "../assets/Images/sofa9.png"

import stool1 from "../assets/Images/stool1.png"
import stool2 from "../assets/Images/stool2.png"
import stool3 from "../assets/Images/stool3.png"
import stool4 from "../assets/Images/stool4.png"
import stool6 from "../assets/Images/stool6.png"
import stool7 from "../assets/Images/stool7.png"
import stool8 from "../assets/Images/stool8.png"
import stool9 from "../assets/Images/stool9.png"

import frame1 from "../assets/Images/frame1.avif"
import frame2 from "../assets/Images/frame2.avif"
import frame3 from "../assets/Images/frame3.avif"

import wood1 from "../assets/Images/wood1.avif"
import wood2 from "../assets/Images/wood2.avif"

export interface product {
    name: string,
    image: string,
    designer: string,
    id: number
  }

export interface wood{
  name: string,
    image: string,
  mix: number 
}



export interface frame{
  name: string,
    image: string,
}

export const woods: wood[] = [
  { name: "Oak lacquer, FSC", image: wood1, mix: 70 },
  { name: "Black ash, FSC", image: wood2, mix: 70 },
]


export const frames: frame[] = [
  { name: "Black", image: frame1},
  { name: "Modernist Green", image: frame2},
  { name: "Bordeaux", image: frame3},
]


export const chairs: product[] = [
  {name: "J39 Mogensen Chair", image: chair1, designer: 'Lorenzo Vélin', id: 1},
  {name: "Søborg Chair", image: chair2, designer: 'Marcelle Dupré', id: 2},
  {name: "Trinidad Chair", image: chair3, designer: 'Ansel Reinhardt', id: 3},
  {name: "Canvas Chair", image: chair4, designer: 'Gianna Bellini', id: 4},
  {name: "Swoon Dining Chair", image: chair5, designer: 'Henrik Vaals', id: 5},
  {name: "Pato Chair", image: chair6, designer: 'Otto Krell', id: 6},
  {name: "Plan Chair", image: chair7, designer: 'Kade Elric', id: 7},
  {name: "Eyes Chair", image: chair8, designer: 'Jaxon Rhys', id: 8},
  {name: "Post Chair", image: chair9, designer: 'Avery Calder', id: 9}
]
 

export const tables: product[] = [
  {name: "BM67 Coffee Table", image: table1, designer: 'Noa Bennett', id: 10},
  {name: "Risom Magazine Table", image: table2, designer: 'Lucien Mårten', id: 11},
  {name: "Post Table", image: table3, designer: 'Henrik Vaals', id: 12},
  {name: "Islets Table", image: table4, designer: 'Elena Rousseau', id: 13},
  {name: "Trinidad Table", image: table5, designer: 'Ansel Reinhardt', id: 38},
  {name: "Library Table", image: table6, designer: 'Otto Krell', id: 14},
  {name: "Taro Rectangular Table", image: table7, designer: 'Marcelle Dupré', id: 15},
  {name: "C18 Dining Table", image: table8, designer: 'Lorenzo Vélin', id: 16},
  {name: "Plan Table", image: table9, designer: 'Kade Elric', id: 17},
  {name: "JG Side Table", image: table9, designer: 'Elena Rousseau', id: 18}
]



export const sofas: product[] = [
  {name: "Mogensen 2212 Sofa", image: sofa1, designer: 'Gianna Bellini', id: 19},
  {name: "Mogensen 2213 Sofa", image: sofa2, designer: 'Lorenzo Vélin', id: 20},
  {name: "Calmo Modular Sofa", image: sofa3, designer: 'Ansel Reinhardt', id: 21},
  {name: "Delphi Two-Seater Sofa", image: sofa4, designer: 'Gianna Bellini', id: 22},
  {name: "Haiku Sofa", image: sofa6, designer: 'Otto Krell', id: 23},
  {name: "Mogensen 23 Sofa", image: sofa7, designer: 'Avery Calder', id: 24},
  {name: "Delphi Modular Sofa", image: sofa8, designer: 'Noa Bennett', id: 25},
  {name: "Haiku Three-Seater", image: sofa9, designer: 'Jaxon Rhys', id: 26}
]


export const stools: product[] = [
  {name: "Pioneer Stool", image: stool1, designer: 'Kade Elric', id: 27},
  {name: "Spine Barstool", image: stool2, designer: 'Lucien Mårten', id: 28},
  {name: "Gallery Stool", image: stool3, designer: 'Henrik Vaals', id: 29},
  {name: "Pioneer Counter Stool", image: stool4, designer: 'Marcelle Dupré', id: 30},
  {name: "J16 Rocking Stool", image: stool6, designer: 'Avery Calder', id: 31},
  {name: "Pato Bar Stool", image: stool7, designer: 'Elena Rousseau', id: 32},
  {name: "Spine Counter Stool", image: stool8, designer: 'Otto Krell', id: 33},
  {name: "Pioneer Bar Stool", image: stool9, designer: 'Noa Bennett', id: 34}
]

export const products: product[] = [
  // Chairs
  { name: "J39 Mogensen Chair", image: chair1, designer: 'Lorenzo Vélin', id: 1 },
  { name: "Søborg Chair", image: chair2, designer: 'Marcelle Dupré', id: 2 },
  { name: "Trinidad Chair", image: chair3, designer: 'Ansel Reinhardt', id: 3 },
  { name: "Canvas Chair", image: chair4, designer: 'Gianna Bellini', id: 4 },
  { name: "Swoon Dining Chair", image: chair5, designer: 'Henrik Vaals', id: 5 },
  { name: "Pato Chair", image: chair6, designer: 'Otto Krell', id: 6 },
  { name: "Plan Chair", image: chair7, designer: 'Kade Elric', id: 7 },
  { name: "Eyes Chair", image: chair8, designer: 'Jaxon Rhys', id: 8 },
  { name: "Post Chair", image: chair9, designer: 'Avery Calder', id: 9 },

  // Tables
  { name: "BM67 Coffee Table", image: table1, designer: 'Noa Bennett', id: 10 },
  { name: "Risom Magazine Table", image: table2, designer: 'Lucien Mårten', id: 11 },
  { name: "Post Table", image: table3, designer: 'Henrik Vaals', id: 12 },
  { name: "Islets Table", image: table4, designer: 'Elena Rousseau', id: 13 },
  { name: "Trinidad Table", image: table5, designer: 'Ansel Reinhardt', id: 38 },
  { name: "Library Table", image: table6, designer: 'Otto Krell', id: 14 },
  { name: "Taro Rectangular Table", image: table7, designer: 'Marcelle Dupré', id: 15 },
  { name: "C18 Dining Table", image: table8, designer: 'Lorenzo Vélin', id: 16 },
  { name: "Plan Table", image: table9, designer: 'Kade Elric', id: 17 },
  { name: "JG Side Table", image: table9, designer: 'Elena Rousseau', id: 18 },

  // Sofas
  { name: "Mogensen 2212 Sofa", image: sofa1, designer: 'Gianna Bellini', id: 19 },
  { name: "Mogensen 2213 Sofa", image: sofa2, designer: 'Lorenzo Vélin', id: 20 },
  { name: "Calmo Modular Sofa", image: sofa3, designer: 'Ansel Reinhardt', id: 21 },
  { name: "Delphi Two-Seater Sofa", image: sofa4, designer: 'Gianna Bellini', id: 22 },
  { name: "Haiku Sofa", image: sofa6, designer: 'Otto Krell', id: 23 },
  { name: "Mogensen 23 Sofa", image: sofa7, designer: 'Avery Calder', id: 24 },
  { name: "Delphi Modular Sofa", image: sofa8, designer: 'Noa Bennett', id: 25 },
  { name: "Haiku Three-Seater", image: sofa9, designer: 'Jaxon Rhys', id: 26 },

  // Stools
  { name: "Pioneer Stool", image: stool1, designer: 'Kade Elric', id: 27 },
  { name: "Spine Barstool", image: stool2, designer: 'Lucien Mårten', id: 28 },
  { name: "Gallery Stool", image: stool3, designer: 'Henrik Vaals', id: 29 },
  { name: "Pioneer Counter Stool", image: stool4, designer: 'Marcelle Dupré', id: 30 },
  { name: "J16 Rocking Stool", image: stool6, designer: 'Avery Calder', id: 31 },
  { name: "Pato Bar Stool", image: stool7, designer: 'Elena Rousseau', id: 32 },
  { name: "Spine Counter Stool", image: stool8, designer: 'Otto Krell', id: 33 },
  { name: "Pioneer Bar Stool", image: stool9, designer: 'Noa Bennett', id: 34 }
];



