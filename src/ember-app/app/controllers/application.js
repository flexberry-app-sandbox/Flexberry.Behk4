import Controller from '@ember/controller';
import $ from 'jquery';
import { computed, observer } from '@ember/object';
import { isNone } from '@ember/utils';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';



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

  /**
    Locales supported by application.

    @property locales
    @type String[]
    @default ['ru', 'en']
  */
  locales: undefined,

  /**
    Handles changes in userSettingsService.isUserSettingsServiceEnabled.

    @method _userSettingsServiceChanged
    @private
  */
  _userSettingsServiceChanged: observer('userSettingsService.isUserSettingsServiceEnabled', function() {
    this.get('target.router').refresh();
  }),

  /**
    Initializes controller.
  */
  init() {
    this._super(...arguments);

    let i18n = this.get('i18n');
    if (isNone(i18n)) {
      return;
    }

    this.set('locales', ['ru', 'en']);

    // If i18n.locale is long value like 'ru-RU', 'en-GB', ... this code will return short variant 'ru', 'en', etc.
    let shortCurrentLocale = this.get('i18n.locale').split('-')[0];
    let availableLocales = A(this.get('locales'));

    // Force current locale to be one of available,
    // if browser's current language is not supported by dummy application,
    // or if browser's current locale is long value like 'ru-RU', 'en-GB', etc.
    if (!availableLocales.includes(shortCurrentLocale)) {
      i18n.set('locale', 'en');
    } else {
      i18n.set('locale', shortCurrentLocale);
    }
  },

  /**
    Service that triggers objectlistview events.

    @property objectlistviewEventsService
    @type Service
  */
  objectlistviewEventsService: service('objectlistview-events'),

  /**
    Service for managing the state of the application.

    @property appState
    @type AppStateService
  */
  appState: service(),

  actions: {
    /**
      Call `updateWidthTrigger` for `objectlistviewEventsService`.

      @method actions.updateWidth
    */
    updateWidth() {
      this.get('objectlistviewEventsService').updateWidthTrigger();
    },

    /**
      Toggles application sitemap's side bar.

      @method actions.toggleSidebar
    */
    toggleSidebar() {
      let sidebar = $('.ui.sidebar.main.menu');
      sidebar.sidebar('toggle');
      sidebar.toggleClass('sidebar-mini');

      $('.full.height').toggleClass('content-opened');

      $('.sidebar.icon .text_menu').toggleClass('hidden');
      $('.sidebar.icon').toggleClass('text-menu-show');
      $('.sidebar.icon').toggleClass('text-menu-hide');
      $('.bgw-opacity').toggleClass('hidden');

      // For reinit overflowed tabs.
      $(window).trigger('resize');
    },

    /**
      Toggles application sitemap's side bar in mobile view.

      @method actions.toggleSidebarMobile
    */
    toggleSidebarMobile() {
      $('.ui.sidebar.main.menu').sidebar('toggle');

      $('.sidebar.icon').toggleClass('text-menu-show');
      $('.sidebar.icon').toggleClass('text-menu-hide');
      $('.sidebar.icon').toggleClass('hidden-text');
      $('.bgw-opacity').toggleClass('hidden');

      if (!this.get('_hideEventIsAttached')) {
        $('.ui.sidebar.main.menu').sidebar('attach events', '.ui.sidebar.main.menu .item a', 'hide');
        this.set('_hideEventIsAttached', true);
      }
    }
  }
});
