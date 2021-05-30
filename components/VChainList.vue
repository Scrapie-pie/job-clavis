<template lang="pug">
  .v-chain-list
    VChainItem(v-for="(item, index) in list", key="index", :isLast="checkLast(index)", :title="item.title") {{item.content}}

</template>

<script>
import VChainItem from "@/components/VChainItem";
export default {
    name: "VChainList",
    components: {
        VChainItem
    },
    data() {
        return {
            list: [
                {title: 'Слушаем', content: 'Берём все ваши идеи'},
                {title: 'Думаем', content: 'Менеджерим процесс'},
                {title: 'Анализируем', content: 'Собираем воедино'},
                {title: 'Оформляем', content: 'Отдаём базис проекта'},
                {title: 'Результат', content: 'Мы собираем воедино данные и документы, чтобы студиям было проще и быстрее начать ваш проект'},
            ]
        }
    },
    props: {
        //list: { type: Array, required: true }
    },
    methods: {
        checkLast(index) {
            return index === this.list.length - 1;
        }
    }
}
</script>

<style lang="scss">
  .v-chain-list {

  }
</style>
