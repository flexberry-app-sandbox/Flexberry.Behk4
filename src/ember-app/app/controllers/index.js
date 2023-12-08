import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.behk4.caption'),
          title: i18n.t('forms.application.sitemap.behk4.title'),
          children: [{
            link: 'i-i-s-behk4-должности-l',
            caption: i18n.t('forms.application.sitemap.behk4.i-i-s-behk4-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.behk4.i-i-s-behk4-должности-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-behk4-контрагенты-l',
            caption: i18n.t('forms.application.sitemap.behk4.i-i-s-behk4-контрагенты-l.caption'),
            title: i18n.t('forms.application.sitemap.behk4.i-i-s-behk4-контрагенты-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-behk4-питания-l',
            caption: i18n.t('forms.application.sitemap.behk4.i-i-s-behk4-питания-l.caption'),
            title: i18n.t('forms.application.sitemap.behk4.i-i-s-behk4-питания-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-behk4-ингредиенты-l',
            caption: i18n.t('forms.application.sitemap.behk4.i-i-s-behk4-ингредиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.behk4.i-i-s-behk4-ингредиенты-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-behk4-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.behk4.i-i-s-behk4-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.behk4.i-i-s-behk4-сотрудники-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-behk4-документ-заказа-l',
            caption: i18n.t('forms.application.sitemap.behk4.i-i-s-behk4-документ-заказа-l.caption'),
            title: i18n.t('forms.application.sitemap.behk4.i-i-s-behk4-документ-заказа-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})