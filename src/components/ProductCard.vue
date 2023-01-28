<template>
    <div class="product-card">
        <slot name="picture-product"></slot>
        <slot name="title-product"></slot>
        <slot name="body-product"></slot>
        
        <div class="price-product-card">
            <slot name="price-product"></slot>
        </div>
        

    </div>
</template>

<style scoped>
.product-card{
    min-height: 250px;
    width: 450px;
    background-color: rgb(255, 255, 255);
    border-radius: 2px;
    border: solid 2px rgb(234, 191, 252);
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    padding: 24px;
    gap: 16px;
    box-shadow: 4px 4px 2px  rgb(207, 226, 255);
}
.p, .product-card{
    text-align: left;
}
.price-product-card {
    font-weight: 600;
    border: solid 1px;
    padding: 12px;
    box-shadow: 2px 2px 2px  rgba(0, 0, 0, 2);
}
</style>