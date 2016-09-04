import {Vue} from 'vue/types/vue'
import {VNode, VNodeData} from 'vue/types/vnode'

export {PropOptions} from 'vue/types/options'
import {ComponentOptions} from 'vue/types/options'
import {PropOptions} from 'vue/types/options'

export {ComponentOptions} from 'vue/types/options'

export type Hash<V> = {[k: string]: V}
export type VClass<T extends Vue> = {new(): T} & (typeof Vue)

export interface DecoratorPorcessor {
  (proto: Vue, instance: Vue, options: ComponentOptions): void
}

export type $$Prop = string & {'$$Prop Brand': never}

export interface ComponentMeta {
  directive?: Hash<string>,
  components?: Hash<VClass<Vue>>,
  functionals?: Hash<FunctionalProps<{}>>,
  filters?: {},
  name?: string,
  delimiter?: [string, string],
}

interface ContextObject<T> {
  readonly props: T;
  readonly children: VNode[];
  readonly slots: Hash<VNode>;
  readonly data: VNodeData;
  readonly parent: VNode;
}
export type RenderFunc<T> = (
  this: never,
  h: typeof Vue.prototype.$createElement,
  context: ContextObject<T>
) => VNode

type Class = {new(...args: {}[]): {}}

export interface FunctionalProps<T> {
  props?: {[key: string]: PropOptions | Class | Class[] }
  functional: true,
  render: RenderFunc<T>
}
