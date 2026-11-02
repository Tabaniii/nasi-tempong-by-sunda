// Replace illustrative prices and details with the restaurant's approved menu before public launch.
export const business = {
 name: 'Nasi Tempong By SUNDA',
 maps: 'https://maps.app.goo.gl/kwy4hHadA1THNMEBA',
 address: 'Jl. Taman Setia Budi II, RT.1/RW.2, Kuningan, Setia Budi, Jakarta Selatan 12910',
 whatsapp: '' as string,
};
export const rupiah = (n:number) => 'Rp '+n.toLocaleString('id-ID');
export const categories = ['Nasi Tempong Spesial','Masakan Sunda','Sambal Dadak','Minuman Segar'];
export type Dish={name:string;price:number;category:number;description:string;tag:string;heat:number;image:string;position:string;alt:string};
const hero='/images/hero.webp';
const spread='/images/spread.webp';
const sunda='/images/sunda.webp';
export const dishes: Dish[] = [
 {name:'Tempong Bebek Goreng',price:38000,category:0,description:'Bebek ungkep rempah, digoreng garing. Jodohnya sambal tempong segar.',tag:'Jagoan Dapur',heat:2,image:hero,position:'duck',alt:'Penyajian bebek goreng, nasi dan sambal tempong'},
 {name:'Tempong Ayam Kampung',price:32000,category:0,description:'Ayam kampung gurih sampai ke tulang. Lengkap dengan lalapan renyah.',tag:'Paket Komplit',heat:2,image:spread,position:'chicken',alt:'Ilustrasi sajian ayam goreng dan lalapan Indonesia'},
 {name:'Tempong Gurame Goreng',price:42000,category:0,description:'Gurame goreng renyah, daging lembut. Dicocol sambal? Makin juara.',tag:'Gurih & Renyah',heat:1,image:spread,position:'fish',alt:'Ilustrasi gurame goreng dengan lalapan segar'},
 {name:'Tempong Cumi Asin',price:35000,category:0,description:'Cumi asin tumis yang gurihnya pas. Nasi hangat wajib nambah.',tag:'Bikin Nagih',heat:3,image:spread,position:'squid',alt:'Ilustrasi cumi tumis dan sambal Indonesia'},
 {name:'Sayur Asem',price:12000,category:1,description:'Kuah asem segar dengan jagung dan sayuran. Penyeimbang si pedas.',tag:'Segar Rumahan',heat:0,image:sunda,position:'soup',alt:'Ilustrasi sayur asem rumahan'},
 {name:'Karedok Sunda',price:18000,category:1,description:'Sayuran mentah renyah, bumbu kacang kencur yang wangi.',tag:'Favorit Sunda',heat:1,image:sunda,position:'vegetable',alt:'Ilustrasi sayuran dan hidangan khas Sunda'},
 {name:'Pepes Ikan',price:25000,category:1,description:'Ikan berbumbu rempah dan kemangi, dikukus dalam daun pisang.',tag:'Wangi Rempah',heat:1,image:sunda,position:'pepes',alt:'Pepes ikan dalam daun pisang'},
 {name:'Tahu Tempe Bacem',price:10000,category:1,description:'Manis gurih meresap, digoreng hangat. Teman setia setiap suapan.',tag:'Teman Makan',heat:0,image:sunda,position:'tofu',alt:'Tahu tempe dengan sajian nasi tempong'},
 ...[1,2,3].map((n)=>({name:'Sambal Dadak Level '+n,price:5000,category:2,description:['Pedas santai, rasa tetap ramai. Cabai segar diulek saat dipesan.','Pedas nampol dengan tomat ranti dan terasi. Siap bikin nagih.','Pedas berani buat pencinta sambal sejati. Siapkan es tehmu!'][n-1],tag:['Ramah di Lidah','Pedas Nampol','Super Pedas'][n-1],heat:n,image:hero,position:'sambal',alt:'Sambal tempong merah segar dalam cobek batu'})),
 {name:'Es Jeruk Kelapa',price:18000,category:3,description:'Jeruk peras dan kelapa muda. Segar yang meredakan si pedas.',tag:'Segar Alami',heat:0,image:spread,position:'drink',alt:'Ilustrasi minuman jeruk dingin dengan kelapa'},
 {name:'Es Teh Manis',price:6000,category:3,description:'Teh seduh wangi, manisnya pas, esnya melimpah. Klasik selalu asyik.',tag:'Teman Si Pedas',heat:0,image:spread,position:'tea',alt:'Ilustrasi es teh manis dingin'},
];
export const packages=[
 {name:'Paket Hemat',subtitle:'Sederhana, tetap istimewa.',price:25000,minimum:20,items:['Nasi putih hangat','Ayam goreng rempah','Tahu / tempe & lalapan','Sambal dadak pilihan']},
 {name:'Paket Komplit',subtitle:'Porsi puas buat semua.',price:35000,minimum:20,items:['Nasi putih hangat','Ayam kampung goreng','Tahu, tempe & sayur asem','Sambal dadak & lalapan','Air mineral & alat makan']},
 {name:'Paket Istimewa',subtitle:'Untuk momen yang lebih spesial.',price:45000,minimum:15,items:['Nasi putih hangat','Bebek goreng rempah','Tahu, tempe & tumis sayur','Sambal dadak & lalapan','Buah, air mineral & alat makan']},
];
