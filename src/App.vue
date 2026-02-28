<template>
    <div>
        <!-- <div id="banner">
            <div id="banner-columns" class="columns is-centered mx-2">
                <div id="banner-column" class="column is-two-thirds has-text-light has-text-weight-bold">
                    <div id="title">
                        <h1>Helping Web</h1>
                    </div>
                </div>
            </div>
        </div> -->

        <img src=./assets/Helping_Web_Logo_Horizontal_smaller.png alt="Helping Web Logo">

        <div class="divider"></div>

        <!-- <div id="nav" class="is-centered my-5">
            <div class="columns is-centered navbar">
                <div class="column is-two-fifths p-0 m-1">
                    <div id="nav-columns" class="columns is-centered has-text-centered my-3">
                        <div id="home-column" class="column mx-5 nav-column">
                            <RouterLink to="/" class="button nav-button">
                                Home
                            </RouterLink>
                        </div>
                        <div id="page2-column" class="column mx-5 nav-column">
                            <RouterLink to="/page2" class="button nav-button">
                                Page2
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        
        <RouterView v-slot="{ Component }">
            <Transition :name="state.justReloaded ? 'noTransition' : 'route' " mode="out-in">
                <component :is="Component"></component>
            </Transition>
        </RouterView>
    </div>
</template>


<script setup>

// Import state.
import { state } from './stores/store.js'

</script>

<style lang="scss">
@import '../public/constants.scss';

html {
    background-image: url('./assets/white-site-background.webp');
}

html, body {
  overflow-x: hidden;
}
body {
  position: relative
}

// #banner {
//     background-image: url('./assets/blue-header-background-darker.png');
//     background-repeat: no-repeat;
//     background-size: cover;
// }

.navbar {
    background-color: $navbar;
}

.nav-button {
    font-size: 1.3rem;
    color: $bodyText;
    background-color: $secondary;
    width: 15rem;
    border: none;
    font-weight: 500;
}

.nav-button:hover {
    color: $bodyTextHover;
    background-color: $secondaryHover;
}

.nav-button.router-link-exact-active {
    color: $primary;
}

.nav-button.router-link-exact-active:hover {
    color: $primaryHover;
}

// @media screen and (min-width: 675px) {

//     #banner {
//         white-space: nowrap;
//     }

// }

.route-enter-from  {
    opacity: 0;
    transform: translateX(30px); 
}

.route-enter-active, .route-leave-active {
    transition: all .25s ease;
}

.route-leave-to {
    opacity: 0; 
    transform: translateX(-30px); 
}

</style>
