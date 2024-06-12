import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        {
            name: "Mango",
            url: "/images/mango.jpg",
            price: 5,
            id: 92435436
        },
        {
            name: "Watermelon",
            url: "/images/watermelon.jpg",
            price: 7,
            id: 56083749
        },
    ]
}

export const fruits = createSlice({
    name: "fruits",
    initialState
})

export default fruits.reducer