<template lang="pug">

  VPageLayout
    VSection
      .step-one__wrapper

        h2 Команда, занимающаяся предпроектной  предтендерной подготовкой

        div
          VGradientUnderline: .h4 Если вы планируете создание:
          Vlist
            li веб-сервиса/ портала/ b2b-кабинета;
            li проекта e-com с нестандартными   интеграциями;
            li старт-аппа;
            li чего-то вот такого как у них, только круче

        p Clavis — молодая команда с большим опытом  на рынке веб-разработки. Мы собрались, чтобы сделать легче жизнь тем,  кто планирует сложный проект, но не знает с чего начать.

        div
          VGradientUnderline: .h4 Или вам нужно грамотно подготовить проект к тендеру:
          Vlist
            li оформить тендерные документы;
            li подготовить проектные данные;
            li сформировать критерии для участников тендера.

    VSection(theme="gradient-reverse")
      h2 Что мы делаем?
      .step-two
        VChainList(
          :list="[\
            {title: 'Слушаем', content: 'Берём все ваши идеи'},\
            {title: 'Думаем', content: 'Менеджерим процесс'},\
            {title: 'Анализируем', content: 'Собираем воедино'},\
            {title: 'Оформляем', content: 'Отдаём базис проекта'},\
            {title: 'Результат', content: 'Мы собираем воедино данные и документы, чтобы студиям было проще и быстрее начать ваш проект'},\
          ]"
        )
        img(src="~/assets/img/img01.png" alt="Что мы делаем?")

    VSection

      .step-three
        h2 Наши компетенции
        .step-three__list
          VIconContent(icon="content-window")
            .h4 Проектирование интерфейса (UX/UI)
            p Проводим необходимый пул работ по аналитике проекта: 
            ul
              li брифинг стейкхолдеров/ коридорные исследования,
              li погружение в задачи проекта,
              li проработка пользовательских сценариев.

            VLink(href="asda.com" target="_blank")
              | Подробнее...

          VIconContent(icon="content-document")
            .h4 Техническая документация проекта
            p Проводим брифинг на предмет формирования документа ФТТ (функционально-технические требования).
            p   Документ описывает все нюансы технической реализации проекта  (фронт-/ бэк -энд разработка, тестирование, интеграции).

          VIconContent(icon="content-check")
            .h4 Тендерная  подготовка
            p Формулируем документы  по проекту для тендерной площадки с точки зрения интересов  всех участников  со стороны Заказчика (руководство, маркетинг, закупки).
            p   Описываем требования  к потенциальному подрядчику (если нужно).  
            p Формируем оптимальное тендерное задание (если нужно).

        .step-three__badges
          img(src="~/assets/img/badge-01.png" alt="miro").step-three__badges-item
          img(src="~/assets/img/badge-02.png" alt="xmind").step-three__badges-item
          img(src="~/assets/img/badge-03.png" alt="figma").step-three__badges-item
          img(src="~/assets/img/badge-04.png" alt="azure").step-three__badges-item

      .step-four
        h2 Как это бывает сейчас
        .step-four__description
          .step-four__description-item
            .h4 Клиент
            br
            .h4 Веб-студия/агентство
          .step-four__description-item
            span Клиент приходит в веб-студию/ агентство за разработкой сложного проекта.
            .step-four__description-smile: VIcon(name="smile-funny")
            span Расчётом проектов в студиях занимаются менеджеры. Менеджерская оценка часто бывает неточной и завышенной.
          .step-four__description-item
            span На входе мало данных для детального расчёта реализации.
            .step-four__description-smile: VIcon(name="smile-normal")
            span Программисты, UX/UI-аналитики заняты  на проектах и не всегда могут подключиться  к проработке запроса от клиента.
          .step-four__description-item
            span Клиент получает завышенную оценку или долгий процесс разработки, разбитый по этапам  без фиксированного срока  и стоимости.
            .step-four__description-smile: VIcon(name="smile-angry")
            span
              |Специалистам нужно погружаться в текущее состояние проекта, или изучать проектную документацию на +50 страниц, или вообще проектировать на этапе оценки.<br>
              |При этом есть вероятность, что тендер будет выигран другой студией и время специалистов потрачено впустую.

    VSection(theme="gradient-reverse")
      h2 Наше предложение
      .step-five
        .step-five__description
          .step-five__logo
            VIcon(name="big-logo-clavis")
            .h2.step-five__logo-text Clavis — независимая студия
          div
            p которая реализует этап предпроектной аналитики.<br>Мы не делаем сам проект (дизайн+верстка+программирование).  
            p Мы готовим все необходимое (проектирование+прототипы+техническое задание),
            p чтобы вы получили справедливую оценку и качественный результат разработки от студий и агентств.   Мы собираем воедино данные и документы, чтобы студиям было проще и быстрее начать ваш проект

        .step-five__bottom
          .step-five__bottom-item
            .h4.step-five__bottom-title Сложные проекты
            VList.step-five__bottom-checkmarks
              li На основе структуры и прототипов можно рассчитать объем работ по дизайну и вёрстке
              li На основе подробного ТЗ можно сделать расчёт программирования / технической реализации проекта.

          .step-five__bottom-item
            .h4.step-five__bottom-title Для тендера
            VList.step-five__bottom-checkmarks
              li Будут собраны все данные внутри компании
              li Подготовлены критерии потенциального подрядчика


    VSection
      h2 Почему это выгодно?
      .step-six
        .step-six__description
          img(src="~/assets/img/img-01.png" alt="azure")
          .step-six__list
            VIconContent(icon="content-document")
              p Мы не делаем расчёт, заточенный под конкретного исполнителя, потому что независимы.<br>Это позволяет находить решения, оптимальные именно для Заказчика, а не для студии.
            VIconContent(icon="content-document")
              p Мы не делаем расчёт, заточенный под конкретного исполнителя, потому что независимы.<br>Это позволяет находить решения, оптимальные именно для Заказчика, а не для студии.
            VIconContent(icon="content-document")
              p Мы не делаем расчёт, заточенный под конкретного исполнителя, потому что независимы.<br>Это позволяет находить решения, оптимальные именно для Заказчика, а не для студии.
            VIconContent(icon="content-document")
              p Мы не делаем расчёт, заточенный под конкретного исполнителя, потому что независимы.<br>Это позволяет находить решения, оптимальные именно для Заказчика, а не для студии.

      h2 Наша команда
      .step-six__team
        .step-six__team-item
          img(src="~/assets/img/people/Gosha.jpg" alt="Гриценко Георгий").step-six__team-img
          .h4 Гриценко Георгий
          small Идейный вдохновитель
        .step-six__team-item
          img(src="~/assets/img/people/Ivan.jpg" alt="Царьков Иван").step-six__team-img
          .h4 Царьков Иван
          small UX/UI дизайнер
        .step-six__team-item
          img(src="~/assets/img/people/Felix_kryt.jpg" alt="Хайрулин Феликс").step-six__team-img
          .h4 Хайрулин Феликс
          small Руководитель проекта Clavis





