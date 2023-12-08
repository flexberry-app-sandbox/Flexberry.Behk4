import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Behk4',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Behk4',
          title: 'Behk4'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
