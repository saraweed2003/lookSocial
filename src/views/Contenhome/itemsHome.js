import { ref } from "vue";

export const exampleData = [
  {
    id: "01",
    image:
      "https://storage.googleapis.com/file-computeandmore/images/4489a63d-7cfb-49e7-8b28-afd980f95e0b.jpg",
    name: "อุปกรณ์คอมพิวเตอร์",
    detall: {
      id: "1",
      name: [
        {
          name: "คอม",
          type: [
            {
              name: "ALL IN ONE",
              user: "PEET",
              img: [
                "https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/0/20a0e3bd869c874bc9917ca8ac5fc044607ef60a_mkp0873894.jpegdummy_1.jpg",
                "https://s359.kapook.com//pagebuilder/245f66e4-3395-4145-b91a-ffd4aa07d030.jpg",
                "https://setting.ihavecpu.com/uploads/article/shop1/4421006153699338408688391.jpg",
                "https://media-cdn.bnn.in.th/120612/DELL-MONITOR-SE2422H-VA-75Hz-3-square_medium.jpg",
              ],
              location: "ออฟฟิศ",
              brand: "AC",
              comment: "เม้าสีเขียวไร้สาย รหัสA4347Z28",
              shop: "shopee",
              shopurl:
                "https://shopee.co.th/shop/308013524?af_siteid=an_15031090004&utm_campaign=-&utm_content=ssp-308013524_Adgroup3_Landingshop-SMS_SEM_Adhoc23_1304-skambaubarter-&utm_medium=affiliates&utm_source=an_15031090004",
              datebuy: "19/08/2023",
              price: "3000",
            },
            {
              name: "MAC",
              user: "PEEA",
              img: [
                "https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/0/20a0e3bd869c874bc9917ca8ac5fc044607ef60a_mkp0873894.jpegdummy_1.jpg",
                "https://s359.kapook.com//pagebuilder/245f66e4-3395-4145-b91a-ffd4aa07d030.jpg",
                "https://setting.ihavecpu.com/uploads/article/shop1/4421006153699338408688391.jpg",
                "https://media-cdn.bnn.in.th/120612/DELL-MONITOR-SE2422H-VA-75Hz-3-square_medium.jpg",
              ],
              location: "ออฟฟิศ",
              brand: "AC",
              comment: "เม้าสีเขียวไร้สาย รหัสA4347Z28",
              shop: "shopeeeeee",
              shopurl:
                "https://shopee.co.th/shop/308013524?af_siteid=an_15031090004&utm_campaign=-&utm_content=ssp-308013524_Adgroup3_Landingshop-SMS_SEM_Adhoc23_1304-skambaubarter-&utm_medium=affiliates&utm_source=an_15031090004",
              datebuy: "19/08/2023",
              price: "3000",
            },
            {
              name: "Minicomputer",
              user: "PEEQ",
              img: [
                "https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/0/20a0e3bd869c874bc9917ca8ac5fc044607ef60a_mkp0873894.jpegdummy_1.jpg",
                "https://s359.kapook.com//pagebuilder/245f66e4-3395-4145-b91a-ffd4aa07d030.jpg",
                "https://setting.ihavecpu.com/uploads/article/shop1/4421006153699338408688391.jpg",
                "https://media-cdn.bnn.in.th/120612/DELL-MONITOR-SE2422H-VA-75Hz-3-square_medium.jpg",
              ],
              location: "ออฟฟิศ",
              brand: "AC",
              comment: "เม้าสีเขียวไร้สาย รหัสA4347Z28",
              shop: "shopee",
              shopurl:
                "https://shopee.co.th/shop/308013524?af_siteid=an_15031090004&utm_campaign=-&utm_content=ssp-308013524_Adgroup3_Landingshop-SMS_SEM_Adhoc23_1304-skambaubarter-&utm_medium=affiliates&utm_source=an_15031090004",
              datebuy: "19/08/2023",
              price: "3000",
            },
            {
              name: "Minicomputermac",
              user: "PEEwhite",
              img: [
                "https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/0/20a0e3bd869c874bc9917ca8ac5fc044607ef60a_mkp0873894.jpegdummy_1.jpg",
                "https://s359.kapook.com//pagebuilder/245f66e4-3395-4145-b91a-ffd4aa07d030.jpg",
                "https://setting.ihavecpu.com/uploads/article/shop1/4421006153699338408688391.jpg",
                "https://media-cdn.bnn.in.th/120612/DELL-MONITOR-SE2422H-VA-75Hz-3-square_medium.jpg",
              ],
              location: "ออฟฟิศ",
              brand: "AC",
              comment: "เม้าสีเขียวไร้สาย รหัสA4347Z28",
              shop: "shopee",
              shopurl:
                "https://shopee.co.th/shop/308013524?af_siteid=an_15031090004&utm_campaign=-&utm_content=ssp-308013524_Adgroup3_Landingshop-SMS_SEM_Adhoc23_1304-skambaubarter-&utm_medium=affiliates&utm_source=an_15031090004",
              datebuy: "19/08/2023",
              price: "3000",
            },
          ],
        },

        {
          name: "จอคอม",
          nametype: [
            {
              name: "All IN ONE",
            },
          ],
          img: [
            "https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/0/20a0e3bd869c874bc9917ca8ac5fc044607ef60a_mkp0873894.jpegdummy_1.jpg",
            "https://s359.kapook.com//pagebuilder/245f66e4-3395-4145-b91a-ffd4aa07d030.jpg",
            "https://setting.ihavecpu.com/uploads/article/shop1/4421006153699338408688391.jpg",
            "https://media-cdn.bnn.in.th/120612/DELL-MONITOR-SE2422H-VA-75Hz-3-square_medium.jpg",
          ],
          location: "ออฟฟิศ",
          brand: "AC",
          comment: "เม้าสีเขียวไร้สาย รหัสA4347Z28",
          shop: "shopee",
          shopurl:
            "https://shopee.co.th/shop/308013524?af_siteid=an_15031090004&utm_campaign=-&utm_content=ssp-308013524_Adgroup3_Landingshop-SMS_SEM_Adhoc23_1304-skambaubarter-&utm_medium=affiliates&utm_source=an_15031090004",
          datebuy: "19/08/2023",
          price: "3000",
        },
        {
          name: "เมาส์",
          location: "ออฟฟิศ",
          brand: "AC",
          comment: "เม้าสีเขียวไร้สาย รหัสA4347Z28",
          shop: "shopee",
          shopurl:
            "https://shopee.co.th/shop/308013524?af_siteid=an_15031090004&utm_campaign=-&utm_content=ssp-308013524_Adgroup3_Landingshop-SMS_SEM_Adhoc23_1304-skambaubarter-&utm_medium=affiliates&utm_source=an_15031090004",
          datebuy: "19/08/2023",
          price: "3000",
        },
        {
          name: "คีย์บอร์ด",
          location: "ออฟฟิศ",
          brand: "AC",
          comment: "เม้าสีเขียวไร้สาย รหัสA4347Z28",
          shop: "shopee",
          shopurl:
            "https://shopee.co.th/shop/308013524?af_siteid=an_15031090004&utm_campaign=-&utm_content=ssp-308013524_Adgroup3_Landingshop-SMS_SEM_Adhoc23_1304-skambaubarter-&utm_medium=affiliates&utm_source=an_15031090004",
          datebuy: "19/08/2023",
          price: "3000",
        },
        {
          name: "สายพาวเวอร์คอม/จอ",
          location: "ออฟฟิศ",
          brand: "AC",
          comment: "เม้าสีเขียวไร้สาย รหัสA4347Z28",
          shop: "shopee",
          shopurl:
            "https://shopee.co.th/shop/308013524?af_siteid=an_15031090004&utm_campaign=-&utm_content=ssp-308013524_Adgroup3_Landingshop-SMS_SEM_Adhoc23_1304-skambaubarter-&utm_medium=affiliates&utm_source=an_15031090004",
          datebuy: "19/08/2023",
          price: "3000",
        },
        {
          name: "แผ่นรองเมาส์",
          location: "ออฟฟิศ",
          brand: "AC",
          comment: "เม้าสีเขียวไร้สาย รหัสA4347Z28",
          shop: "shopee",
          shopurl:
            "https://shopee.co.th/shop/308013524?af_siteid=an_15031090004&utm_campaign=-&utm_content=ssp-308013524_Adgroup3_Landingshop-SMS_SEM_Adhoc23_1304-skambaubarter-&utm_medium=affiliates&utm_source=an_15031090004",
          datebuy: "19/08/2023",
          price: "3000",
        },
        {
          name: "เคส",
          location: "ออฟฟิศ",
          brand: "AC",
          comment: "เม้าสีเขียวไร้สาย รหัสA4347Z28",
          shop: "shopee",
          shopurl:
            "https://shopee.co.th/shop/308013524?af_siteid=an_15031090004&utm_campaign=-&utm_content=ssp-308013524_Adgroup3_Landingshop-SMS_SEM_Adhoc23_1304-skambaubarter-&utm_medium=affiliates&utm_source=an_15031090004",
          datebuy: "19/08/2023",
          price: "3000",
        },
      ],
    },
  },
  {
    id: "02",
    image: "https://officework.co.th/upload/product/0733-0496-01.JPG",
    name: "อุปกรณ์ไฟฟ้า",
    detall: {
      id: "02",
      name: [
        {
          name: "ปลั๊ก3ตา1ช่อง15เมตร",
          img: [
            "https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/2/0/20a0e3bd869c874bc9917ca8ac5fc044607ef60a_mkp0873894.jpegdummy_1.jpg",
            "https://s359.kapook.com//pagebuilder/245f66e4-3395-4145-b91a-ffd4aa07d030.jpg",
            "https://setting.ihavecpu.com/uploads/article/shop1/4421006153699338408688391.jpg",
            "https://media-cdn.bnn.in.th/120612/DELL-MONITOR-SE2422H-VA-75Hz-3-square_medium.jpg",
          ],
          location: "ออฟฟิศ",
          brand: "AC",
          comment: "เม้าสีเขียวไร้สาย รหัสA4347Z28",
          shop: "shopee",
          shopurl:
            "https://shopee.co.th/shop/308013524?af_siteid=an_15031090004&utm_campaign=-&utm_content=ssp-308013524_Adgroup3_Landingshop-SMS_SEM_Adhoc23_1304-skambaubarter-&utm_medium=affiliates&utm_source=an_15031090004",
          datebuy: "19/08/2023",
          price: "3000",
        },
        {
          name: "ปลั๊ก3ตา2ช่อง10เมตร",
          location: "ออฟฟิศ",
          brand: "AC",
          comment: "เม้าสีเขียวไร้สาย รหัสA4347Z28",
          shop: "shopee",
          shopurl:
            "https://shopee.co.th/shop/308013524?af_siteid=an_15031090004&utm_campaign=-&utm_content=ssp-308013524_Adgroup3_Landingshop-SMS_SEM_Adhoc23_1304-skambaubarter-&utm_medium=affiliates&utm_source=an_15031090004",
          datebuy: "19/08/2023",
          price: "3000",
        },
        {
          name: "ปลั๊ก3ตา3ช่อง5เมตร",
          location: "ออฟฟิศ",
          brand: "AC",
          comment: "เม้าสีเขียวไร้สาย รหัสA4347Z28",
          shop: "shopee",
          shopurl:
            "https://shopee.co.th/shop/308013524?af_siteid=an_15031090004&utm_campaign=-&utm_content=ssp-308013524_Adgroup3_Landingshop-SMS_SEM_Adhoc23_1304-skambaubarter-&utm_medium=affiliates&utm_source=an_15031090004",
          datebuy: "19/08/2023",
          price: "3000",
        },
        {
          name: "ปลั๊ก3ตา4ช่อง15เมตร",
          location: "ออฟฟิศ",
          brand: "AC",
          comment: "เม้าสีเขียวไร้สาย รหัสA4347Z28",
          shop: "shopee",
          shopurl:
            "https://shopee.co.th/shop/308013524?af_siteid=an_15031090004&utm_campaign=-&utm_content=ssp-308013524_Adgroup3_Landingshop-SMS_SEM_Adhoc23_1304-skambaubarter-&utm_medium=affiliates&utm_source=an_15031090004",
          datebuy: "19/08/2023",
          price: "3000",
        },
        {
          name: "ปลั๊ก3ตา5ช่อง5เมตร",
          location: "ออฟฟิศ",
          brand: "AC",
          comment: "เม้าสีเขียวไร้สาย รหัสA4347Z28",
          shop: "shopee",
          shopurl:
            "https://shopee.co.th/shop/308013524?af_siteid=an_15031090004&utm_campaign=-&utm_content=ssp-308013524_Adgroup3_Landingshop-SMS_SEM_Adhoc23_1304-skambaubarter-&utm_medium=affiliates&utm_source=an_15031090004",
          datebuy: "19/08/2023",
          price: "3000",
        },
        {
          name: "ปลั๊ก2ตา1ช่อง5เมตร",
          location: "ออฟฟิศ",
          brand: "AC",
          comment: "เม้าสีเขียวไร้สาย รหัสA4347Z28",
          shop: "shopee",
          shopurl:
            "https://shopee.co.th/shop/308013524?af_siteid=an_15031090004&utm_campaign=-&utm_content=ssp-308013524_Adgroup3_Landingshop-SMS_SEM_Adhoc23_1304-skambaubarter-&utm_medium=affiliates&utm_source=an_15031090004",
          datebuy: "19/08/2023",
          price: "3000",
        },
        {
          name: "ปลั๊ก2ตา2ช่อง5เมตร",
          location: "ออฟฟิศ",
          brand: "AC",
          comment: "เม้าสีเขียวไร้สาย รหัสA4347Z28",
          shop: "shopee",
          shopurl:
            "https://shopee.co.th/shop/308013524?af_siteid=an_15031090004&utm_campaign=-&utm_content=ssp-308013524_Adgroup3_Landingshop-SMS_SEM_Adhoc23_1304-skambaubarter-&utm_medium=affiliates&utm_source=an_15031090004",
          datebuy: "19/08/2023",
          price: "3000",
        },
        {
          name: "ปลั๊ก2ตา3ช่อง5เมตร",
          location: "ออฟฟิศ",
          brand: "AC",
          comment: "เม้าสีเขียวไร้สาย รหัสA4347Z28",
          shop: "shopee",
          shopurl:
            "https://shopee.co.th/shop/308013524?af_siteid=an_15031090004&utm_campaign=-&utm_content=ssp-308013524_Adgroup3_Landingshop-SMS_SEM_Adhoc23_1304-skambaubarter-&utm_medium=affiliates&utm_source=an_15031090004",
          datebuy: "19/08/2023",
          price: "3000",
        },
        {
          name: "ปลั๊ก2ตา4ช่อง5เมตร",
          location: "ออฟฟิศ",
          brand: "AC",
          comment: "เม้าสีเขียวไร้สาย รหัสA4347Z28",
          shop: "shopee",
          shopurl:
            "https://shopee.co.th/shop/308013524?af_siteid=an_15031090004&utm_campaign=-&utm_content=ssp-308013524_Adgroup3_Landingshop-SMS_SEM_Adhoc23_1304-skambaubarter-&utm_medium=affiliates&utm_source=an_15031090004",
          datebuy: "19/08/2023",
          price: "3000",
        },
        {
          name: "ปลั๊ก2ตา5ช่อง5เมตร",
          location: "ออฟฟิศ",
          brand: "AC",
          comment: "เม้าสีเขียวไร้สาย รหัสA4347Z28",
          shop: "shopee",
          shopurl:
            "https://shopee.co.th/shop/308013524?af_siteid=an_15031090004&utm_campaign=-&utm_content=ssp-308013524_Adgroup3_Landingshop-SMS_SEM_Adhoc23_1304-skambaubarter-&utm_medium=affiliates&utm_source=an_15031090004",
          datebuy: "19/08/2023",
          price: "3000",
        },
        {
          name: 40,
        },
      ],
    },
  },
  {
    id: "02",
    image:
      "https://img2.biggo.com/slA7kW3DGEiOcJx3y4DcNEv33pvOfqBjlv98pe2IXkdQ/https://th-live-02.slatic.net/p/ea7e0997b775804b511d9aec42166f2c.jpg",
    name: "ชั้นเก็บของ",
    detall: {
      id: "03",
      name: [
        {
          name: "โต๊ะขาว",
          location: "ออฟฟิศ",
          brand: "AC",
          comment: "เม้าสีเขียวไร้สาย รหัสA4347Z28",
          shop: "shopee",
          shopurl:
            "https://shopee.co.th/shop/308013524?af_siteid=an_15031090004&utm_campaign=-&utm_content=ssp-308013524_Adgroup3_Landingshop-SMS_SEM_Adhoc23_1304-skambaubarter-&utm_medium=affiliates&utm_source=an_15031090004",
          datebuy: "19/08/2023",
          price: "3000",
        },
        {
          name: "โต๊ะไม้ขาเหล็ก",
          location: "ออฟฟิศ",
          brand: "AC",
          comment: "เม้าสีเขียวไร้สาย รหัสA4347Z28",
          shop: "shopee",
          shopurl:
            "https://shopee.co.th/shop/308013524?af_siteid=an_15031090004&utm_campaign=-&utm_content=ssp-308013524_Adgroup3_Landingshop-SMS_SEM_Adhoc23_1304-skambaubarter-&utm_medium=affiliates&utm_source=an_15031090004",
          datebuy: "19/08/2023",
          price: "3000",
        },
        {
          name: "โต๊ะไม้",
          location: "ออฟฟิศ",
          brand: "AC",
          comment: "เม้าสีเขียวไร้สาย รหัสA4347Z28",
          shop: "shopee",
          shopurl:
            "https://shopee.co.th/shop/308013524?af_siteid=an_15031090004&utm_campaign=-&utm_content=ssp-308013524_Adgroup3_Landingshop-SMS_SEM_Adhoc23_1304-skambaubarter-&utm_medium=affiliates&utm_source=an_15031090004",
          datebuy: "19/08/2023",
          price: "3000",
        },
        {
          name: "โต๊ะขาว",
          location: "ออฟฟิศ",
          brand: "AC",
          comment: "เม้าสีเขียวไร้สาย รหัสA4347Z28",
          shop: "shopee",
          shopurl:
            "https://shopee.co.th/shop/308013524?af_siteid=an_15031090004&utm_campaign=-&utm_content=ssp-308013524_Adgroup3_Landingshop-SMS_SEM_Adhoc23_1304-skambaubarter-&utm_medium=affiliates&utm_source=an_15031090004",
          datebuy: "19/08/2023",
          price: "3000",
        },
      ],
    },
  },
];
export const items = ref(exampleData);
console.log(items);
