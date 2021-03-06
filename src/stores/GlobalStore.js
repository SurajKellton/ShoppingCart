import {action, makeObservable, observable} from 'mobx';
import Url from '../utils/appConstants/ImageUrl';

class ProductListStore {
  @observable productList = this.productList;
  @observable id = '';
  @observable count = 0;
  @observable wishlistCount = 0;
  @observable subCategory = '';
  @observable cartArray = [];
  @observable idForTextField = 0;
  @observable isFocused = false;
  @observable nameTF = '';
  @observable contactTF = '';
  @observable pincodeTF = '';
  @observable localityTF = '';
  @observable addressTF = '';
  @observable cityTF = '';
  @observable landmarkTF = '';
  @observable alternativePhoneTF = '';
  @observable textFieldText = '';

  @action updatingName = value => {
    this.nameTF = value;
  };

  @action updatingContact = value => {
    this.contactTF = value;
  };

  @action updatingPin = value => {
    this.pincodeTF = value;
  };

  @action updatingLocality = value => {
    this.localityTF = value;
  };

  @action updatingAddress = value => {
    this.addressTF = value;
  };

  @action updatingCity = value => {
    this.cityTF = value;
  };

  @action updatingLandmark = value => {
    this.landmarkTF = value;
  };

  @action updatingAlternativePhone = value => {
    this.alternativePhoneTF = value;
  };

  @action updatingFocused = () => {
    this.isFocused = !this.isFocused;
  };

  @action updatingTextFieldText = value => {
    this.textFieldText = value;
  };

  @action updatingidTF = value => {
    this.idForTextField = value;
  };

  @action updatingData = value => {
    this.productList = value;
  };

  @action updatingProductList = value => {
    this.productList = value;
  };

  @action updatingCount = value => {
    this.count = value;
  };

  @action updatingWishlistCount = value => {
    this.wishlistCount = value;
  };

  @action updatingSubCategory = value => {
    this.subCategory = value;
  };

  constructor() {
    makeObservable(this);
  }

  @observable adress = this.address;

  address = [
    {
      id: 1,
      userName: 'Mr. Hariom Rajput',
      address:
        'House No. 231 2nd Floor, Sector 23, Near by Water Tank and Temple,Gurgaon. Haryana, 122017',
      mobile: '+91 6597523541',
    },
    {
      id: 2,
      userName: 'Mr. Harish Sharma',
      address:
        'House No. 254 3rd Floor, Sector 58, Near by Water Tank and Temple,Gurgaon. Haryana, 122017',
      mobile: '+91 5235657410',
    },
    {
      id: 3,
      userName: 'Mr. Kailash',
      address:
        'House No. 274 2nd Floor, Sector 45, Near by Water Tank and Temple,Gurgaon. Haryana, 122017',
      mobile: '+91 5645789520',
    },
    {
      id: 4,
      userName: 'Mr. Bhupesh Pandey',
      address:
        'House No. 231 2nd Floor, Sector 23, Near by Water Tank and Temple,Gurgaon. Haryana, 122017',
      mobile: '+91 6597523541',
    },
    {
      id: 5,
      userName: 'Mrs Shilpa Sharma',
      address:
        'House No. 254 3rd Floor, Sector 58, Near by Water Tank and Temple,Gurgaon. Haryana, 122017',
      mobile: '+91 5235657410',
    },
  ];

  stateList = [
    'Select State',
    'Uttarakhand',
    'Delhi',
    'Goa',
    'J&K',
    'Hariyana',
    'Himanchal',
    'Punjab',
    'Rajasthan',
    'Maharashtra',
    'Odisha',
  ];

