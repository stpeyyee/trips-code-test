export type Trips = {
    title: string
    eid: string
    url: string
    description: string
    photos: string[]
    tags: string[]
}
export type ResListTrips = { 
    trips: Trips[] 
}
export async function ListTrips(): Promise<ResListTrips> {
    let list = fetch(`http://localhost:9000/trips`)
        .then((response) => response.text())
        .then((body) => {
            return {
                trips: JSON.parse(body)
            }
        });
    return list
}

