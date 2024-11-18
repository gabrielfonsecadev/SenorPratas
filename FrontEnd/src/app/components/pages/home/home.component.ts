import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // products: any;
  hover: boolean = false;
  hoveredImageId: number | null = null;

  constructor() { }

  products = [
    {
      id: 1,
      name: "Corrente Rope Elo Baiano 3mm",
      price: "589,90",
      parceladoPrice: "7x de R$84,27",
      sizes: [50, 60, 70],
      uploadDate: "2024-11-17T21:33:00Z",
      imagens: [
        {
          id: 9,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-rope-elo-baiano-3mm-prata-925-rei-pratas-jewelry-3.jpg?v=1714420038&width=800",
          order: 2
        },
        {
          id: 10,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-rope-elo-baiano-3mm-prata-925-rei-pratas-jewelry-1.jpg?v=1714420035&width=800",
          order: 1
        },
        {
          id: 11,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-rope-elo-baiano-3mm-prata-925-rei-pratas-jewelry-2.jpg?v=1714420036&width=800",
          order: 3
        },
        {
          id: 12,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-rope-elo-baiano-3mm-prata-925-rei-pratas-jewelry-4.jpg?v=1714420038&width=800",
          order: 4
        },
        {
          id: 13,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-rope-elo-baiano-3mm-prata-925-rei-pratas-jewelry-5.jpg?v=1714420038&width=800",
          order: 5
        },
        {
          id: 14,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-rope-elo-baiano-3mm-prata-925-rei-pratas-jewelry-6.jpg?v=1714420038&width=800",
          order: 6
        },
      ]
    },

    {
      id: 2,
      name: "Corrente Veneziana 1mm",
      price: "94,31",
      parceladoPrice: "3x de R$31,43",
      sizes: [50, 60, 70, 80],
      uploadDate: "2024-11-17T22:20:00Z",
      imagens: [
        {
          id: 1,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-veneziana-1mm-prata-925-rei-pratas-jewelry-2.jpg?v=1714420035&width=800",
          order: 2
        },
        {
          id: 2,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-veneziana-1mm-prata-925-rei-pratas-jewelry-1.webp?v=1714420034&width=800",
          order: 1
        },
        {
          id: 3,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-veneziana-1mm-prata-925-rei-pratas-jewelry-3.jpg?v=1714420035&width=800",
          order: 3
        },
        {
          id: 4,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-veneziana-1mm-prata-925-rei-pratas-jewelry-4.jpg?v=1714420035&width=800",
          order: 4
        },
        {
          id: 5,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-veneziana-1mm-prata-925-rei-pratas-jewelry-5.jpg?v=1714420035&width=800",
          order: 5
        },
        {
          id: 6,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-veneziana-1mm-prata-925-rei-pratas-jewelry-6.jpg?v=1714420035&width=800",
          order: 6
        },
        {
          id: 7,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-veneziana-1mm-prata-925-rei-pratas-jewelry-7.jpg?v=1714420035&width=800",
          order: 7
        },
        {
          id: 8,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-veneziana-1mm-prata-925-rei-pratas-jewelry-8.jpg?v=1714420035&width=800",
          order: 8
        },
      ]
    },

    {
      id: 3,
      name: "Corrente Grumet Escama 3,5mm",
      price: "298,61",
      parceladoPrice: "5x de R$58,32",
      sizes: [60],
      uploadDate: "2024-11-17T21:20:00Z",
      imagens: [
        {
          id: 1,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-grumet-prata-925-3mm.webp?v=1724699715&width=800",
          order: 2
        },
        {
          id: 2,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-escama-3mm-70cm-prata-925-rei-pratas-jewelry-1_1.webp?v=1724762306&width=800",
          order: 1
        },
        {
          id: 3,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-grumet-escama-3mm-60cm-prata-925.webp?v=1724698859&width=800",
          order: 3
        },
      ]
    },

    {
      id: 4,
      name: "Corrente Piastrine 2mm",
      price: "139,90",
      parceladoPrice: "3x de R$46,63",
      sizes: [60],
      uploadDate: "2024-11-17T21:26:00Z",
      imagens: [
        {
          id: 1,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-piastrine-18mm-60cm-prata-925-rei-pratas-jewelry-2.jpg?v=1714417025&width=800",
          order: 2
        },
        {
          id: 2,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-piastrine-18mm-60cm-prata-925-rei-pratas-jewelry-1.jpg?v=1714417024&width=800",
          order: 1
        },
        {
          id: 3,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-piastrine-18mm-60cm-prata-925-rei-pratas-jewelry-3.jpg?v=1714417026&width=800",
          order: 3
        },
        {
          id: 4,
          imagePath: "https://reipratas.com.br/cdn/shop/files/piastrine_1.gif?v=1723666163&width=600",
          order: 4
        },
        {
          id: 5,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-piastrine-18mm-60cm-prata-925-rei-pratas-jewelry-4.jpg?v=1723666178&width=800",
          order: 5
        },
      ]
    },

    {
      id: 4,
      name: "Corrente Piastrine 2mm",
      price: "139,90",
      parceladoPrice: "3x de R$46,63",
      sizes: [60],
      uploadDate: "2024-11-17T23:25:00Z",
      imagens: [
        {
          id: 1,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-piastrine-18mm-60cm-prata-925-rei-pratas-jewelry-2.jpg?v=1714417025&width=800",
          order: 2
        },
        {
          id: 2,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-piastrine-18mm-60cm-prata-925-rei-pratas-jewelry-1.jpg?v=1714417024&width=800",
          order: 1
        },
        {
          id: 3,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-piastrine-18mm-60cm-prata-925-rei-pratas-jewelry-3.jpg?v=1714417026&width=800",
          order: 3
        },
        {
          id: 4,
          imagePath: "https://reipratas.com.br/cdn/shop/files/piastrine_1.gif?v=1723666163&width=600",
          order: 4
        },
        {
          id: 5,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-piastrine-18mm-60cm-prata-925-rei-pratas-jewelry-4.jpg?v=1723666178&width=800",
          order: 5
        },
      ]
    },

    {
      id: 4,
      name: "Corrente Piastrine 2mm",
      price: "139,90",
      parceladoPrice: "3x de R$46,63",
      sizes: [60],
      uploadDate: "2024-11-17T18:25:00Z",
      imagens: [
        {
          id: 1,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-piastrine-18mm-60cm-prata-925-rei-pratas-jewelry-2.jpg?v=1714417025&width=800",
          order: 2
        },
        {
          id: 2,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-piastrine-18mm-60cm-prata-925-rei-pratas-jewelry-1.jpg?v=1714417024&width=800",
          order: 1
        },
        {
          id: 3,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-piastrine-18mm-60cm-prata-925-rei-pratas-jewelry-3.jpg?v=1714417026&width=800",
          order: 3
        },
        {
          id: 4,
          imagePath: "https://reipratas.com.br/cdn/shop/files/piastrine_1.gif?v=1723666163&width=600",
          order: 4
        },
        {
          id: 5,
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-piastrine-18mm-60cm-prata-925-rei-pratas-jewelry-4.jpg?v=1723666178&width=800",
          order: 5
        },
      ]
    },
  ]

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    infinite: false,
    arrows: true,
    nextArrow: '<div style=\'position: absolute; top: 35%; right: 1%; cursor: pointer;\' class=\'next-slide\'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg></div>',
    prevArrow: '<div style=\'position: absolute; top: 35%; left: 1%; z-index: 1; cursor: pointer;\' class=\'next-slide\'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg></div>',
    centerMode: false,
    centerPadding: '20px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ]
  };

  getNovidades() {
    const sortedProducts = [...this.products];
    sortedProducts.sort((a, b) => {
      const dateA = new Date(a.uploadDate).getTime();
      const dateB = new Date(b.uploadDate).getTime();
      return dateB - dateA;
    });

    return sortedProducts;
  }
}
