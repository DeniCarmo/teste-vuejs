<template>
    <div class="search-container col-12 col-xl-6">
        <form class="search">
            <input type="text" name="search" id="search" class="search-input">
            <button class="search-button">
                <i class="search-button__icon">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="black"/>
                    </svg>
                </i>
            </button>
        </form>
    </div>
</template>

<script>
export default{
    name: 'Search'
}
</script>

<style lang="scss" scoped>
@import '../main.scss';

.search{
    width: 100%;
    max-width: 563px;
    height: auto;
    position: relative;

    &-container{
        width: 100%;
        height: auto;
    }

    .search{

        &-input{
            @include text(12, 14, 400, $text-bg9, $font-family);
            width: 100%;
            height: auto;
            min-height: 34px;
            background-color: $text-bg3;
            border: 1px solid $text-bg4;
            border-radius: 4px;
                text-indent: 15px;

            &::placeholder, &::-moz-placeholder, &::-webkit-input-placeholder{
                @include text(12, 14, 400, $text-bg9, $font-family);
            }
        }
    
        &-button{
            width: 18px;
            height: 18px;
            border: none;
            background: none;
            position: absolute;
            top: 50%;
            right: 20px;
            transform: translate3d(0, -50%, 0);
            z-index: 2;
            @include no-mouse-effects;
    
            &__icon{
                display: block;
    
                svg{
                    @include svg-color($black);
                }
            }
        }
    }
}
</style>