  productList = [
    {
      id: 1,
      name: 'Pant',
      stock: 10,
      added: 0,
      price: 1000,
      description: 'size: 35, color: brown',
      image: Url.pant.Pant1,
      category: 'summer',
    },
    {
      id: 2,
      name: 'Shirt',
      stock: 5,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.shirt.shirt1,
      category: 'summer',
    },
    {
      id: 3,
      name: 'Shoes',
      stock: 20,
      added: 0,
      price: 1100,
      description: 'size: 8, color: white',
      image: Url.shoes.shoes1,
      category: 'winter',
    },
    {
      id: 4,
      name: 'Jacket',
      stock: 10,
      added: 0,
      price: 3000,
      description: 'size: 35, color: black',
      image: Url.jacket.Jacket1,
      category: 'winter',
    },
    {
      id: 5,
      name: 'Sweater',
      stock: 5,
      added: 0,
      price: 900,
      description: 'size: 35, color: grey',
      image: Url.sweater.sweater1,
      category: 'winter',
    },
    {
      id: 6,
      name: 'Kurta',
      stock: 20,
      added: 0,
      price: 1000,
      description: 'size: 35, color: pink',
      image: Url.kurta.kurta1,
      category: 'summer',
    },
    {
      id: 7,
      name: 'pajama',
      stock: 10,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.pajama.pajama1,
      category: 'winter',
    },
    {
      id: 8,
      name: 't-shirt',
      stock: 10,
      added: 0,
      price: 500,
      description: 'size: 35, color: yellow',
      image: Url.tshirt.tshirt1,
      category: 'summer',
    },
    {
      id: 9,
      name: 'Cap',
      stock: 10,
      added: 0,
      price: 300,
      description: 'size: 10, color: white',
      image: Url.cap.cap1,
      category: 'summer',
    },
    {
      id: 10,
      name: 'Pant',
      stock: 11,
      added: 0,
      price: 1000,
      description: 'size: 35, color: brown',
      image: Url.pant.Pant2,
      category: 'summer',
    },
    {
      id: 11,
      name: 'Shirt',
      stock: 5,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.shirt.shirt2,
      category: 'summer',
    },
    {
      id: 12,
      name: 'Shoes',
      stock: 20,
      added: 0,
      price: 1100,
      description: 'size: 8, color: white',
      image: Url.shoes.shoes2,
      category: 'winter',
    },
    {
      id: 13,
      name: 'Jacket',
      stock: 10,
      added: 0,
      price: 3000,
      description: 'size: 35, color: black',
      image: Url.jacket.jacket2,
      category: 'winter',
    },
    {
      id: 14,
      name: 'Sweater',
      stock: 5,
      added: 0,
      price: 900,
      description: 'size: 35, color: grey',
      image: Url.sweater.sweater2,
      category: 'winter',
    },
    {
      id: 15,
      name: 'Kurta',
      stock: 20,
      added: 0,
      price: 1000,
      description: 'size: 35, color: pink',
      image: Url.kurta.kurta2,
      category: 'summer',
    },
    {
      id: 16,
      name: 'pajama',
      stock: 10,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.pajama.pajama2,
      category: 'winter',
    },
    {
      id: 17,
      name: 't-shirt',
      stock: 10,
      added: 0,
      price: 500,
      description: 'size: 35, color: yellow',
      image: Url.tshirt.tshirt2,
      category: 'summer',
    },
    {
      id: 18,
      name: 'Cap',
      stock: 10,
      added: 0,
      price: 300,
      description: 'size: 10, color: white',
      image: Url.cap.cap2,
      category: 'summer',
    },
    {
      id: 19,
      name: 'Pant',
      stock: 10,
      added: 0,
      price: 1000,
      description: 'size: 35, color: brown',
      image: Url.pant.Pant3,
      category: 'summer',
    },
    {
      id: 20,
      name: 'Shirt',
      stock: 5,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.shirt.shirt3,
      category: 'summer',
    },
    {
      id: 21,
      name: 'Shoes',
      stock: 20,
      added: 0,
      price: 1100,
      description: 'size: 8, color: white',
      image: Url.shoes.shoes3,
      category: 'winter',
    },
    {
      id: 22,
      name: 'Jacket',
      stock: 10,
      added: 0,
      price: 'Rs: 3000',
      description: 'size: 35, color: black',
      image: Url.jacket.jacket3,
      category: 'winter',
    },
    {
      id: 23,
      name: 'Sweater',
      stock: 5,
      added: 0,
      price: 900,
      description: 'size: 35, color: grey',
      image: Url.sweater.sweater3,
      category: 'winter',
    },
    {
      id: 24,
      name: 'Kurta',
      stock: 20,
      added: 0,
      price: 1000,
      description: 'size: 35, color: pink',
      image: Url.kurta.kurta3,
      category: 'summer',
    },
    {
      id: 25,
      name: 'pajama',
      stock: 10,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.pajama.pajama3,
      category: 'winter',
    },
    {
      id: 26,
      name: 't-shirt',
      stock: 10,
      added: 0,
      price: 500,
      description: 'size: 35, color: yellow',
      image: Url.tshirt.tshirt3,
      category: 'summer',
    },
    {
      id: 27,
      name: 'Cap',
      stock: 10,
      added: 0,
      price: 300,
      description: 'size: 10, color: white',
      image: Url.cap.cap3,
      category: 'summer',
    },
    {
      id: 28,
      name: 'sunglasses',
      stock: 10,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.sunglasses.sunglasses1,
      category: 'summer',
    },
    {
      id: 29,
      name: 't-shirt',
      stock: 10,
      added: 0,
      price: 500,
      description: 'size: 35, color: yellow',
      image: Url.tshirt.tshirt4,
      category: 'summer',
    },
    {
      id: 30,
      name: 'Cap',
      stock: 111,
      added: 0,
      price: 300,
      description: 'size: 10, color: white',
      image: Url.cap.cap4,
      category: 'summer',
    },
    {
      id: 31,
      name: 'Pant',
      stock: 10,
      added: 0,
      price: 1000,
      description: 'size: 35, color: brown',
      image: Url.pant.Pant4,
      category: 'summer',
    },
    {
      id: 32,
      name: 'Pant',
      stock: 10,
      added: 0,
      price: 1000,
      description: 'size: 35, color: brown',
      image: Url.pant.Pant5,
      category: 'summer',
    },
    {
      id: 33,
      name: 'Pant',
      stock: 10,
      added: 0,
      price: 1000,
      description: 'size: 35, color: brown',
      image: Url.pant.Pant6,
      category: 'summer',
    },
    {
      id: 34,
      name: 'Pant',
      stock: 10,
      added: 0,
      price: 1000,
      description: 'size: 35, color: brown',
      image: Url.pant.Pant7,
      category: 'summer',
    },
    {
      id: 35,
      name: 'Pant',
      stock: 10,
      added: 0,
      price: 1000,
      description: 'size: 35, color: brown',
      image: Url.pant.Pant9,
      category: 'summer',
    },
    {
      id: 36,
      name: 'Pant',
      stock: 10,
      added: 0,
      price: 1000,
      description: 'size: 35, color: brown',
      image: Url.pant.Pant10,
      category: 'summer',
    },
    {
      id: 37,
      name: 'Pant',
      stock: 10,
      added: 0,
      price: 1000,
      description: 'size: 35, color: brown',
      image: Url.pant.Pant8,
      category: 'summer',
    },
    {
      id: 38,
      name: 'Shirt',
      stock: 5,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.shirt.shirt4,
      category: 'summer',
    },
    {
      id: 39,
      name: 'Shirt',
      stock: 5,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.shirt.shirt5,
      category: 'summer',
    },
    {
      id: 40,
      name: 'Shirt',
      stock: 5,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.shirt.shirt6,
      category: 'summer',
    },
    {
      id: 41,
      name: 'Shirt',
      stock: 5,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.shirt.shirt7,
      category: 'summer',
    },
    {
      id: 42,
      name: 'Shirt',
      stock: 5,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.shirt.shirt8,
      category: 'summer',
    },
    {
      id: 43,
      name: 'Shirt',
      stock: 5,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.shirt.shirt9,
      category: 'summer',
    },
    {
      id: 44,
      name: 'Shirt',
      stock: 5,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.shirt.shirt10,
      category: 'summer',
    },
    {
      id: 45,
      name: 'Shoes',
      stock: 20,
      added: 0,
      price: 1100,
      description: 'size: 8, color: white',
      image: Url.shoes.shoes4,
      category: 'winter',
    },
    {
      id: 46,
      name: 'Shoes',
      stock: 20,
      added: 0,
      price: 1100,
      description: 'size: 8, color: white',
      image: Url.shoes.shoes5,
      category: 'winter',
    },
    {
      id: 47,
      name: 'Shoes',
      stock: 20,
      added: 0,
      price: 1100,
      description: 'size: 8, color: white',
      image: Url.shoes.shoes6,
      category: 'winter',
    },
    {
      id: 48,
      name: 'Shoes',
      stock: 20,
      added: 0,
      price: 1100,
      description: 'size: 8, color: white',
      image: Url.shoes.shoes7,
      category: 'winter',
    },
    {
      id: 49,
      name: 'Shoes',
      stock: 20,
      added: 0,
      price: 1100,
      description: 'size: 8, color: white',
      image: Url.shoes.shoes8,
      category: 'winter',
    },
    {
      id: 50,
      name: 'Shoes',
      stock: 20,
      added: 0,
      price: 1100,
      description: 'size: 8, color: white',
      image: Url.shoes.shoes9,
      category: 'winter',
    },
    {
      id: 51,
      name: 'Shoes',
      stock: 20,
      added: 0,
      price: 1100,
      description: 'size: 8, color: white',
      image: Url.shoes.shoes10,
      category: 'winter',
    },
    {
      id: 52,
      name: 'Jacket',
      stock: 10,
      added: 0,
      price: 3000,
      description: 'size: 35, color: black',
      image: Url.jacket.jacket4,
      category: 'winter',
    },
    {
      id: 53,
      name: 'Jacket',
      stock: 10,
      added: 0,
      price: 3000,
      description: 'size: 35, color: black',
      image: Url.jacket.jacket5,
      category: 'winter',
    },
    {
      id: 54,
      name: 'Jacket',
      stock: 10,
      added: 0,
      price: 3000,
      description: 'size: 35, color: black',
      image: Url.jacket.jacket6,
      category: 'winter',
    },
    {
      id: 55,
      name: 'Jacket',
      stock: 10,
      added: 0,
      price: 3000,
      description: 'size: 35, color: black',
      image: Url.jacket.jacket7,
      category: 'winter',
    },
    {
      id: 56,
      name: 'Jacket',
      stock: 10,
      added: 0,
      price: 3000,
      description: 'size: 35, color: black',
      image: Url.jacket.jacket8,
      category: 'winter',
    },
    {
      id: 57,
      name: 'Jacket',
      stock: 10,
      added: 0,
      price: 3000,
      description: 'size: 35, color: black',
      image: Url.jacket.jacket9,
      category: 'winter',
    },
    {
      id: 58,
      name: 'Jacket',
      stock: 10,
      added: 0,
      price: 3000,
      description: 'size: 35, color: black',
      image: Url.jacket.jacket10,
      category: 'winter',
    },
    {
      id: 59,
      name: 'Sweater',
      stock: 5,
      added: 0,
      price: 900,
      description: 'size: 35, color: grey',
      image: Url.sweater.sweater4,
      category: 'winter',
    },
    {
      id: 60,
      name: 'Sweater',
      stock: 5,
      added: 0,
      price: 900,
      description: 'size: 35, color: grey',
      image: Url.sweater.sweater5,
      category: 'winter',
    },
    {
      id: 61,
      name: 'Sweater',
      stock: 5,
      added: 0,
      price: 900,
      description: 'size: 35, color: grey',
      image: Url.sweater.sweater6,
      category: 'winter',
    },
    {
      id: 62,
      name: 'Sweater',
      stock: 5,
      added: 0,
      price: 900,
      description: 'size: 35, color: grey',
      image: Url.sweater.sweater7,
      category: 'winter',
    },
    {
      id: 63,
      name: 'Sweater',
      stock: 5,
      added: 0,
      price: 900,
      description: 'size: 35, color: grey',
      image: Url.sweater.sweater8,
      category: 'winter',
    },
    {
      id: 64,
      name: 'Sweater',
      stock: 5,
      added: 0,
      price: 900,
      description: 'size: 35, color: grey',
      image: Url.sweater.sweater9,
      category: 'winter',
    },
    {
      id: 65,
      name: 'Sweater',
      stock: 5,
      added: 0,
      price: 900,
      description: 'size: 35, color: grey',
      image: Url.sweater.sweater10,
      category: 'winter',
    },
    {
      id: 66,
      name: 'Kurta',
      stock: 20,
      added: 0,
      price: 1000,
      description: 'size: 35, color: pink',
      image: Url.kurta.kurta4,
      category: 'summer',
    },
    {
      id: 67,
      name: 'Kurta',
      stock: 20,
      added: 0,
      price: 1000,
      description: 'size: 35, color: pink',
      image: Url.kurta.kurta5,
      category: 'summer',
    },
    {
      id: 68,
      name: 'Kurta',
      stock: 20,
      added: 0,
      price: 1000,
      description: 'size: 35, color: pink',
      image: Url.kurta.kurta6,
      category: 'summer',
    },
    {
      id: 69,
      name: 'Kurta',
      stock: 20,
      added: 0,
      price: 1000,
      description: 'size: 35, color: pink',
      image: Url.kurta.kurta7,
      category: 'summer',
    },
    {
      id: 70,
      name: 'Kurta',
      stock: 20,
      added: 0,
      price: 1000,
      description: 'size: 35, color: pink',
      image: Url.kurta.kurta8,
      category: 'summer',
    },
    {
      id: 71,
      name: 'Kurta',
      stock: 20,
      added: 0,
      price: 1000,
      description: 'size: 35, color: pink',
      image: Url.kurta.kurta9,
      category: 'summer',
    },
    {
      id: 72,
      name: 'Kurta',
      stock: 20,
      added: 0,
      price: 1000,
      description: 'size: 35, color: pink',
      image: Url.kurta.kurta10,
      category: 'summer',
    },
    {
      id: 73,
      name: 'pajama',
      stock: 10,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.pajama.pajama4,
      category: 'winter',
    },
    {
      id: 74,
      name: 'pajama',
      stock: 10,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.pajama.pajama5,
      category: 'winter',
    },
    {
      id: 75,
      name: 't-shirt',
      stock: 10,
      added: 0,
      price: 500,
      description: 'size: 35, color: yellow',
      image: Url.tshirt.tshirt5,
      category: 'summer',
    },
    {
      id: 76,
      name: 'Cap',
      stock: 10,
      added: 0,
      price: 300,
      description: 'size: 10, color: white',
      image: Url.cap.cap5,
      category: 'summer',
    },
    {
      id: 77,
      name: 'sunglasses',
      stock: 10,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.sunglasses.sunglasses2,
      category: 'summer',
    },
    {
      id: 78,
      name: 'sunglasses',
      stock: 10,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.sunglasses.sunglasses3,
      category: 'summer',
    },
    {
      id: 79,
      name: 'sunglasses',
      stock: 10,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.sunglasses.sunglasses4,
      category: 'summer',
    },
    {
      id: 80,
      name: 'sunglasses',
      stock: 10,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.sunglasses.sunglasses5,
      category: 'summer',
    },
  ];
}

export default new ProductListStore();
