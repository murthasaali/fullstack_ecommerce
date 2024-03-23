/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'parrot':"url('https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/item-categories%2F68M3H4%2Fmedia%2FL5UMDRW7PZCV')",
        'health':"url('https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/item-categories%2F4R3D64%2Fmedia%2FL5UMDFSVOL21')",
        'grooming':"url('https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/item-categories%2F8G8PZ4%2Fmedia%2FL5UMEBVOU86A')",
        'toys':"url('https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/item-categories%2F3SSJ0W%2Fmedia%2FL5UMAF8DEMAV')",
        'graph':"url('https://t4.ftcdn.net/jpg/06/30/38/81/240_F_630388183_oqW9fiHeISVJ20hy03s9WA4UamoQygVg.jpg')",
        'picture':"url('https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')"
      }
    },
  },

}