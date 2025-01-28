import { Trips, ListTrips } from "../list-trips"

export type ReqSearchTrips = {
    keyword: string
}
export type ResSearchTrips = {
    trips: Trips[]
}

export async function SearchTrips({ keyword }: ReqSearchTrips): Promise<ResSearchTrips> {
    const regex = new RegExp(keyword)
    const list = await ListTrips()
    const matches = list.trips.filter((obj) => {
        return regex.test(obj.title) || regex.test(obj.description) || obj.tags.findIndex((tag) => regex.test(tag)) !== -1
    })
    return {
        trips: matches
    }
}