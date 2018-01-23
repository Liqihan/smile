<template>
    <div class="s-tabs" :class="[`s-tabs--${type}`]">
        <div
            ref="wrap"
            class="s-tabs__wrap"
            :class="[`s-tabs__wrap--${position}`, {
                's-tabs--scrollable': scrollable,
                's-hairline--top-bottom': type === 'line'
            }]"
        >
            <div class="s-tabs__nav" :class="`s-tabs__nav--${type}`" ref="nav">
                <div v-if="type === 'line'" class="s-tabs__nav-bar" :style="navBarStyle" />
                <div
                    v-for="(tab, index) in tabs"
                    :key="index"
                    ref="tabs"
                    class="s-tab"
                    :class="{
                        's-tab--active': index === curActive,
                        's-tab--disabled': tab.disabled
                    }"
                    @click="onClick(index)"
                    >
                    <span>{{ tab.title }}</span>
                </div>
            </div>
        </div>
         <div class="s-tabs__content">
            <slot />
        </div>
    </div>
</template>
<script>
import { create } from "../utils";
import { raf } from "../utils/raf";
import { on, off } from "../utils/event";
import scrollUtils from "../utils/scroll";
export default create({
    name: "s-tabs",
    props: {
        sticky: Boolean,
        active: {
            type: [Number, String],
            default: 0
        },
        type: {
            type: String,
            default: "line"
        },
        duration: {
            type: Number,
            default: 0.2
        },
        swipeThreshold: {
            type: Number,
            default: 4
        }
    },
    data() {
        return {
            tabs: [],
            position: "content-top",
            curActive: 0,
            navBarStyle: {}
        };
    },
    computed: {
        scrollable() {
            return this.tabs.length > this.swipeThreshold;
        }
    },
    watch: {
        active(val) {
           this.correctActive(val);
        },
        tabs(tabs) {
            this.correctActive(this.curActive);
            this.setNavBar();
        },
        curActive() {
            this.scrollIntoView();
            this.setNavBar();
            // scroll to correct position
            if (this.position === 'page-top' || this.position === 'content-bottom') {
                scrollUtils.setScrollTop(this.scrollEl, scrollUtils.getElementTop(this.$el));
            }
        },
        sticky(isSticky) {
            this.scrollHandle(isSticky);
        }
    },
    mounted() {
        this.correctActive(this.active);
        this.setNavBar();
        this.$nextTick(() => {
            if (this.sticky) {
                this.scrollHandler(true);
            }
            this.scrollIntoView();
        });
    },
    beforeDestroy() {
        /* istanbul ignore next */
        if (this.sticky) {
           this.scrollHandler(false);
        }
    },
    methods: {
        // sticky相关操作
        scrollHandler(init) {
            this.scrollEl =
                this.scrollEl || scrollUtils.getScrollEventTarget(this.$el);
            (init ? on : off)(this.scrollEl, "scroll", this.onScroll, true);
            if (init) {
                this.onScroll();
            }
        },
        // adjust tab position
        onScroll() {
            const scrollTop = scrollUtils.getScrollTop(this.scrollEl);
            const elTopToPageTop = scrollUtils.getElementTop(this.$el);
            const elBottomToPageTop =
                elTopToPageTop +
                this.$el.offsetHeight -
                this.$refs.wrap.offsetHeight;
            if (scrollTop > elBottomToPageTop) {
                this.position = "content-bottom";
            } else if (scrollTop > elTopToPageTop) {
                this.position = "page-top";
            } else {
                this.position = "content-top";
            }
        },
        setNavBar() {
            this.$nextTick(() => {
                if (!this.$refs.tabs) {
                    return;
                }
                const tab = this.$refs.tabs[this.curActive];
                this.navBarStyle = {
                    width: `${tab.offsetWidth || 0}px`,
                    transform: `translate(${tab.offsetLeft || 0}px, 0)`,
                    transitionDuration: `${this.duration}s`
                };
            });
        },
        // correct the value of active
        correctActive(active) {
            active = +active;
            const exist = this.tabs.some(tab => tab.index === active);
            const defaultActive = (this.tabs[0] || {}).index || 0;
            this.curActive = exist ? active : defaultActive;
        },
        // 触发点击事件
        onClick(index) {
            if (this.tabs[index].disabled) {
                this.$emit("disabled", index);
            } else {
                this.$emit("click", index);
                this.curActive = index;
            }
        },
        // scroll active tab into view
        scrollIntoView() {
            if (!this.scrollable || !this.$refs.tabs) {
                return;
            }
            const tab = this.$refs.tabs[this.curActive];
            const { nav } = this.$refs;
            const { scrollLeft, offsetWidth: navWidth } = nav;
            const { offsetLeft, offsetWidth: tabWidth } = tab;
            this.scrollTo(
                nav,
                scrollLeft,
                offsetLeft - (navWidth - tabWidth) / 2
            );
        },
        scrollTo(el, from, to) {
            let count = 0;
            const frames = Math.round(this.duration * 1000 / 16);
            const animate = () => {
                el.scrollLeft += (to - from) / frames;
                if (++count < frames) {
                    raf(animate);
                }
            };
            animate();
        }
    }
});
</script>