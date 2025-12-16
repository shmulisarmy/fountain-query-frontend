import { live_db } from "./live_db_sdks/solid/live_db"
import { backend_base_url } from "./settings"

export type Person={
  name:string
  email:string
  age:number
  id:number
  todos:{[key: string]: {
      title:string
      name:string
    }}
  profile_picture:string
}



export const people = live_db<Person>(`ws://${backend_base_url}/stream-data`);
