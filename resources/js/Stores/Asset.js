import { defineStore } from 'pinia'
import {_} from 'lodash'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useAssetStore = defineStore('assets', {

  // other options..
  // calling all the assets here.
  state:()=>( {assets:[
                        {name:'Asset 1',id:'1',location: "Kilimani Hurlingham", description:'Description 1'},
                        {name:'Asset 2',id:'2' ,location:"Riverside Road Lantana",description:'Description 2'},
                        {name:'Asset 3',id:'3',location :"Westlands Wood Avenue",description:'Description 3'},

                        ],

              }),

  //comouted properties of an asset
  getters: {
             //_.filter(state.assets,{id:i})



    //   doubleCount: (state) => state.count * 2,
      },

    //methods of the asset (mutating state)
    actions: {
         filteredAssets: (i)=>{console.log(
            assets
            //_.filter(state.assets,{id:i})

         )}
    },
})


// export const useCounterStore = defineStore('counter', {
//     state: () => ({ count: 0, name: 'Eduardo' }),

//   })
