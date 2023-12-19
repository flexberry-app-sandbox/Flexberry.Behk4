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
          caption: i18n.t('forms.application.sitemap.запись.caption'),
          title: i18n.t('forms.application.sitemap.запись.title'),
          children: [{
            link: 'i-i-s-destkijj-sad-документ-заказа-l',
            caption: i18n.t('forms.application.sitemap.запись.i-i-s-destkijj-sad-документ-заказа-l.caption'),
            title: i18n.t('forms.application.sitemap.запись.i-i-s-destkijj-sad-документ-заказа-l.title'),
            icon: 'chart line',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.контрагенты.caption'),
          title: i18n.t('forms.application.sitemap.контрагенты.title'),
          children: [{
            link: 'i-i-s-destkijj-sad-контрагенты-l',
            caption: i18n.t('forms.application.sitemap.контрагенты.i-i-s-destkijj-sad-контрагенты-l.caption'),
            title: i18n.t('forms.application.sitemap.контрагенты.i-i-s-destkijj-sad-контрагенты-l.title'),
            icon: 'table',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.сотрудники.title'),
          children: [{
            link: 'i-i-s-destkijj-sad-должности-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-destkijj-sad-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-destkijj-sad-должности-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-destkijj-sad-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-destkijj-sad-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-destkijj-sad-сотрудники-l.title'),
            icon: 'building',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.питание.caption'),
          title: i18n.t('forms.application.sitemap.питание.title'),
          children: [{
            link: 'i-i-s-destkijj-sad-ингредиенты-l',
            caption: i18n.t('forms.application.sitemap.питание.i-i-s-destkijj-sad-ингредиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.питание.i-i-s-destkijj-sad-ингредиенты-l.title'),
            children: null
          }, {
            link: 'i-i-s-destkijj-sad-питания-l',
            caption: i18n.t('forms.application.sitemap.питание.i-i-s-destkijj-sad-питания-l.caption'),
            title: i18n.t('forms.application.sitemap.питание.i-i-s-destkijj-sad-питания-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})