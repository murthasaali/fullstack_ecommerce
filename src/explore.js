import React from 'react'

function Explore() {
    const brands = [
        'https://cms-www.chewy.com/contentAsset/image/9ae719ca-6b4d-4881-9e82-c06553a8f49d/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/220/resize_h/220/2021-10-Disney_Logo-1500x1500.jpg',
        'https://cms-www.chewy.com/contentAsset/image/2c66b647-1723-491c-9054-a0086d2049e2/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/220/resize_h/220/2021-10-Hills_Logo-1500x1500.jpg',
        'https://cms-www.chewy.com/contentAsset/image/14788760-b482-4e73-b352-0bb81c5ff7cd/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/220/resize_h/220/2021-10-Royal-Canin_Logo-1500x1500.jpg',
        'https://cms-www.chewy.com/contentAsset/image/f1f58db8-1377-45bd-b015-27c66fa86af9/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/220/resize_h/220/2023-04-NonSku-Recipe1-BrandLogo-Iams.jpg',
        'https://cms-www.chewy.com/contentAsset/image/db227f02-96bb-4dd6-a9af-7db4bfa88d5a/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/220/resize_h/220/2022-09-Autoship-Update-ShopBrands-Recipe1-3-BlueBuffalo.jpg',
        'https://cms-www.chewy.com/contentAsset/image/ba300fae-dd54-41b3-ba2f-12f42aa89c5a/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/220/resize_h/220/Frisco-by-Chewy-Logo-HP.jpg',
        'https://cms-www.chewy.com/contentAsset/image/545f4077-e1ee-4416-afdd-a21b0f36c6d6/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/220/resize_h/220/2021-10-NexGard_Logo-1500x1500.jpg',
        'https://cms-www.chewy.com/contentAsset/image/c3ae4ef3-775a-4368-be5d-9d59de8613a5/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/220/resize_h/220/2023-04-NonSku-Recipe1-BrandLogo-Sheba.jpg',
        'https://cms-www.chewy.com/contentAsset/image/3de8f0dc-15a3-484c-bee0-9b49b2257491/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/220/resize_h/220/AJ-Square.jpg',
        'https://cms-www.chewy.com/contentAsset/image/7d498372-fe99-43ba-b565-00fbfa7f9350/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/220/resize_h/220/2021-10-Greenies_Logo-1500x1500.jpg',
        'https://cms-www.chewy.com/contentAsset/image/f4cd2224-8b01-4318-9379-bd71ca8f8616/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/220/resize_h/220/2022-10-Vibeful_Logo-1500x1500.png',
        'https://cms-www.chewy.com/contentAsset/image/e6d44796-10b0-4b17-a13c-e25404056f2d/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/220/resize_h/220/2021-10-Purina-Pro_Logo-1500x1500.jpg',
      ];
  return (
    <div className='w-full  bg-stone-200 p-5 '>
        <div >
            <p className='text-bold text-3xl '>
                3500+ Brands in stock!
            </p>
        <div >
            <p className=''>
                <a>shop all</a>
            </p>
        </div>
        </div>
        <div className="grid grid-cols-6 gap-4 p-2  ">
      {brands.map((brand, index) => (
        <div
          key={index}
          className="w-52 h-52 bg-green-200 rounded-lg shadow-2xl"
        >
          <img className='w-full h-full' src={brand}/>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Explore