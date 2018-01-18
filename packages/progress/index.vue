<template>
    <div class="s-progress">
        <span class="s-progress__portion" :style="portionStyle"></span>
        <span class="s-progress__pivot" v-show="showPivot" :style="pivotStyle">{{pivotText}}</span>
    </div>
</template>
<script>
import {create} from '../utils'; 
export default create({
    name: "s-progress",
    props: {
        inactive: Boolean,
        percentage: {
            type: Number,
            required: true,
            validator: value => value >=0 && value <= 100
        },
        showPivot: {
            type: Boolean,
            default: true
        },
        pivotText: {
            type: String,
            default() {
                return this.percentage + '%';
            }
        },
        color: {
            type: String,
            default: '#38f'
        },
        textColor: {
            type: String,
            default: '#fff'
        }
    },
    computed: {
        bgColor () {
            return this.inactive ? '#cacaca' : this.color;
        },
        pivotStyle () {
            const {percentage} = this;
            return {
                color: this.textColor,
                backgroundColor: this.bgColor,
                left: percentage <= 5 ? '0%' : percentage >= 95 ? '100%' : percentage + '%',
                marginLeft: percentage <= 5 ? '0' : percentage >= 95 ? '-28px' : '-14px'
            }
        },
        portionStyle() {
            return {
                width: this.percentage + '%',
                backgroundColor: this.bgColor 
            };
        }
    }
})
</script>
<style lang="css">
</style>
