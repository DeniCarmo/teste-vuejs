<template>
    <header class="header">
        <div class="container">
            <div class="row">
                <a href="/" class="logo col-12 col-lg-2 col-xl-2">
                    <img src="@/assets/logo.png" alt="wap.store">
                    <h1 class="logo-title">wap.store</h1>
                </a>
                <Search/>
                <div class="header-user-components d-none d-xl-flex col-xl-4">
                    <Attendance/>
                    <MyAccount/>
                    <Cart/>
                </div>
            </div>
        </div>
        <nav class="header-nav">

        </nav>
    </header>
</template>

<script>
import Search from '@/components/Search.vue';
import Attendance from '@/components/Attendance.vue';
import MyAccount from '@/components/MyAccount.vue';
import Cart from '@/components/Cart.vue';

export default{
    name: 'TheHeader',
    components:{
        Search,
        Attendance,
        MyAccount,
        Cart
    }
}
</script>

<style scoped lang="scss">
@import '../_main.scss';

.header{
    width: 100%;
    height: auto;
    background: $white;
    padding-top: 48px;

    .header{

        &-user-components{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
}

.logo{
    width: 100%;
    max-width: 180px;
    height: auto;

    img{
        width: 100%;
        height: auto;
        display: block;
    }

    &-title{
        display: none;
    }
}

.nav{

}
</style>