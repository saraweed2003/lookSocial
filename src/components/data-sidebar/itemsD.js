import { ref } from "vue";

export const exampleData = [
  {
    id: "01",
    image:
      "https://storage.googleapis.com/file-computeandmore/images/4489a63d-7cfb-49e7-8b28-afd980f95e0b.jpg",
    name: "จอคอม",
    color: "ดำ",
    detail: "ขนาด 24 นิ้ว",
    brands: "DELL",
    status: "create",
    username_create: "User",
    username_update: "User",
    created_At: "22/08/2023 10:45",
    updated_At: "22/08/2023 10:45",
  },

  {
    id: "02",
    image:
      "https://www.dohome.co.th/media/catalog/product/cache/e446f15aaa8dc66b80b7a0df334f7c5a/1/0/10371913_ea_1200_2.png",
    name: "คีย์บอร์ด",
    color: "ดำ",
    detail: "-",
    brands: "Lenovo",
    status: "update",
    username_create: "User",
    username_update: "Sarayut",
    created_At: "23/08/2023 11:30",
    updated_At: "23/08/2023 11:30",
  },
  {
    id: "03",
    image:
      "https://img2.biggo.com/slA7kW3DGEiOcJx3y4DcNEv33pvOfqBjlv98pe2IXkdQ/https://th-live-02.slatic.net/p/ea7e0997b775804b511d9aec42166f2c.jpg",
    name: "เมาส์",
    color: "ดำ",
    detail: "-",
    brands: "acer",
    status: "delete",
    username_create: "User",
    username_update: "sarawut",
    created_At: "24/08/2023 12:15",
    updated_At: "24/08/2023 12:15",
  },
  {
    id: "04",
    image:
      "https://original.co.th/wp-content/uploads/2016/03/HP-Laserjet-Pro-M15W-Printer.jpg",
    name: "เครื่องปริ้น",
    color: "ขาว",
    detail: "-",
    brands: "HP",
    status: "create",
    username_create: "Sarayut",
    username_update: "User",
    created_At: "25/08/2023 13:00",
    updated_At: "25/08/2023 13:00",
  },
  {
    id: "05",
    image: "https://officework.co.th/upload/product/0733-0496-01.JPG",
    name: "ปลั๊กไฟ",
    color: "ขาว",
    detail: "-",
    brands: "CSC",
    status: "create",
    username_create: "Sarawut",
    username_update: "User",
    created_At: "26/08/2023 14:45",
    updated_At: "26/08/2023 14:45",
  },
  {
    id: "06",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/2/IG/KS/SE/161907/hp-pavilion-laptop-500x500.jpg",
    name: "Laptop",
    color: "ขาว",
    detail: "-",
    brands: "HP",
    status: "create",
    username_create: "Sarawut",
    username_update: "User",
    created_At: "27/08/2023 15:30",
    updated_At: "27/08/2023 15:30",
  },
];

export const items = ref(exampleData);
console.log(items);
