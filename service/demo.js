module.exports = { 
    async home(ctx) {
        ctx.body = `Hello ${ctx.name}`;
    }
};