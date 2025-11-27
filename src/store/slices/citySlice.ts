import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {storage} from "../../model/Storage.ts";
import {CITIES} from "../../constants/cities.ts";

type CityState = {
    value: string,
    label: string,
};

const getInitialCity = (): CityState => {
    try {
        const savedCity = storage.getItem("city");
        if (savedCity) {
            const itemSelect = CITIES.find((city) => city.value === savedCity);
            return {
                value: itemSelect?.value || "Minsk",
                label: itemSelect?.label || "Минск",
            }
        }
    } catch (error) {
            console.log(error)
        }

    return {
        value: "Minsk",
        label: "Минск",
    }
}

const initialState: CityState = getInitialCity()

export const citySlice = createSlice({
    name: 'city',
    initialState: initialState,
    reducers: {
        setCity: (state, action: PayloadAction<CityState>) => {
            state.value = action.payload.value;
            state.label = action.payload.label;
        }
    },
})

export const { setCity } = citySlice.actions;
export default citySlice.reducer;