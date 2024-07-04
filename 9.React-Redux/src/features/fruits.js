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
    initialState,
    reducers: {

    },
    extraReducers: {
        ["fruitsCart/addOne"]: (state, action) => {
            console.log("Hello from fruits reducer");
        },
        ["fruitsCart/removeOne"]: (state, action) => {
            console.log("Good Bye from fruits reducer");
        }
        // Les actions déclenchent tous les reducers
    }
})

export default fruits.reducer