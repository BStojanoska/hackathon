import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ProfileSettings from '../../features/settings/profilesettings'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Фамилии"}))
      }, [])


    //   <div role="tablist" className="tabs tabs-lifted">
        //   <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
        //   <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 1</div>
        
        //   <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" checked />
        //   <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>
        
        //   <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3" />
        //   <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div>
        // </div>

    return(
        <>
        <div role="tablist" className="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 1</div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" checked />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div>
        </div>
        <ProfileSettings />
        </>
    )
}

export default InternalPage