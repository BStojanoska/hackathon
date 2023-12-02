import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ProfileSettings from '../../features/settings/profilesettings/index2'
import { setPageTitle } from '../../features/common/headerSlice'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Фамилии"}))
      }, [])



    return(
        <ProfileSettings />
    )
}

export default InternalPage