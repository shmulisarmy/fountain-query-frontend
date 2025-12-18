import { live_db } from "./live_db_sdks/solid/live_db";
import { backend_base_url } from "./settings";
import { ws_url } from "./utils";
import Tree from "./tree";
export function Watch_query(props: {query: string}){
    const data = live_db(`${ws_url(backend_base_url)}/watch-query?query=${props.query}`);
  return (
    <div class=''>
        <h1>watching query: '{props.query}'</h1>
    <Tree data={data} />
    </div>
  )
}