import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'
import InputText from '../../../components/Input/InputText'
import TextAreaInput from '../../../components/Input/TextAreaInput'
import ToogleInput from '../../../components/Input/ToogleInput'

function ProfileSettings(){


    const dispatch = useDispatch()

    // Call API to update profile settings changes
    const updateProfile = () => {
        dispatch(showNotification({message : "Profile Updated", status : 1}))    
    }

    const updateFormValue = ({updateType, value}) => {
        console.log(updateType)
    }

    return(
        <>
           <div role="tablist" className="tabs tabs-lifted  tabs-lg">
           <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Профил" checked />
           <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
           <div className="grid grid:gd-cols-1 grid-cols-2 gap-6">
            
            <div className = "w-full md:w-auto">
                <div className="avatar">
                   <div className="w-48 h-96 rounded">
                     <img src={require("./avatar.jpg")} />
                   </div>
                   <div className="px-10 ">
                        <InputText labelTitle="Име" defaultValue="Александра" updateFormValue={updateFormValue}/>
                        <InputText labelTitle="Презиме" defaultValue="Тестаровска" updateFormValue={updateFormValue}/>
                        <InputText labelTitle="ЕМБГ" defaultValue="1234567890" updateFormValue={updateFormValue}/> 
                        <div>
                <label htmlFor="status" className="label">Социјален статус</label>
                <select className="select select-primary w-full max-w-xl" id="status">
                  <option disabled selected>Верифициран</option>
                  <option>Во процес</option>
                  <option>Неверифициран</option>
                </select>               
                
                </div>
                    </div>              
                </div>  
            </div>
            
                <div>
                <InputText labelTitle="Адреса" defaultValue="Скопска бр. 31" updateFormValue={updateFormValue}/>
                <InputText labelTitle="Град" defaultValue="Скопје" updateFormValue={updateFormValue}/>
                <div id="skills">
                <label htmlFor="skills" className="label">Вештини</label>
                <div>
                <div className="badge badge-ghost gap-2 m-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  Word
                </div>
                <div className="badge badge-ghost gap-2 m-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  Excel
                </div>
                <div className="badge badge-ghost gap-2 m-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  Powerpoint
                </div>
                </div>
                </div>                
                </div>                
                </div>
                <div className="divider"></div>
                <h1 className="text-2xl font-bold ml-10 mb-5">Работно искуство</h1>
                <div className="grid grid-cols-2">
                    <div className="px-10 ">
                            <InputText labelTitle="Позиција" defaultValue="Градежен работник" updateFormValue={updateFormValue}/>
                            <InputText labelTitle="Компанија" defaultValue="Пелагонија" updateFormValue={updateFormValue}/>
                            <InputText labelTitle="Период" defaultValue="2012-2013" updateFormValue={updateFormValue}/> 
                            <TextAreaInput labelTitle="Опис" defaultValue="Опис на завршени обврски" updateFormValue={updateFormValue}/> 
                            </div>
                    <div className="px-10 ">
                    <InputText labelTitle="Позиција" defaultValue="Општ работник" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Компанија" defaultValue="Треска" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Период" defaultValue="2013-2015" updateFormValue={updateFormValue}/> 
                    <TextAreaInput labelTitle="Опис" defaultValue="Разенсување на материјали и утовар и растовар на роба" updateFormValue={updateFormValue}/> 
                    </div>  
                    
                </div>
                <div className="divider"></div>
                <h1 className="text-2xl font-bold ml-10 mb-5">Дискусија</h1>
                <div class="chat chat-start">
                    <div class="chat-image avatar">
                        <div class="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src="https://avatar.iran.liara.run/public" />
                        </div>
                    </div>
                    <div class="chat-bubble">Супер дечко, ептен се труди!</div>
                    </div>
                    <div class="chat chat-start">
                    <div class="chat-image avatar">
                        <div class="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div class="chat-bubble">Да, кај нас заврши 3 курса!</div>
                    </div>
                    <div class="chat chat-start">
                    <div class="chat-image avatar">
                        <div class="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src="https://avatar.iran.liara.run/public" />
                        </div>
                    </div>
                    <div class="chat-bubble">Денес му понудија работа!</div>
                    </div>
           </div>   
        
           <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Интеграциски процес"/>
           <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <div>
                <div>
                    <h1 className="text-5xl font-bold">Стекнување дигитални вештини</h1> 
                </div>
                <div className="divider"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ul className="steps steps-vertical">
             <li className="step step-accent">Изучување основни компјутерски вештини</li>
             <li className="step step-accent">Изучување основи на Word</li>
             <li className="step">Изучување основи на Powerpoint</li>
             <li className="step">Практичен проект</li>
           </ul>
           <ul class="menu bg-base-200 w-56 rounded-box">
                <li>
                    <a>
                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
  </svg>
                    
                    Додади
                    </a>
                </li>
                <li>
                    <a>
                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279"/>
  </svg>
                    Измени
                    </a>
                </li>
                <li>
                    <a>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="h-5 w-5" viewBox="0 0 30 30">
    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
</svg>
                    Избриши
                    </a>
                </li>
            </ul>
           <div>
                <InputText labelTitle="Задача" defaultValue="Градинарство" updateFormValue={updateFormValue}/>
                <InputText labelTitle="Ментор" defaultValue="Филип Менторов" updateFormValue={updateFormValue}/>
                <TextAreaInput labelTitle="Забелешки" defaultValue="Во прогрес" updateFormValue={updateFormValue}/>
                </div>
                
            </div>
            <div className="mt-16"><button className="btn btn-success float-right" onClick={() => updateProfile()}>Зачувај</button></div>
           </div>   

           
        
           </div>
        </div>
         
        </>
    )
}


export default ProfileSettings