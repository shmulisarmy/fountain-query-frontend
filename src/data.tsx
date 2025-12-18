import { live_db } from "./live_db_sdks/solid/live_db"
import { backend_base_url } from "./settings"
import { ws_url } from "./utils"

// 

type Person={
  name:string
  email:string
  age:number
  id:number
  profile_picture:string
  todos:{[key: string]: {
      title:string
      name:string
      id:number
    }}
}


export const people = live_db<Person>(`${ws_url(backend_base_url)}/stream-data`);
