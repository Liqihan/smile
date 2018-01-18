<template>
    <div class="s-progress">
        <span class="s-progress__portion" :style="portionStyle"></span>
        <span class="s-progress__pivot" v-show="showPivot" :style="pivotStyle">{{pivotText}}</span>
    </div>
</template>
<script>
import {create} '../utils'; 
export default {
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
        pivotStyle () {
            const {percentage} = this;
            return {
                color: this.textColor,
                backgroundColor: this.inactive ? '#cacaca' : this.color,
                left: percentage <= 5 ? '0%' : percentage >= 95 ? '100%' : percentage + '%',
                marginLeft: percentage <= 5 ? '0' : percentage >= 95 ? '-28px' : '-14px'
            }
        },
        portionStyle() {
            return {
                width: this.percentage + '%',
                backgroundColor: this.inactive ? '#cacaca' : this.color
            };
        }
    }
}
</script>
<style lang="css">
</style>
