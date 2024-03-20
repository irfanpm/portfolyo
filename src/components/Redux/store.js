"use client"
import portfolioData  from "./Axiose";
const { configureStore } = require("@reduxjs/toolkit");
export const store=configureStore({
    reducer:{
       data:portfolioData
    },
    
})

