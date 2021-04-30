const SHOP_DATA = [
    {
      id: 1,
      title: 'Ships',
      routeName: 'ships',
      items: [
        {
          id: 1
          , name: 'Z-95 Headhunter'
          //, imageUrl: '/images/ships/z95.png'
          , imageUrl: 'https://i.pinimg.com/originals/35/6c/f8/356cf87a0e1ec66b6fd0a87392790021.png'
          //, imageUrl: "/images/shop-img/hats/brown-brim.png"
          , price: 45000
        },
        {
          id: 2
          , name: 'Starwind Yacht'
          , imageUrl: "https://static.wikia.nocookie.net/starwars/images/1/12/Starwindyacht.png"
          , price: 1000000
        },
        {
          id: 3,
          name: 'YG-4210',
          imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ab940dbf-6b1c-43d5-9e49-aa8736340b2d/d893yo6-487c161f-41d3-476e-8233-ea130b276b4a.jpg/v1/fill/w_1600,h_873,q_75,strp/yg_4210_light_freighter_by_adamkop_d893yo6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NzMiLCJwYXRoIjoiXC9mXC9hYjk0MGRiZi02YjFjLTQzZDUtOWU0OS1hYTg3MzYzNDBiMmRcL2Q4OTN5bzYtNDg3YzE2MWYtNDFkMy00NzZlLTgyMzMtZWExMzBiMjc2YjRhLmpwZyIsIndpZHRoIjoiPD0xNjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.J0hrHqGIpcTZ7BpGNAg70XNJKdMff7ALOCObEtsbM-k',
          price: 40000
        },
        {
          id: 4,
          name: 'Barloz',
          imageUrl: 'https://i.redd.it/f8uex5log7q21.jpg',
          price: 25
        },
        {
          id: 5,
          name: 'Green Beanie',
          imageUrl: '/images/ships/err.pnghttps://echoesandreflections.org/wp-content/uploads/2017/07/image-missing-md.png',
          price: 18
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl: 'https://echoesandreflections.org/wp-content/uploads/2017/07/image-missing-md.png',
          price: 14
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl: 'https://echoesandreflections.org/wp-content/uploads/2017/07/image-missing-md.png',
          price: 18
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: 'https://echoesandreflections.org/wp-content/uploads/2017/07/image-missing-md.png',
          price: 14
        },
        {
          id: 9,
          name: 'Anxarta',
          imageUrl: 'https://i.pinimg.com/originals/6d/bf/58/6dbf58774bbd4c41a173c37b4eaf9951.jpg',
          price: 32000
        }
      ]
    },
    {
      id: 2,
      title: 'Droids',
      routeName: 'droids',
      items: [
        {
          id: 10,
          name: 'R2 Unit',
          imageUrl: 'https://i.pinimg.com/originals/70/eb/32/70eb32df8f24079546d76b6248cebcb9.jpg',
          price: 220
        },
        {
          id: 11,
          name: 'Mouse',
          imageUrl: 'https://img2.cgtrader.com/items/2233651/3a09800b3f/mse-6-mouse-droid-star-wars-3d-model-animated-obj-fbx.jpg',
          price: 280
        },
        {
          id: 12,
          name: 'Simon',
          imageUrl: 'https://lh3.googleusercontent.com/proxy/ogKxoWt287PojK1cjkr_gDbMlQG2IMOmOcHY6b-XEoZQR6T95M0PuehcC2jfA8sCju-iuCebqZqxv7GSpLlNQZI6AiiLn8svfMCTCJQ-Pjr13EWzk-rwoX1K86V0-akXucA7',
          price: 110
        },
        {
          id: 13,
          name: 'Tri-droid',
          imageUrl: 'https://cdn.rebrickable.com/media/thumbs/mocs/moc-57702.jpg/1000x800.jpg',
          price: 160
        },
        {
          id: 14,
          name: 'Nike Red High Tops',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          price: 160
        },
        {
          id: 15,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160
        },
        {
          id: 16,
          name: 'Air Jordan Limited',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 190
        },
        {
          id: 17,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'Gear',
      routeName: 'gear',
      items: [
        {
          id: 18,
          name: 'Black Jean Shearling',
          imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          price: 125
        },
        {
          id: 19,
          name: 'Blue Jean Jacket',
          imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
          price: 90
        },
        {
          id: 20,
          name: 'Grey Jean Jacket',
          imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
          price: 90
        },
        {
          id: 21,
          name: 'Brown Shearling',
          imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
          price: 165
        },
        {
          id: 22,
          name: 'Tan Trench',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Weapons',
      routeName: 'weapons',
      items: [
        {
          id: 23,
          name: 'Blue Tanktop',
          imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          price: 25
        },
        {
          id: 24,
          name: 'Floral Blouse',
          imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
          price: 20
        },
        {
          id: 25,
          name: 'Floral Dress',
          imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
          price: 80
        },
        {
          id: 26,
          name: 'Red Dots Dress',
          imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
          price: 80
        },
        {
          id: 27,
          name: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 45
        },
        {
          id: 28,
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135
        },
        {
          id: 29,
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Clothing',
      routeName: 'clothing',
      items: [
        {
          id: 30,
          name: 'Camo Down Vest',
          imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          price: 325
        },
        {
          id: 31,
          name: 'Floral T-shirt',
          imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
          price: 20
        },
        {
          id: 32,
          name: 'Black & White Longsleeve',
          imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          price: 25
        },
        {
          id: 33,
          name: 'Pink T-shirt',
          imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
          price: 25
        },
        {
          id: 34,
          name: 'Jean Long Sleeve',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 40
        },
        {
          id: 35,
          name: 'Burgundy T-shirt',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 25
        }
      ]
    }
  ];
  
  export default SHOP_DATA;
  