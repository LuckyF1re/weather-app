
export type WeatherMainType = "Clear" | "Rain" | "Drizzle" | "Clouds" | "Snow"

export type WeatherType = {
    weather: [
        {
        main: WeatherMainType,
    },
        ]
    main: {
        temp: number,
        feels_like: number,
        pressure: number,
        humidity: number,
    },
    wind: {
        speed: number,
        deg: number,
    },
    name: string,
}

export type ListType = {
    dt: number,
    main: {
        temp_max: number,
        temp_min: number,
        feels_like?: number,
        pressure?: number,
        humidity?: number,
    },
    weather: [
        {
          main: string,
          description: string,
        },
    ],
    wind?: {
        speed: number,
        deg: number,
    }
}