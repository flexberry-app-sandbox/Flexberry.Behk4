import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISBehk4ДокументЗаказаLForm from './forms/i-i-s-behk4-документ-заказа-l';
import IISBehk4ДолжностиLForm from './forms/i-i-s-behk4-должности-l';
import IISBehk4ИнгредиентыLForm from './forms/i-i-s-behk4-ингредиенты-l';
import IISBehk4КонтрагентыLForm from './forms/i-i-s-behk4-контрагенты-l';
import IISBehk4ПитанияLForm from './forms/i-i-s-behk4-питания-l';
import IISBehk4СотрудникиLForm from './forms/i-i-s-behk4-сотрудники-l';
import IISBehk4ДокументЗаказаEForm from './forms/i-i-s-behk4-документ-заказа-e';
import IISBehk4ДолжностиEForm from './forms/i-i-s-behk4-должности-e';
import IISBehk4ИнгредиентыEForm from './forms/i-i-s-behk4-ингредиенты-e';
import IISBehk4КонтрагентыEForm from './forms/i-i-s-behk4-контрагенты-e';
import IISBehk4ПитанияEForm from './forms/i-i-s-behk4-питания-e';
import IISBehk4СотрудникиEForm from './forms/i-i-s-behk4-сотрудники-e';
import IISBehk4ДокументЗаказаModel from './models/i-i-s-behk4-документ-заказа';
import IISBehk4ДолжностиModel from './models/i-i-s-behk4-должности';
import IISBehk4ЗаписьModel from './models/i-i-s-behk4-запись';
import IISBehk4ИнгредиентыModel from './models/i-i-s-behk4-ингредиенты';
import IISBehk4КонтрагентыModel from './models/i-i-s-behk4-контрагенты';
import IISBehk4ПитанияModel from './models/i-i-s-behk4-питания';
import IISBehk4СоставБлюдаModel from './models/i-i-s-behk4-состав-блюда';
import IISBehk4СотрудникиModel from './models/i-i-s-behk4-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-behk4-документ-заказа': IISBehk4ДокументЗаказаModel,
    'i-i-s-behk4-должности': IISBehk4ДолжностиModel,
    'i-i-s-behk4-запись': IISBehk4ЗаписьModel,
    'i-i-s-behk4-ингредиенты': IISBehk4ИнгредиентыModel,
    'i-i-s-behk4-контрагенты': IISBehk4КонтрагентыModel,
    'i-i-s-behk4-питания': IISBehk4ПитанияModel,
    'i-i-s-behk4-состав-блюда': IISBehk4СоставБлюдаModel,
    'i-i-s-behk4-сотрудники': IISBehk4СотрудникиModel
  },

  'application-name': 'Behk4',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Behk4',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Behk4',
          title: 'Behk4'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        запись: {
          caption: 'Запись',
          title: 'Запись',
          'i-i-s-behk4-документ-заказа-l': {
            caption: 'Документ заказа',
            title: ''
          }
        },
        контрагенты: {
          caption: 'Контрагенты',
          title: 'Контрагенты',
          'i-i-s-behk4-контрагенты-l': {
            caption: 'Контрагенты',
            title: 'Контрагенты'
          }
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-behk4-должности-l': {
            caption: 'Должности',
            title: 'Должности'
          },
          'i-i-s-behk4-сотрудники-l': {
            caption: 'Сотрудники',
            title: 'Сотрудники'
          }
        },
        питание: {
          caption: 'Питание',
          title: 'Питание',
          'i-i-s-behk4-ингредиенты-l': {
            caption: 'Ингредиенты',
            title: 'Ингредиенты'
          },
          'i-i-s-behk4-питания-l': {
            caption: 'Питания',
            title: 'Питания'
          }
        },
        behk4: {
          caption: 'Behk4',
          title: 'Behk4',
          'i-i-s-behk4-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-behk4-контрагенты-l': {
            caption: 'Контрагенты',
            title: ''
          },
          'i-i-s-behk4-питания-l': {
            caption: 'Питания',
            title: ''
          },
          'i-i-s-behk4-ингредиенты-l': {
            caption: 'Ингредиенты',
            title: ''
          },
          'i-i-s-behk4-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-behk4-документ-заказа-l': {
            caption: 'Документ заказа',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-behk4-документ-заказа-l': IISBehk4ДокументЗаказаLForm,
    'i-i-s-behk4-должности-l': IISBehk4ДолжностиLForm,
    'i-i-s-behk4-ингредиенты-l': IISBehk4ИнгредиентыLForm,
    'i-i-s-behk4-контрагенты-l': IISBehk4КонтрагентыLForm,
    'i-i-s-behk4-питания-l': IISBehk4ПитанияLForm,
    'i-i-s-behk4-сотрудники-l': IISBehk4СотрудникиLForm,
    'i-i-s-behk4-документ-заказа-e': IISBehk4ДокументЗаказаEForm,
    'i-i-s-behk4-должности-e': IISBehk4ДолжностиEForm,
    'i-i-s-behk4-ингредиенты-e': IISBehk4ИнгредиентыEForm,
    'i-i-s-behk4-контрагенты-e': IISBehk4КонтрагентыEForm,
    'i-i-s-behk4-питания-e': IISBehk4ПитанияEForm,
    'i-i-s-behk4-сотрудники-e': IISBehk4СотрудникиEForm
  },

});

export default translations;
