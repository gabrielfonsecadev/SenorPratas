import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // products: any;

  constructor() { }

  products = [
    {
      name: "Corrente Rope Elo Baiano 3mm",
      price: "589,90",
      sizes: [50, 60, 70],
      imagens: [
        {
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-rope-elo-baiano-3mm-prata-925-rei-pratas-jewelry-1.jpg?v=1714420035&width=800",
          isCover: false
        },
        {
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-rope-elo-baiano-3mm-prata-925-rei-pratas-jewelry-2.jpg?v=1714420036&width=800",
          isCover: false
        },
        {
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-rope-elo-baiano-3mm-prata-925-rei-pratas-jewelry-3.jpg?v=1714420038&width=800",
          isCover: false
        },
        {
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-rope-elo-baiano-3mm-prata-925-rei-pratas-jewelry-4.jpg?v=1714420038&width=800",
          isCover: true
        },
        {
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-rope-elo-baiano-3mm-prata-925-rei-pratas-jewelry-5.jpg?v=1714420038&width=800",
          isCover: false
        },
        {
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-rope-elo-baiano-3mm-prata-925-rei-pratas-jewelry-6.jpg?v=1714420038&width=800",
          isCover: false
        },
      ]
    },

    {
      name: "Corrente Veneziana 1mm",
      price: "94,31",
      sizes: [50, 60, 70, 80],
      imagens: [
        {
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-veneziana-1mm-prata-925-rei-pratas-jewelry-1.webp?v=1714420034&width=800",
          isCover: false
        },
        {
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-veneziana-1mm-prata-925-rei-pratas-jewelry-2.jpg?v=1714420035&width=800",
          isCover: true
        },
        {
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-veneziana-1mm-prata-925-rei-pratas-jewelry-3.jpg?v=1714420035&width=800",
          isCover: false
        },
        {
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-veneziana-1mm-prata-925-rei-pratas-jewelry-4.jpg?v=1714420035&width=800",
          isCover: false
        },
        {
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-veneziana-1mm-prata-925-rei-pratas-jewelry-5.jpg?v=1714420035&width=800",
          isCover: false
        },
        {
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-veneziana-1mm-prata-925-rei-pratas-jewelry-6.jpg?v=1714420035&width=800",
          isCover: false
        },
        {
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-veneziana-1mm-prata-925-rei-pratas-jewelry-7.jpg?v=1714420035&width=800",
          isCover: false
        },
        {
          imagePath: "https://reipratas.com.br/cdn/shop/files/corrente-veneziana-1mm-prata-925-rei-pratas-jewelry-8.jpg?v=1714420035&width=800",
          isCover: false
        },
      ]
    }
  ]
}
