
let Vue
const install= (_vue)=>{
    Vue = _vue
    Vue.mixin({ beforeCreate() {
        if(this.$options.store){
            Vue.prototype.$store = this.$options.store
        }
    } })
}

class Store{
    constructor(options){
        this._vm = new Vue({
            data:{
                $$state:options.state,
            }
        });
        this._mutations = options.mutations;
        this._actions = options.actions;
        this.commit = this.commit.bind(this);
        this.dispatch = this.dispatch.bind(this);
        this.getters = {};
        options.getters && this.handleGetters(options.getters)
    }
    handleGetters(getters){
        Object.keys(getters).map((key)=>{
            Object.defineProperty(this.getters,key,{
                get: ()=>getters[key](this.state)
            })
        })
    }
    get state(){
        return this._vm._data.$$state;
    }
    set state(v){
        console.error("不能直接使用",v)
    }
    commit(type,payload){
        const entry = this._mutations[type]
        if(entry){
            entry(this.state,payload)
        }
    }
    dispatch(type,payload){
        const entry = this._actions[type]
        if(entry){
            entry(this.state,payload)
        }
    }
}
export default {Store,install}