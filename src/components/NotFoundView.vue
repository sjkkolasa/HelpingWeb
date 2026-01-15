<template>
    <div class="has-text-centered">
        <h3 class="text-color-primary mb-1">404: Page Not Found</h3>
        <h4 id="return">Return to <router-link to="/">homepage</router-link></h4>
    </div>
    
</template>

<style lang="scss">
@import '../../public/constants.scss';

#return {
    color: $bodyText;
    a {
        color: $primary;
        text-decoration: underline;
    }
}

</style>