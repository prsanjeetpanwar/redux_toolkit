import {configureStore} from '@reduxjs/toolkit'
import  userDetails  from '../features/userDeatailsSlice'

export const store=configureStore({

   reducer:{
    app:userDetails
   } 
})

