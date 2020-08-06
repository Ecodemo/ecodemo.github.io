// ==UserScript==
// @name 觅影去搜索
// @version 20200506
// @description 觅影隐藏搜索
// @include *
// ==/UserScript==
document.head.insertAdjacentHTML('beforeend',`<style>

div[class^="o--tip"],
span[class^="o--span"],
div[class^="o--vip-list o--collapse-box"] span[class^="o--vip-item"][_href^="http://"],div[class^="o--jump o--collapse-box"],
div[class^="o--setting"] [class^="o--edit-hint"],
div[class="o--actions"] div[class="o--action"] {
	display: none!important;
	max-width: 0!important;
	max-height: 0!important;
	overflow: hidden!important;
	position: absolute;
	left: -102030px
}

div[class^="o--setting"] [class="o--actions"] {
	text-align: center!important
}
</style>`);