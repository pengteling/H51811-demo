<template>
  <div>
    <ul>
      <MusicItem
        v-for="(item,index) in musicList"
        :key="index"
        :music-item="item"
        :focus="item === musicItem"
        @changeMusic="changeMusic"
      >
      </MusicItem>
    </ul>
  </div>
</template>
<script>
import MusicItem from './MusicItem'

export default {
  name: 'List',
  components: {
    MusicItem,
  },
  inheritAttrs: false,
  props: ['musicList', 'musicItem'],
  methods: {
    changeMusic(musicItem) {
      this.$emit('changeMusic', musicItem)
    },
  },

}
/* eslint no-tabs:'off' */
</script>
<style lang="scss">
.components-listitem {
	height: 36px;
	line-height: 36px;
	border-bottom: 1px solid #ddd;
	text-indent: 10px;
	cursor: pointer;
	.delete{
		cursor: pointer;
		height: 30px;
		width: 30px;
		top: 3px;
		position: relative;
		transform: rotate(45deg);
		margin-right: 15px;
		&::before, &::after{
			content: '';
			display: block;
			background: #666;
			position: absolute;
		}
		&::before {
			width: 100%;
			height: 1px;
			top: 14px;
			left: 0;
		}
		&::after {
			height: 100%;
			width: 1px;
			left: 15px;
			top: 0;
		}
	}

	&.focus {
		color: #2f9842;
	}
}
.components-listitem:hover {
	background: #eee;
}
</style>
