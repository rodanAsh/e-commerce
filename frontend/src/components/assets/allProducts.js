let all_products = [
    {
        id : 1,
        name : "KOTTY Women Stretchable Regular Fit Sweatshirt",
        category : "women",
        image : "https://assets.ajio.com/medias/sys_master/root/20231123/rCVV/655f7c75afa4cf41f59b0b32/-473Wx593H-466821089-green-MODEL2.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 2,
        name : "DNMX Women Quilted Zip-Front Regular Fit Jacket",
        category : "women",
        image : "https://assets.ajio.com/medias/sys_master/root/20231005/mrgy/651ed3d0afa4cf41f52a227e/-1117Wx1400H-443015253-navy-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 3,
        name : "GAP Women Brand Print Relaxed Fit Round-Neck Sweatshirt",
        category : "women",
        image : "https://assets.ajio.com/medias/sys_master/root/20231124/YmHD/6560b565afa4cf41f59d1f39/-473Wx593H-442253180-purple-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 4,
        name : "FYRE ROSE Checked Slim Fit Double-Breasted Blazer",
        category : "women",
        image : "https://assets.ajio.com/medias/sys_master/root/20230911/Epao/64ff47b3afa4cf41f5d8d5f0/-1117Wx1400H-469495630-pink-MODEL5.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 5,
        name : "MARKS & SPENCER Solid Light Weight Wrap",
        category : "women",
        image : "https://assets.ajio.com/medias/sys_master/root/20231031/MVkA/6540e559ddf779151964c0a2/-1117Wx1400H-462914270-beige-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 6,
        name : "FIG Floral Print V-Neck Top",
        category : "women",
        image : "https://assets.ajio.com/medias/sys_master/root/20230213/ChYh/63ea1244f997dde6f4a03ca6/-1117Wx1400H-443007168-beige-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 7,
        name : "AARKE RITU KUMAR Embroidered Kurta & Pant Set",
        category : "women",
        image : "https://assets.ajio.com/medias/sys_master/root/20231127/y9JD/6564ad2eafa4cf41f5a3d001/-1117Wx1400H-410334695-chocolatebrown-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 8,
        name : "FYRE ROSE Women Relaxed Fit Cardigan",
        category : "women",
        image : "https://assets.ajio.com/medias/sys_master/root/20231019/vs6c/65313eedafa4cf41f5506431/-1117Wx1400H-469507533-white-MODEL4.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 9,
        name : "LC WAIKIKI Turtle-Neck Sheath Dress with Puff Sleeves",
        category : "women",
        image : "https://assets.ajio.com/medias/sys_master/root/20221205/Zag0/638e0446aeb269659cd10d3a/-1117Wx1400H-469395469-bordeaux-MODEL2.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 10,
        name : "JANASYA Fit & Flare Dress with Batik Print Dupatta",
        category : "women",
        image : "https://assets.ajio.com/medias/sys_master/root/20230621/fK6V/6492573742f9e729d7626c77/-1117Wx1400H-463843256-black-MODEL2.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 11,
        name : "WOMEN TOUCH Floral Print Fit & Flare Dress",
        category : "women",
        image : "https://assets.ajio.com/medias/sys_master/root/20230602/S2lg/6479501dd55b7d0c633acc4e/-1117Wx1400H-461655083-black-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 12,
        name : "KOTON Checked Shirt with Spread Collar",
        category : "women",
        image : "https://assets.ajio.com/medias/sys_master/root/20220915/4Pcn/632223f2f997dd1f8dffbc31/-1117Wx1400H-469292681-purple-MODEL2.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 13,
        name : "DNMX Men Printed Slim Fit Shirt",
        category : "men",
        image : "https://assets.ajio.com/medias/sys_master/root/20230630/2E5F/649ef8e3a9b42d15c92dbb1c/-1117Wx1400H-443016515-green-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 14,
        name : "GAP Regular Fit Cotton Crew-Neck T-Shirt",
        category : "men",
        image : "https://assets.ajio.com/medias/sys_master/root/20230831/482v/64f0a8bfafa4cf41f59b1cf1/-1117Wx1400H-442111596-black-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 15,
        name : "FORCE Men Geometric Print Regular Fit Shirt",
        category : "men",
        image : "https://assets.ajio.com/medias/sys_master/root/20231116/PUPm/65554b10afa4cf41f58afbf0/-1117Wx1400H-466800479-white-MODEL2.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 16,
        name : "KOTON Checked Shirt with Spread Collar",
        category : "men",
        image : "https://assets.ajio.com/medias/sys_master/root/20221110/YOkr/636d290caeb269659c85ac44/-1117Wx1400H-469388409-orange-MODEL2.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 17,
        name : "BUDA JEANS CO Overdyed Structure Crew-Neck Pullover",
        category : "men",
        image : "https://assets.ajio.com/medias/sys_master/root/20221012/MXKQ/63466e6daeb269659c3f7ef1/-1117Wx1400H-469168405-denimblue-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 18,
        name : "BRITISH CLUB Windowpane Checks Slim Fit 60'S Giza Cotton Shirt",
        category : "men",
        image : "https://assets.ajio.com/medias/sys_master/root/20230512/DaVj/645d39b342f9e729d77aa8d8/-1117Wx1400H-469506557-green-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 19,
        name : "SNITCH Fogey Checked Slim Fit Shirt",
        category : "men",
        image : "https://assets.ajio.com/medias/sys_master/root/20231127/lxta/6564723eddf77915199f79e5/-1117Wx1400H-466828055-purple-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 20,
        name : "CAMPUS SUTRA Zip-Front Bomber Jacket",
        category : "men",
        image : "https://assets.ajio.com/medias/sys_master/root/20230624/e4ea/649663cfeebac147fcf20ce0/-1117Wx1400H-465324816-tan-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 21,
        name : "JOHN PLAYERS JEANS Slim Fit Zip-Front Jacket with Mock Collar",
        category : "men",
        image : "https://assets.ajio.com/medias/sys_master/root/20221006/4SPI/633eec8ff997ddfdbd099b94/-1117Wx1400H-441139786-olive-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 22,
        name : "NETPLAY Regular Fit Micro Print Polo T-Shirt",
        category : "men",
        image : "https://assets.ajio.com/medias/sys_master/root/20220620/aY61/62b084f3f997dd03e290796a/-1117Wx1400H-441144816-navy-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 23,
        name : "SUPERDRY Core Logo Classic T-Shirt",
        category : "men",
        image : "https://assets.ajio.com/medias/sys_master/root/20231111/PFSM/654f9ffeafa4cf41f5843447/-1117Wx1400H-410408519-3ko-MODEL2.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 24,
        name : "SNITCH Spritz Tie & Dye Regular Fit Overshirt",
        category : "men",
        image : "https://assets.ajio.com/medias/sys_master/root/20231205/oN6i/656e5296ddf7791519b168f3/-1117Wx1400H-466854056-yellow-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 25,
        name : "ZALIO Embroidered Full-Sleeve Shirt Dress",
        category : "kids",
        image : "https://assets.ajio.com/medias/sys_master/root/20230624/yqy7/6496a12aeebac147fcf974f8/-1117Wx1400H-465543380-blue-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 26,
        name : "ZALIO Girls Minnie Mouse Print Dungaree with T-Shirt",
        category : "kids",
        image : "https://assets.ajio.com/medias/sys_master/root/20231101/pjDt/6541ffb3ddf77915196742ad/-1117Wx1400H-466762507-seagreen-MODEL3.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 27,
        name : "JACK & JONES Boys Colourblock Regular Fit Bomber Jacket",
        category : "kids",
        image : "https://assets.ajio.com/medias/sys_master/root/20231107/3yIQ/654a2143afa4cf41f57a7d4f/-1117Wx1400H-469356997-multicolor-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 28,
        name : "HELLCAT Typographic Print High-Neck Hoodie",
        category : "kids",
        image : "https://assets.ajio.com/medias/sys_master/root/20230624/tWci/6496357fa9b42d15c9d66ac2/-1117Wx1400H-465168671-green-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 29,
        name : "NICK & JONES Quilted Jacket with Slip Pockets",
        category : "kids",
        image : "https://assets.ajio.com/medias/sys_master/root/20220721/fczj/62d97546f997dd03e2e783e3/-1117Wx1400H-469258100-maroon-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 30,
        name : "GINI & JONY Printed Hoodie with Ribbed Hem",
        category : "kids",
        image : "https://assets.ajio.com/medias/sys_master/root/20231006/SPAc/652020f5ddf7791519265471/-1117Wx1400H-469245928-maroon-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 31,
        name : "BIO KID Boys Full-Sleeves Blazer with Button-Closure",
        category : "kids",
        image : "https://assets.ajio.com/medias/sys_master/root/20231105/mj4Y/65479905afa4cf41f57544de/-1117Wx1400H-466776037-blue-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 32,
        name : "ZALIO Denim Jacket with Buttoned Flap Pockets",
        category : "kids",
        image : "https://assets.ajio.com/medias/sys_master/root/20230918/jwpi/650852fdafa4cf41f5edc83a/-1117Wx1400H-466594876-blue-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 33,
        name : "NICK & JONES Colourblock Zip-Front Jacket",
        category : "kids",
        image : "https://assets.ajio.com/medias/sys_master/root/20230630/WLCT/649ecea2eebac147fc4357be/-1117Wx1400H-469495446-airforce-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 34,
        name : "GAP KIDS Denim Shirt with Patch Pocket",
        category : "kids",
        image : "https://assets.ajio.com/medias/sys_master/root/20230526/EbQc/6470a758d55b7d0c63169248/-1117Wx1400H-442031434-denimblue-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 35,
        name : "GAS Lanzo IN Ombre-Dyed Cotton Shirt",
        category : "kids",
        image : "https://assets.ajio.com/medias/sys_master/root/20220728/xxTZ/62e2a29cf997dd03e2030854/-1117Wx1400H-410317161-0028-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    },
    {
        id : 36,
        name : "SKY PEARL Boy Regular Fit Checked Spread-Collar Shirt",
        category : "kids",
        image : "https://assets.ajio.com/medias/sys_master/root/20231013/lN7p/65294780ddf779151939f09a/-1117Wx1400H-466704307-navy-MODEL.jpg",
        new_price : 85.00,
        old_price : 120.00
    }
]

export default all_products