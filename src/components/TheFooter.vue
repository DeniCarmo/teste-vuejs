<template>
    <footer class="footer">
        <i class="footer-icon">
            <svg width="41" height="33" viewBox="0 0 41 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.557 5.29119L35.1281 0L40.3875 8.68608L36.2109 7.66335L30.0656 32.2869H22.6477L17.9789 18.3097H17.9016L13.5984 32.2869H4.54219L0 14.3892H6.85547L9.25312 23.8849H9.33047L13.7531 9.17614H21.4875L25.9172 22.0241H25.9945L29.9883 6.13636L26.557 5.29119Z" fill="white"/>
            </svg>
        </i>
    </footer>
</template>

<script>
export default{
    name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
@import '../_main.scss';

.footer{
    width: 100%;
    height: auto;
    min-height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $text-bg1;
    position: relative;

    .footer{

        &-icon{
            width: 40px;
            height: 32px;
            display: block;

            svg{
                width: 40px;
                height: 32px;
                @include svg-color($white);
            }
        }
    }
}
</style>