export default {
    // //无异步操作和批量同步操作可以不通过actions
    // actions: {
    //     changeHotCity(ctx, city) {
    //         ctx.commit('changeHotCity', city);
    //     }
    // },
    changeHotCity(state, city) {
        state.city = city;
        try {
        localStorage.city = city;
        } catch (e) { }
    }
}