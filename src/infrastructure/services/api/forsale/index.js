import klaras from "../../../../images/klaras.jpg";
import coming_soon from "../../../../images/coming_soon.png";
const ForSaleData = [
  {
    id: "idfs-1",
    gambar: klaras,
    nama: "Klaras Cimanggung Hills",
    alamat: "Cimanggung, parakan muncang",
    spesifikasi: [
      {
        id: "id-1",
        nama: "Kamar Tidur",
        value: "2",
        satuan: "Ruangan",
        icon: "fa fa-bed fa-2x mr-2",
      },
      {
        id: "id-2",
        nama: "Ruang Tengah",
        value: "10x10 ㎡",
        satuan: "meter",
        icon: "fa fa-building-o fa-2x mr-2",
      },
      {
        id: "id-3",
        nama: "Bangunan",
        value: "63 ㎡",
        satuan: "meter",
        icon: "fa fa-home fa-2x mr-2",
      },
      {
        id: "id-4",
        nama: "Garasi",
        value: "4x2.5 ㎡",
        satuan: "meter",
        icon: "fa fa-car fa-2x mr-2",
      },
    ],
    keterangan:
      "Rumah bergaya minimalis dengan suasana pegunungan yang sejuk dan asri, ditambah dengan pemandangan kota bandung yang indah dapat terlihat dari halaman rumah anda, ditambah dengan lingkungan yang nyaman dan aman dipantau dengan CCTV 24 jam dan security",
    harga: "150.500.000",
    video: "https://www.youtube.com/watch?v=qvym_f8uA0I",
    link_twitter: "",
    link_facebook: "",
    link_instagram: "",
    status: "FOR SALE",
  },
  {
    id: "idfs-2",
    gambar: coming_soon,
    nama: "Klaras Cimanggung Hills 2 - Comming Soon",
    alamat: "Cimanggung, parakan muncang",
    spesifikasi: [
      {
        id: "id-1",
        nama: "Kamar Tidur",
        value: "2",
        satuan: "Ruangan",
        icon: "fa fa-bed fa-2x mr-2",
      },
      {
        id: "id-2",
        nama: "Ruang Tengah",
        value: "10x10 ㎡",
        satuan: "meter",
        icon: "fa fa-building-o fa-2x mr-2",
      },
      {
        id: "id-3",
        nama: "Bangunan",
        value: "63 ㎡",
        satuan: "meter",
        icon: "fa fa-home fa-2x mr-2",
      },
      {
        id: "id-4",
        nama: "Garasi",
        value: "4x2.5 ㎡",
        satuan: "meter",
        icon: "fa fa-car fa-2x mr-2",
      },
    ],
    keterangan:
      "Rumah bergaya minimalis dengan suasana pegunungan yang sejuk dan asri, ditambah dengan pemandangan kota bandung yang indah dapat terlihat dari halaman rumah anda, ditambah dengan lingkungan yang nyaman dan aman dipantau dengan CCTV 24 jam dan security",
    harga: "-",
    video: "https://www.youtube.com/watch?v=qvym_f8uA0I",
    link_twitter: "",
    link_facebook: "",
    link_instagram: "",
    status: "COMING SOON",
  },
];

const forsale = {
  loadForSale: () => {
    return ForSaleData;
  },
};

export default forsale;