</template>

<script>
import VPageLayout from "@/layouts/VPageLayout";
import Vlist from "@/components/Vlist";
import VGradientUnderline from "@/components/VGradientUnderline";
import VSection from "@/components/VSection";
import VChainList from "@/components/VChainList";
import VIconContent from "@/components/VIconContent";
import VLink from "@/components/VLink";
import VIcon from "@/components/VIcon";


export default {
    components: {
        VPageLayout,
        Vlist,
        VSection,
        VGradientUnderline,
        VChainList,
        VIconContent,
        VLink,
        VIcon
    }
}
</script>

<style lang="scss">

.step-one {
  &__wrapper {
    //padding-top: 110px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 445px);
    justify-content: space-between;
    gap: 70px 200px;
    .h4 {
      @include gradient_underline(100%);
    }
  }
}


.step-two {
  //padding-top: 110px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 50px;
  align-items: center;
}

.step-three {
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }
  &__badges {
    margin: 80px 0 110px;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
    gap: 20px;
    &-item {
      margin: 0 auto;
      width: 215px;
      height: 128px;
    }
  }
}

.step-four {
  &__description {
    @include flex_it(column, 85px);
    & > *:first-child {
      margin-bottom: 0;
    }
    &-item {
      align-items: center;
      display: grid;
      grid-template-columns: 1fr 114px 1fr;
      grid-column-gap: 75px;

      .h4 {
        padding-bottom: 5px;
        text-align: center;
        @include gradient_underline(155px)
      }
    }
    &-smile {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      max-width: 114px;
      max-height: 114px;
      margin: 0 auto;
      padding: 36px;
      border: 1px solid #000;
    }
  }
}

.step-five {
  &__description {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
    margin-bottom: 100px;
  }
  &__logo {
    @include flex_it(row, 20px);
    &-text {
      max-width: 350px;
      margin-bottom: 0;
      font-weight: 800;
    }
  }

  &__bottom {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    &-item {
      @include flex_it(row, 40px);
      //justify-content: center;
    }
    &-title {
      text-align: center;
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      border-left: 2px solid currentColor;
      margin: 0;
      padding-left: 10px;
    }
    &-checkmarks {
      justify-content: center;
    }
  }
}

.step-six {
  &__description {
    display: grid;
    grid-template-columns: auto minmax(390px, 1fr);
    grid-column-gap: 90px;
    margin-bottom: 70px;
  }
  &__list {



  }
  &__team {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    &-item {
      text-align: center;
    }
    &-img {
      margin-bottom: 20px;
      border-radius: 8px;
    }
  }
}

</style>
