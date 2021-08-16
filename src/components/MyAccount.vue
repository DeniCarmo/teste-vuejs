<template>
    <div class="account" @mouseenter="accountModal = true" @mouseleave="accountModal = false">
        <div class="account-content">
            <i class="account-icon">
                <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                        <path d="M9.24404 10.839C9.95719 10.8489 10.6648 10.7131 11.3237 10.44C11.9826 10.167 12.5789 9.76242 13.076 9.25105C13.5872 8.75379 13.9916 8.15749 14.2645 7.49861C14.5374 6.83974 14.673 6.13212 14.663 5.41905C14.6729 4.7059 14.5371 3.99824 14.264 3.33936C13.991 2.68048 13.5864 2.08422 13.075 1.58705C12.5719 1.08382 11.9746 0.684633 11.3172 0.412284C10.6598 0.139934 9.95514 -0.000244141 9.24355 -0.000244141C8.53195 -0.000244141 7.82732 0.139934 7.16991 0.412284C6.51249 0.684633 5.91517 1.08382 5.41205 1.58705C4.9008 2.0841 4.49629 2.6802 4.22325 3.3389C3.95021 3.9976 3.81437 4.70506 3.82404 5.41805C3.81424 6.1312 3.95001 6.83885 4.22305 7.49773C4.4961 8.15662 4.90068 8.75288 5.41205 9.25005C5.90917 9.76155 6.5054 10.1663 7.16428 10.4395C7.82315 10.7127 8.53083 10.8487 9.24404 10.839ZM6.34405 2.52005C6.7248 2.13907 7.17688 1.83685 7.67448 1.63065C8.17207 1.42445 8.70542 1.31832 9.24404 1.31832C9.78267 1.31832 10.316 1.42445 10.8136 1.63065C11.3112 1.83685 11.7633 2.13907 12.144 2.52005C12.5331 2.89462 12.8406 3.34559 13.0471 3.84464C13.2536 4.3437 13.3547 4.88006 13.344 5.42005C13.3547 5.96003 13.2536 6.4964 13.0471 6.99545C12.8406 7.49451 12.5331 7.94548 12.144 8.32005C11.7633 8.70103 11.3112 9.00325 10.8136 9.20944C10.316 9.41564 9.78267 9.52177 9.24404 9.52177C8.70542 9.52177 8.17207 9.41564 7.67448 9.20944C7.17688 9.00325 6.7248 8.70103 6.34405 8.32005C5.9549 7.94551 5.64741 7.49455 5.4409 6.99549C5.23439 6.49642 5.13332 5.96004 5.14404 5.42005C5.13332 4.88005 5.23439 4.34367 5.4409 3.84461C5.64741 3.34554 5.9549 2.89458 6.34405 2.52005Z" fill="#363636"/>
                        <path d="M18.726 17.301C18.6908 16.8241 18.6301 16.3494 18.544 15.879C18.4588 15.3955 18.3419 14.9182 18.194 14.45C18.0445 13.9866 17.8475 13.5399 17.606 13.117C17.3683 12.6911 17.0699 12.302 16.72 11.962C16.3515 11.6155 15.9192 11.3438 15.447 11.162C14.9288 10.9623 14.3774 10.8626 13.822 10.868C13.4978 10.9028 13.1913 11.033 12.941 11.242C12.677 11.414 12.368 11.613 12.023 11.834C11.6505 12.0567 11.2518 12.2323 10.836 12.357C9.89453 12.669 8.87752 12.669 7.93603 12.357C7.52058 12.2324 7.1222 12.0568 6.75003 11.834C6.40903 11.616 6.10003 11.417 5.83203 11.242C5.5821 11.0331 5.27587 10.903 4.95203 10.868C4.39665 10.8624 3.84524 10.9622 3.32703 11.162C2.85482 11.3436 2.42245 11.6153 2.05403 11.962C1.70421 12.302 1.40574 12.6911 1.16803 13.117C0.925503 13.5405 0.727448 13.9878 0.577026 14.452C0.429241 14.9202 0.312323 15.3975 0.227026 15.881C0.140827 16.3514 0.080072 16.8261 0.0450257 17.303C0.0150257 17.733 2.57206e-05 18.18 2.57206e-05 18.632C-0.0232141 19.1547 0.0635831 19.6764 0.254796 20.1634C0.44601 20.6504 0.737376 21.0918 1.11003 21.459C1.88803 22.1704 2.91572 22.5453 3.96903 22.502H14.8C15.8533 22.5453 16.881 22.1704 17.659 21.459C18.0317 21.0919 18.3231 20.6504 18.5143 20.1634C18.7056 19.6764 18.7923 19.1547 18.769 18.632C18.769 18.179 18.754 17.732 18.724 17.303L18.726 17.301ZM16.753 20.501C16.4888 20.7373 16.1806 20.919 15.8459 21.0357C15.5113 21.1524 15.1568 21.2018 14.803 21.181H3.96903C3.61529 21.2019 3.2609 21.1527 2.92625 21.0362C2.59161 20.9196 2.28329 20.7381 2.01903 20.502C1.77695 20.2572 1.58942 19.9639 1.46878 19.6414C1.34813 19.319 1.2971 18.9746 1.31903 18.631C1.31903 18.209 1.33303 17.793 1.36103 17.393C1.39301 16.9637 1.44809 16.5364 1.52603 16.113C1.60071 15.6868 1.70326 15.2659 1.83303 14.853C1.95466 14.4762 2.11485 14.113 2.31103 13.769C2.48572 13.4548 2.705 13.1674 2.96203 12.916C3.20757 12.6872 3.49523 12.5082 3.80903 12.389C4.14066 12.2621 4.49199 12.1944 4.84703 12.189C4.89303 12.214 4.97503 12.26 5.10903 12.347C5.38003 12.524 5.69203 12.725 6.03803 12.947C6.5049 13.2304 7.00547 13.4542 7.52803 13.613C8.73436 14.0111 10.0367 14.0111 11.243 13.613C11.7659 13.4542 12.2668 13.2305 12.734 12.947C13.087 12.721 13.391 12.525 13.662 12.347C13.795 12.26 13.877 12.213 13.924 12.189C14.2794 12.1944 14.6311 12.2621 14.963 12.389C15.2766 12.5081 15.5643 12.6867 15.81 12.915C16.0672 13.1667 16.2865 13.4543 16.461 13.769C16.6573 14.1129 16.8175 14.4762 16.939 14.853C17.0692 15.2658 17.1721 15.6867 17.247 16.113C17.3248 16.5368 17.3799 16.9644 17.412 17.394C17.44 17.794 17.454 18.208 17.454 18.631C17.476 18.9746 17.4249 19.319 17.3043 19.6414C17.1836 19.9639 16.9961 20.2572 16.754 20.502L16.753 20.501Z" fill="#363636"/>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="18.772" height="22.5" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </i>
            <div class="account-details">
                <span class="account-title">Seja bem-vindo(a)!</span>
                <span class="account-subtitle">
                    <a href="/" class="account-link">Entre</a> ou 
                    <a href="/" class="account-link">Cadastre-se</a>
                </span>
            </div>
        </div>

        <transition mode="out-in">
            <div class="account-modal--wrapper" v-if="accountModal">
                <div class="account-modal">
                    <div class="account-modal-header">
                        <span class="account-modal-title">
                            Faça seu login
                        </span>
                    </div>

                    <div class="account-modal-content">
                        <input type="text" name="login" id="login" class="account-modal-input" placeholder="Seu e-mail">
                        <input type="password" name="password" id="password" class="account-modal-input" placeholder="Senha">
                        <button type="submit" class="account-modal-submit">Entrar</button>
                        <span class="account-modal-registration">
                            Não possui uma conta? <a href="#" class="account-modal-registration__link">Registrar</a>
                        </span>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default{
    name: 'MyAccount',
    data(){
        return{
            accountModal: false
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../_main.scss';

.account{
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;

    &:before{
        content: '';
        width: 100%;
        height: 7px;
        position: absolute;
        top: 100%;
        left: 0;
    }

    .account{

        &-content{
            display: flex;
            align-items: flex-end;
            justify-content: flex-start;
        }

        &-icon{
            width: 100%;
            max-width: 24px;
            height: auto;
            margin-right: 8px;

            svg{
                width: 24px;
                height: 24px;
                display: block;
                @include svg-color($black);
            }
        }

        &-details{
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
            flex-flow: column;
        }

        &-title{
            @include text(12, 14, 400, $text-bg6, $font-family);
            display: block;
            margin-top: 1px;
        }

        &-subtitle{
            @include text(12, 14, 400, $text-bg6, $font-family);
            display: block;
            margin-top: 1px;
        }

        &-link{
            @include text(12, 14, 700, $text-bg6, $font-family);
            @include no-mouse-effects;

            &:hover{
                color: $text-bg6 !important;
                text-decoration: underline !important;
            }
        }

        &-modal{
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-flow: column;
            border-radius: 4px 4px 0 0;
            background: $text-bg11;
            position: relative;

            &:before{
                content: '';
                width: 100%;
                max-width: 14px;
                min-width: 14px;
                height: auto;
                max-height: 14px;
                min-height: 14px;
                background-color: $text-bg7;
                position: absolute;
                left: 50%;
                top: 0;
                transform: matrix(0.71, -0.49, 1.02, 0.71, 0, 0) translateY(-7px);
                z-index: 15;
            }

            &--wrapper{
                width: 100%;
                max-width: 280px;
                min-width: 280px;
                height: auto;
                padding-top: 7px;
                position: absolute;
                top: calc(100% + 3px);
                left: calc(-50%);
                z-index: 2;
            }

            &-header{
                width: 100%;
                height: auto;
                min-height: 48px;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                padding-left: 15px;
                border-radius: 4px 4px 0 0;
                background-color: $text-bg7;
            }

            &-title{
                @include text(16, 19, 400, $white, $font-family);
            }

            &-content{
                width: 100%;
                height: auto;
                min-height: 252px;
                display: flex;
                flex-flow: column;
                align-items: center;
                justify-content: flex-start;
                padding-top: 24px;
                background-color: $white;
            }

            &-input{
                @include text(12, 14, 400, $text-bg9, $font-family);
                width: 100%;
                max-width: 250px;
                height: auto;
                min-height: 34px;
                background-color: $text-bg8;
                border: 1px solid $text-bg10;
                border-radius: 4px;
                text-indent: 15px;
                
                &::placeholder, &::-moz-placeholder, &::-webkit-input-placeholder{
                    @include text(12, 14, 400, $text-bg9, $font-family);
                }

                &:first-child{
                    margin-bottom: 16px;
                }
            }

            &-submit{
                @include text(14, 14, 700, $white, $font-family);
                width: 100%;
                max-width: 250px;
                height: auto;
                min-height: 26px;
                text-transform: uppercase;
                margin-top: 82px;
                border: none;
                background-color: $text-bg1;
            }

            &-registration{
                @include text(12, 12, 400, $text-bg9, $font-family);
                width: 100%;
                max-width: 250px;
                display: block;
                margin-top: 8px;
                text-align: left;

                &__link{
                    @include text(12, 12, 700, $text-bg9, $font-family);
                    @include no-mouse-effects;

                    &:hover{
                        color: $text-bg9 !important;
                        text-decoration: underline !important;
                    }
                }
            }
        }
    }
}

.v-enter, .v-leave-to{
    opacity: 0;
}

.v-enter{
    transform: translate3d(0, -20px, 0);
}

.v-leave-to{
    transform: translate3d(0, 20px, 0);
}

.v-enter-active, .v-leave-active{
    transition: all .5s;
}
</style>