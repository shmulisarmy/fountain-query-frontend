import { For, Show } from "solid-js";

function isObject(v: unknown): v is Record<string, unknown> {
  return v !== null && typeof v === "object" && !Array.isArray(v);
}

function Tree(props: { data: Record<string, unknown> }) {
  return (
    <ul class="pl-4 space-y-1 border-l border-gray-700">
      <For each={Object.entries(props.data)}>
        {([key, value]) => (
          <li class="flex flex-col">
            {/* label */}
            <div class="flex items-center space-x-2">
              <span class="text-blue-400 font-mono">{key}</span>

              <Show
                when={!isObject(value) && !Array.isArray(value)}
              >
                <span class="text-gray-400 font-mono">
                  : {String(value)}
                </span>
              </Show>
            </div>

            {/* nested object */}
            <Show when={isObject(value)}>
              <Tree data={value} />
            </Show>

            {/* nested array */}
            <Show when={Array.isArray(value)}>
              <ul class="pl-4 space-y-1 border-l border-gray-700">
                <For each={value}>
                  {(item, i) => (
                    <li class="flex flex-col">
                      <div class="text-gray-500 font-mono">
                        [{i()}]
                      </div>

                      <Show
                        when={isObject(item)}
                        fallback={
                          <div class="pl-4 text-gray-400 font-mono">
                            {String(item)}
                          </div>
                        }
                      >
                        <Tree data={item as Record<string, unknown>} />
                      </Show>
                    </li>
                  )}
                </For>
              </ul>
            </Show>
          </li>
        )}
      </For>
    </ul>
  );
}

export default Tree;
