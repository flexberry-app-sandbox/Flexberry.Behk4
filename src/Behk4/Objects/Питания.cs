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
    /// Питания.
    /// </summary>
    [TrimmedStringStorage(false)]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПитанияE", new string[] {
            "КодПитания as \'Код питания\'",
            "ВидПитания as \'Вид питания\'"})]
    [AssociatedDetailViewAttribute("ПитанияE", "СоставБлюда", "СоставБлюдаE", true, "", "Состав блюда", true, new string[] {
            ""})]
    [View("ПитанияL", new string[] {
            "КодПитания as \'Код питания\'",
            "ВидПитания as \'Вид питания\'"})]
    public class Питания : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодПитания;
        
        private IIS.Behk4.Питание fВидПитания;
        
        private IIS.Behk4.DetailArrayOfСоставБлюда fСоставБлюда;
        
        /// <summary>
        /// ВидПитания.
        /// </summary>
        // *** Start programmer edit section *** (Питания.ВидПитания CustomAttributes)

        // *** End programmer edit section *** (Питания.ВидПитания CustomAttributes)
        public virtual IIS.Behk4.Питание ВидПитания
        {
            get
            {
                // *** Start programmer edit section *** (Питания.ВидПитания Get start)

                // *** End programmer edit section *** (Питания.ВидПитания Get start)
                IIS.Behk4.Питание result = this.fВидПитания;
                // *** Start programmer edit section *** (Питания.ВидПитания Get end)

                // *** End programmer edit section *** (Питания.ВидПитания Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Питания.ВидПитания Set start)

                // *** End programmer edit section *** (Питания.ВидПитания Set start)
                this.fВидПитания = value;
                // *** Start programmer edit section *** (Питания.ВидПитания Set end)

                // *** End programmer edit section *** (Питания.ВидПитания Set end)
            }
        }
        
        /// <summary>
        /// КодПитания.
        /// </summary>
        // *** Start programmer edit section *** (Питания.КодПитания CustomAttributes)

        // *** End programmer edit section *** (Питания.КодПитания CustomAttributes)
        public virtual int КодПитания
        {
            get
            {
                // *** Start programmer edit section *** (Питания.КодПитания Get start)

                // *** End programmer edit section *** (Питания.КодПитания Get start)
                int result = this.fКодПитания;
                // *** Start programmer edit section *** (Питания.КодПитания Get end)

                // *** End programmer edit section *** (Питания.КодПитания Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Питания.КодПитания Set start)

                // *** End programmer edit section *** (Питания.КодПитания Set start)
                this.fКодПитания = value;
                // *** Start programmer edit section *** (Питания.КодПитания Set end)

                // *** End programmer edit section *** (Питания.КодПитания Set end)
            }
        }
        
        /// <summary>
        /// Питания.
        /// </summary>
        // *** Start programmer edit section *** (Питания.СоставБлюда CustomAttributes)

        // *** End programmer edit section *** (Питания.СоставБлюда CustomAttributes)
        public virtual IIS.Behk4.DetailArrayOfСоставБлюда СоставБлюда
        {
            get
            {
                // *** Start programmer edit section *** (Питания.СоставБлюда Get start)

                // *** End programmer edit section *** (Питания.СоставБлюда Get start)
                if ((this.fСоставБлюда == null))
                {
                    this.fСоставБлюда = new IIS.Behk4.DetailArrayOfСоставБлюда(this);
                }
                IIS.Behk4.DetailArrayOfСоставБлюда result = this.fСоставБлюда;
                // *** Start programmer edit section *** (Питания.СоставБлюда Get end)

                // *** End programmer edit section *** (Питания.СоставБлюда Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Питания.СоставБлюда Set start)

                // *** End programmer edit section *** (Питания.СоставБлюда Set start)
                this.fСоставБлюда = value;
                // *** Start programmer edit section *** (Питания.СоставБлюда Set end)

                // *** End programmer edit section *** (Питания.СоставБлюда Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПитанияE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПитанияE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПитанияE", typeof(IIS.Behk4.Питания));
                }
            }
            
            /// <summary>
            /// "ПитанияL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПитанияL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПитанияL", typeof(IIS.Behk4.Питания));
                }
            }
        }
    }
}
