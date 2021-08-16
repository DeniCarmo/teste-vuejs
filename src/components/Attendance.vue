<template>
    <div class="attendance" @mouseenter="attendanceModal = true" @mouseleave="attendanceModal = false">
        <div class="attendance-content">
            <i class="attendance-icon">
                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0C4.03 0 0 4.03 0 9V16C0 17.66 1.34 19 3 19H6V11H2V9C2 5.13 5.13 2 9 2C12.87 2 16 5.13 16 9V11H12V19H16V20H9V22H15C16.66 22 18 20.66 18 19V9C18 4.03 13.97 0 9 0Z" fill="#363636"/>
                </svg>
            </i>
            <p class="attendance-title">Atendimento</p>
        </div>

        <transition mode="out-in">
            <div v-if="attendanceModal" class="attendance-modal">
                <ul class="attendance-list">
                    <li class="attendance-item">
                        <i class="attendance-item__icon">
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.01 12.8654C15.78 12.8654 14.59 12.6654 13.48 12.3054C13.13 12.1854 12.74 12.2754 12.47 12.5454L10.9 14.5154C8.07 13.1654 5.42 10.6154 4.01 7.68535L5.96 6.02535C6.23 5.74535 6.31 5.35535 6.2 5.00535C5.83 3.89535 5.64 2.70535 5.64 1.47535C5.64 0.935352 5.19 0.485352 4.65 0.485352H1.19C0.65 0.485352 0 0.725352 0 1.47535C0 10.7654 7.73 18.4854 17.01 18.4854C17.72 18.4854 18 17.8554 18 17.3054V13.8554C18 13.3154 17.55 12.8654 17.01 12.8654Z" fill="white"/>
                            </svg>
                        </i>
                        <div class="attendance-item__content">
                            <span class="attendance-item__title">(18) 3636-3636</span>
                            <span class="attendance-item__subtitle">Seg a sexta, 8h às 18h</span>
                        </div>
                    </li>

                    <li class="attendance-item">
                        <i class="attendance-item__icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                    <path d="M11.573 0.485354H11.567C9.43472 0.484091 7.34363 1.07244 5.52486 2.18537C3.70608 3.2983 2.23046 4.89246 1.26111 6.79165C0.291748 8.69083 -0.133593 10.8211 0.0321002 12.9469C0.197793 15.0727 0.948066 17.1113 2.19999 18.8374L0.760985 23.1354L5.20799 21.7134C6.71373 22.7054 8.43053 23.3316 10.2213 23.5422C12.0122 23.7528 13.8274 23.5418 15.5222 22.9261C17.2169 22.3104 18.7443 21.307 19.9824 19.9961C21.2205 18.6852 22.1349 17.1029 22.6528 15.3758C23.1707 13.6486 23.2776 11.8243 22.9651 10.0484C22.6526 8.27253 21.9293 6.59431 20.8528 5.1477C19.7764 3.70109 18.3767 2.52613 16.7655 1.71663C15.1543 0.907122 13.3761 0.485479 11.573 0.485354ZM18.305 16.8244C18.0711 17.2478 17.746 17.6139 17.3532 17.8964C16.9605 18.1788 16.5099 18.3704 16.034 18.4574C15.434 18.5864 14.64 18.6884 11.981 17.5864C9.63776 16.4397 7.64744 14.6819 6.21999 12.4984C5.43451 11.4921 4.95729 10.28 4.84599 9.00835C4.83123 8.48161 4.92933 7.9578 5.13372 7.47211C5.33811 6.98641 5.64404 6.55006 6.03099 6.19235C6.35705 5.90665 6.78089 5.75796 7.21399 5.77735C7.35699 5.77735 7.48599 5.78435 7.60199 5.79035C7.94199 5.80435 8.11299 5.82535 8.33699 6.36135C8.61599 7.03435 9.29599 8.69435 9.37699 8.86135C9.43416 8.95435 9.46842 9.05961 9.47694 9.16845C9.48546 9.27729 9.468 9.38659 9.42599 9.48735C9.33078 9.68362 9.20411 9.86299 9.05099 10.0184C8.87999 10.2184 8.71799 10.3654 8.55099 10.5764C8.39499 10.7604 8.21799 10.9564 8.41499 11.2964C8.92332 12.1615 9.5557 12.9476 10.292 13.6294C11.0809 14.3542 11.9997 14.9236 13 15.3074C13.1332 15.3705 13.2823 15.392 13.4279 15.369C13.5735 15.346 13.7088 15.2795 13.816 15.1784C14.1372 14.7947 14.4376 14.3941 14.716 13.9784C14.7984 13.8409 14.929 13.7389 15.0824 13.6923C15.2358 13.6458 15.401 13.6579 15.546 13.7264C15.858 13.8344 17.512 14.6524 17.851 14.8214C18.19 14.9904 18.415 15.0734 18.497 15.2164C18.5883 15.7596 18.522 16.3176 18.306 16.8244H18.305Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="23.141" height="23.141" fill="white" transform="translate(0 0.485352)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </i>
                        <a :href="whatsappLink" class="attendance-item__content" target="_blank">
                            <span class="attendance-item__title">{{ whatsapp | phoneFormat }}</span>
                            <span class="attendance-item__subtitle">Seg a sexta, 8h às 18h</span>
                        </a>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
export default{
    name: 'Attendance',
    data(){
        return{
            attendanceModal: false,
            whatsapp: '18996969696'
        }
    },
    computed:{
        whatsappLink(){
            return `https://api.whatsapp.com/send?phone=${this.whatsapp}&text=ola`
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../_main.scss';

.attendance{
    display: flex;
    position: relative;
    cursor: pointer;

    .attendance{

        &-content{
            display: flex;
            align-items: flex-end;
            justify-content: flex-start;
        }

        &-icon{
            width: 100%;
            max-width: 24px;
            height: auto;
            max-height: 24px;
            margin-right: 10px;

            svg{
                width: 24px;
                height: 24px;
                @include svg-color($black);
            }
        }

        &-title{
            @include text(12, 14, 400, $text-bg6, $font-family);
        }

        &-modal{
            width: 100%;
            max-width: 190px;
            min-width: 190px;
            height: auto;
            display: flex;
            background: transparent;
            padding-top: 6px;
            position: absolute;
            top: 100%;
            left: calc(-50%);
            z-index: 2;
        }

        &-list{
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-flow: column;
            background: $text-bg5;
            padding: 16px 19px 38px 18px;
            position: relative;

            &:before{
                content: '';
                width: 12px;
                height: 12px;
                background: $text-bg5;
                transform: rotate(45deg) translate3d(-50%, 0, 0);
                position: absolute;
                top: 0;
                left: 50%;
            }
        }

        &-item{
            display: flex;
            align-items: center;
            justify-content: flex-start;

            &:first-child{
                margin-bottom: 25px;
            }

            &__icon{
                width: 18px;
                height: 18px;
                display: block;
                margin-right: 10px;

                svg{
                    width: 18px;
                    height: 18px;
                    @include svg-color($white);
                }
            }

            &__content{
                display: flex;
                align-items: flex-start;
                flex-flow: column;
                @include no-mouse-effects;
            }

            &__title{
                @include text(16, 19, 400, $white, $font-family);
                display: block;
                margin-bottom: 3.5px;
            }

            &__subtitle{
                @include text(12, 14, 400, $white, $font-family);
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