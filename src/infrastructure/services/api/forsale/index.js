import klaras from "../../../../images/klaras.jpg";
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
        value: "10x10 m³",
        satuan: "meter",
        icon: "fa fa-building-o fa-2x mr-2",
      },
      {
        id: "id-3",
        nama: "Bangunan",
        value: "65 m³",
        satuan: "meter",
        icon: "fa fa-home fa-2x mr-2",
      },
      {
        id: "id-4",
        nama: "Garasi",
        value: "4x2.5 m³",
        satuan: "meter",
        icon: "fa fa-car fa-2x mr-2",
      },
    ],
    keterangan:
      "There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable.",
    harga: "150.000.000",
    video: "12424",
    link_twitter: "",
    link_facebook: "",
    link_instagram: "",
  },
];

const Testimoni = [
  {
    judul: "Terbaik..",
    deskripsi:
      "Perumahan terbaik diantara perumahan subsidi lainnya yang ada di jawa barat, menawarkan view yang indah dan juga spek rumah yang tinggi",
    nama: "Octavian",
    pekerjaan: "Pegawai Swasta",
    image: "12523",
  },
  {
    judul: "Viewnya Keren banget..",
    deskripsi:
      "Perumahan terbaik diantara perumahan subsidi lainnya yang ada di jawa barat, menawarkan view yang indah dan juga spek rumah yang tinggi",
    nama: "Rini Oktaviani",
    pekerjaan: "Pegawai Swasta",
    image: "1258273",
  },
];

const forsale = {
  loadForSale: () => {
    return ForSaleData;
  },
  loadTestimoni: () => {
    return Testimoni;
  },
};

export default forsale;
