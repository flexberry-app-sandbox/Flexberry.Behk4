﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Behk4
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Запись.
    /// </summary>
    // *** Start programmer edit section *** (Запись CustomAttributes)

    // *** End programmer edit section *** (Запись CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗаписьE", new string[] {
            "Сумма as \'Сумма\'",
            "Питания as \'Питания\'",
            "Питания.КодПитания as \'Код питания\'",
            "Питания.ВидПитания",
            "Сотрудники as \'Сотрудники\'",
            "Сотрудники.Фамилия as \'Фамилия\'",
            "Сотрудники.Имя",
            "Сотрудники.Отчество"}, Hidden=new string[] {
            "Питания.КодПитания",
            "Питания.ВидПитания",
            "Сотрудники.Фамилия",
            "Сотрудники.Имя",
            "Сотрудники.Отчество"})]
    [MasterViewDefineAttribute("ЗаписьE", "Питания", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "КодПитания")]
    [MasterViewDefineAttribute("ЗаписьE", "Сотрудники", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Фамилия")]
    public class Запись : ICSSoft.STORMNET.DataObject
    {
        
        private int fСумма;
        
        private IIS.Behk4.Питания fПитания;
        
        private IIS.Behk4.Сотрудники fСотрудники;
        
        private IIS.Behk4.ДокументЗаказа fДокументЗаказа;
        
        // *** Start programmer edit section *** (Запись CustomMembers)

        // *** End programmer edit section *** (Запись CustomMembers)

        
        /// <summary>
        /// Сумма.
        /// </summary>
        // *** Start programmer edit section *** (Запись.Сумма CustomAttributes)

        // *** End programmer edit section *** (Запись.Сумма CustomAttributes)
        public virtual int Сумма
        {
            get
            {
                // *** Start programmer edit section *** (Запись.Сумма Get start)

                // *** End programmer edit section *** (Запись.Сумма Get start)
                int result = this.fСумма;
                // *** Start programmer edit section *** (Запись.Сумма Get end)

                // *** End programmer edit section *** (Запись.Сумма Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Запись.Сумма Set start)

                // *** End programmer edit section *** (Запись.Сумма Set start)
                this.fСумма = value;
                // *** Start programmer edit section *** (Запись.Сумма Set end)

                // *** End programmer edit section *** (Запись.Сумма Set end)
            }
        }
        
        /// <summary>
        /// Запись.
        /// </summary>
        // *** Start programmer edit section *** (Запись.Питания CustomAttributes)

        // *** End programmer edit section *** (Запись.Питания CustomAttributes)
        [PropertyStorage(new string[] {
                "Питания"})]
        [NotNull()]
        public virtual IIS.Behk4.Питания Питания
        {
            get
            {
                // *** Start programmer edit section *** (Запись.Питания Get start)

                // *** End programmer edit section *** (Запись.Питания Get start)
                IIS.Behk4.Питания result = this.fПитания;
                // *** Start programmer edit section *** (Запись.Питания Get end)

                // *** End programmer edit section *** (Запись.Питания Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Запись.Питания Set start)

                // *** End programmer edit section *** (Запись.Питания Set start)
                this.fПитания = value;
                // *** Start programmer edit section *** (Запись.Питания Set end)

                // *** End programmer edit section *** (Запись.Питания Set end)
            }
        }
        
        /// <summary>
        /// Запись.
        /// </summary>
        // *** Start programmer edit section *** (Запись.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (Запись.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.Behk4.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (Запись.Сотрудники Get start)

                // *** End programmer edit section *** (Запись.Сотрудники Get start)
                IIS.Behk4.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (Запись.Сотрудники Get end)

                // *** End programmer edit section *** (Запись.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Запись.Сотрудники Set start)

                // *** End programmer edit section *** (Запись.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (Запись.Сотрудники Set end)

                // *** End programmer edit section *** (Запись.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Behk4.ДокументЗаказа.
        /// </summary>
        // *** Start programmer edit section *** (Запись.ДокументЗаказа CustomAttributes)

        // *** End programmer edit section *** (Запись.ДокументЗаказа CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ДокументЗаказа"})]
        public virtual IIS.Behk4.ДокументЗаказа ДокументЗаказа
        {
            get
            {
                // *** Start programmer edit section *** (Запись.ДокументЗаказа Get start)

                // *** End programmer edit section *** (Запись.ДокументЗаказа Get start)
                IIS.Behk4.ДокументЗаказа result = this.fДокументЗаказа;
                // *** Start programmer edit section *** (Запись.ДокументЗаказа Get end)

                // *** End programmer edit section *** (Запись.ДокументЗаказа Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Запись.ДокументЗаказа Set start)

                // *** End programmer edit section *** (Запись.ДокументЗаказа Set start)
                this.fДокументЗаказа = value;
                // *** Start programmer edit section *** (Запись.ДокументЗаказа Set end)

                // *** End programmer edit section *** (Запись.ДокументЗаказа Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗаписьE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаписьE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаписьE", typeof(IIS.Behk4.Запись));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Запись.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfЗапись CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfЗапись CustomAttributes)
    public class DetailArrayOfЗапись : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Behk4.DetailArrayOfЗапись members)

        // *** End programmer edit section *** (IIS.Behk4.DetailArrayOfЗапись members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Запись by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Запись.
        /// </summary>
        public DetailArrayOfЗапись(IIS.Behk4.ДокументЗаказа fДокументЗаказа) : 
                base(typeof(Запись), ((ICSSoft.STORMNET.DataObject)(fДокументЗаказа)))
        {
        }
        
        public IIS.Behk4.Запись this[int index]
        {
            get
            {
                return ((IIS.Behk4.Запись)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Behk4.Запись dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
