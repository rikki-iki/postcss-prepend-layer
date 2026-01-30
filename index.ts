import { type PluginCreator, AtRule } from "postcss"

interface PrependLayerOptions {
  layers: string[]
}

const prependLayer: PluginCreator<PrependLayerOptions> = (opts?: PrependLayerOptions) => {
  if (!opts || !opts.layers) {
    throw new Error('postcss-prepend-layer: "layers" option is required')
  }

  const params = opts.layers.join(", ")

  return {
    postcssPlugin: "postcss-prepend-layer",
    Once(root) {
      root.prepend(
        new AtRule({
          name: "layer",
          params,
        }),
      )
    },
  }
}

prependLayer.postcss = true

export default prependLayer
